from django.shortcuts import render

# Create your views here.
import json
from django.contrib.auth.models import User #####
from django.http import JsonResponse , HttpResponse ####
import deepl


from transformers import pipeline, set_seed


def home_page(request):
    return HttpResponse('<h1>MultiLangApp Home</h1>')

def get_summary(request):
    article = request.GET.get('article', None)

    print('article:', article)
    
    summarizer = pipeline("summarization")
    summary = summarizer(article, max_length=130, min_length=30, do_sample=False)[0]
    data = {
        'summary': summary['summary_text'],
        'raw': 'Successful',
    }

    print('json-data to be sent: ', data)

    return JsonResponse(data)

def translate(request):
    article = request.GET.get('article', None)

    print('article:', article)
    
    auth_key = "da19e392-2688-f41f-38d5-5389e9ad7b56:fx"  # Replace with your key
    translator = deepl.Translator(auth_key)

    result = translator.translate_text(article, target_lang="FR")
    print(result.text)  # "Bonjour, le monde !"
    res = {
        'translation': result.text,
        'raw': 'Successful',
    }
    print('json-data to be sent: ', res)

    return JsonResponse(res)