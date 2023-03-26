from django.shortcuts import render, redirect
from django.http import HttpResponse

def index(request):
     return render(request, 'main/index.html') #returns the index.html template

def unity(request):
     return render(request, 'main/unity.html')
# Create your views here.
