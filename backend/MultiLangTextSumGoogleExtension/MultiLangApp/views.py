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
    
    summarizer = pipeline("summarization")
    summary = summarizer(article, max_length=130, min_length=30, do_sample=False)[0]
    data = {
        'summary': summary['summary_text'],
        'raw': 'Successful',
    }

    print('json-data to be sent: ', data)

    return JsonResponse(data)