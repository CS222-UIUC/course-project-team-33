from django.shortcuts import render

# Create your views here.
import json
from django.contrib.auth.models import User #####
from django.http import JsonResponse , HttpResponse ####


from transformers import pipeline, set_seed

#---------------------------#
#    Basic Connection Test  #
#---------------------------#

# Test Case 1: REST API establishment
def test_connection(request):
    display_msg = {
        'Connection': 'Sucessful'
    }
    return JsonResponse(display_msg)

# Test Case 2: GET request Functionality
def test_GET_request(request):
    msg = request.GET.get('test', None)
    display_msg = {
        'GET_request': 'Sucessful'
    }
    return JsonResponse(display_msg)

#-----------------------------------#
#    Summerizer Functionality Test  #
#-----------------------------------#

# Test Case 1: short article
def test_summerizer_short(request):
    summarizer = pipeline("summarization")
    ARTICLE = """
                Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring 
                information—demonstrated by machines, as opposed to intelligence displayed by non-human 
                animals and humans. Example tasks in which this is done include speech recognition, 
                computer vision, translation between (natural) languages, as well as other mappings of 
                inputs.
            """
    summary=summarizer(ARTICLE, max_length=50, min_length=10, do_sample=False)[0]
    display_msg = {
        'summary': summary,
        'summerizer_short': 'Sucessful'
    }
    return JsonResponse(display_msg)

# Test Case 2: medium article
def test_summerizer_medium(request):
    summarizer = pipeline("summarization")
    ARTICLE = """
                Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring 
                information—demonstrated by machines, as opposed to intelligence displayed by non-human 
                animals and humans. Example tasks in which this is done include speech recognition, 
                computer vision, translation between (natural) languages, as well as other mappings of 
                inputs.
                
                AI applications include advanced web search engines (e.g., Google Search), recommendation 
                systems (used by YouTube, Amazon, and Netflix), understanding human speech (such as Siri 
                and Alexa), self-driving cars (e.g., Waymo), generative or creative tools (ChatGPT and AI 
                art), automated decision-making, and competing at the highest level in strategic game systems 
                (such as chess and Go).
            """
    summary=summarizer(ARTICLE, max_length=130, min_length=30, do_sample=False)[0]
    display_msg = {
        'summary': summary,
        'summerizer_medium': 'Sucessful'
    }
    return JsonResponse(display_msg)

# Test Case 3: long article 
def test_summerizer_long(request):
    summarizer = pipeline("summarization")
    ARTICLE = """
                Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring 
                information—demonstrated by machines, as opposed to intelligence displayed by non-human 
                animals and humans. Example tasks in which this is done include speech recognition, 
                computer vision, translation between (natural) languages, as well as other mappings of 
                inputs.
                
                AI applications include advanced web search engines (e.g., Google Search), recommendation 
                systems (used by YouTube, Amazon, and Netflix), understanding human speech (such as Siri 
                and Alexa), self-driving cars (e.g., Waymo), generative or creative tools (ChatGPT and AI 
                art), automated decision-making, and competing at the highest level in strategic game systems 
                (such as chess and Go).
                
                As machines become increasingly capable, tasks considered to require "intelligence" are often 
                removed from the definition of AI, a phenomenon known as the AI effect.For instance, optical 
                character recognition is frequently excluded from things considered to be AI,having become a 
                routine technology.
                
                Artificial intelligence was founded as an academic discipline in 1956, and in the years since 
                it has experienced several waves of optimism,followed by disappointment and the loss of funding 
                (known as an "AI winter"),followed by new approaches, success, and renewed funding.AI research 
                has tried and discarded many different approaches, including simulating the brain, modeling 
                human problem solving, formal logic, large databases of knowledge, and imitating animal behavior. 
                In the first decades of the 21st century, highly mathematical and statistical machine learning 
                has dominated the field, and this technique has proved highly successful, helping to solve many 
                challenging problems throughout industry and academia.
                
                The various sub-fields of AI research are centered around particular goals and the use of particular 
                tools. The traditional goals of AI research include reasoning, knowledge representation, planning, 
                learning, natural language processing, perception, and the ability to move and manipulate objects. 
                General intelligence (the ability to solve an arbitrary problem) is among the field's long-term goals.
                To solve these problems, AI researchers have adapted and integrated a wide range of problem-solving 
                techniques, including search and mathematical optimization, formal logic, artificial neural networks, 
                and methods based on statistics, probability, and economics. AI also draws upon computer science, 
                psychology, linguistics, philosophy, and many other fields.
                
                The field was founded on the assumption that human intelligence "can be so precisely described 
                that a machine can be made to simulate it".This raised philosophical arguments about the mind and 
                the ethical consequences of creating artificial beings endowed with human-like intelligence; these 
                issues have previously been explored by myth, fiction, and philosophy since antiquity.Computer 
                scientists and philosophers have since suggested that AI may become an existential risk to humanity 
                if its rational capacities are not steered towards beneficial goals.The term artificial intelligence 
                has also been criticized for overhyping AI's true technological capabilities.
            """
    summary=summarizer(ARTICLE, max_length=250, min_length=30, do_sample=False)[0]
    display_msg = {
        'summary': summary,
        'summerizer_long': 'Sucessful'
    }
    return JsonResponse(display_msg)

