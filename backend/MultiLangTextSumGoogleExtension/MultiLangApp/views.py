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

    data = {
        'raw': 'Failed',
    }
    
    if len(article) > 0 :
        summarizer = pipeline("summarization")
        max_length = len(article.split()) // 3
        sentences = summarizer(article, max_length=max_length, min_length=10, do_sample=False)[0] 
        data = {
            'summary': sentences['summary_text'],
            'raw': 'Successful',
        }


        print('json-data to be sent: ', data)

    return JsonResponse(data)