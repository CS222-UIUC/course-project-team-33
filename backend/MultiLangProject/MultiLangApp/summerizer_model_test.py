from datasets import load_dataset
from transformers import PegasusForConditionalGeneration, PegasusTokenizer
from torchmetrics.text.rouge import ROUGEScore
from pprint import pprint

# Load the test dataset
dataset = load_dataset('cnn_dailymail', '3.0.0', split='test')

# Initialize the Pegasus tokenizer and model
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-cnn_dailymail')
model = PegasusForConditionalGeneration.from_pretrained('google/pegasus-cnn_dailymail')


# Evaluate the model on the test dataset
references = []
predictions = []
rougescore = []
alpha = 0.2
rouge = ROUGEScore()


for i in range(len(dataset)):
    if i == 100:
        break
    if i % 10 == 0:
        print("num example:",i)
    example = dataset[i]
    input_ids = tokenizer.encode(example['article'], truncation=True, padding='max_length', max_length=1024, return_tensors='pt')
    output_ids = model.generate(input_ids, max_length=128, num_beams=4, early_stopping=True)
    reference = example['highlights']
    prediction = tokenizer.decode(output_ids[0], skip_special_tokens=True)
    rougescore.append(rouge(prediction, reference))
    i += 1

# print rouge score for entire dataset
print("average rouge1_recall: ", sum([x['rouge1_recall'] for x in rougescore])/len(rougescore))
print("average rouge1_precision: ", sum([x['rouge1_precision'] for x in rougescore])/len(rougescore))
print("average rouge2_recall: ", sum([x['rouge2_recall'] for x in rougescore])/len(rougescore))
print("average rouge2_precision: ", sum([x['rouge2_precision'] for x in rougescore])/len(rougescore))
print("average rougeL_recall: ", sum([x['rougeL_recall'] for x in rougescore])/len(rougescore))
print("average rougeL_precision: ", sum([x['rougeL_precision'] for x in rougescore])/len(rougescore))
    
