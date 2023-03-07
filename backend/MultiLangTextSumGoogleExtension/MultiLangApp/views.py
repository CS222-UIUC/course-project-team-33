from django.shortcuts import render

# Create your views here.
import json
from django.contrib.auth.models import User #####
from django.http import JsonResponse , HttpResponse ####


def home(request):
    return HttpResponse('<h1>Blog Home</h1>')