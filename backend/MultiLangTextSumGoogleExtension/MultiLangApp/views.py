from django.shortcuts import render

# Create your views here.
import json
from django.contrib.auth.models import User #####
from django.http import JsonResponse , HttpResponse ####
from transformers import pipeline, set_seed


def home(request):
    return HttpResponse('<h1>MultiLangApp Home</h1>')

def get_summary(request):
    article = request.GET.get('article', None)

    print('article:', article)
    print(type(article))
    
    summarizer = pipeline("summarization")
    summary = summarizer(article, max_length=30, min_length=10, do_sample=False)[0]
    data = {
        'summary': summary['summary_text'],
        'raw': 'Successful',
    }

    print('json-data to be sent: ', data)

    return JsonResponse(data)

def post_summary(request):
    
    article = json.loads(request.body.decode("utf-8")).get('article')
    
    print('article:', article)
    print(type(article))

    data = {
        'raw': 'Failed',
    }
    
    if len(article) > 0 :
        import nltk
        nltk.download('punkt')
        from sumy.parsers.plaintext import PlaintextParser
        from sumy.nlp.tokenizers import Tokenizer

        document1 = article
        parser = PlaintextParser.from_string(document1,Tokenizer("english"))

        from sumy.summarizers.lsa import LsaSummarizer
        summarizer_lsa = LsaSummarizer()
        summary_2 = summarizer_lsa(parser.document,10)

        sentences = []
        for sentence in summary_2:
            print(type(sentence))
            sentences.append(str(sentence))

        data = {
            'summary': sentences,
            'raw': 'Successful',
        }

        print('json-data to be sent: ', data)

    return JsonResponse(data)