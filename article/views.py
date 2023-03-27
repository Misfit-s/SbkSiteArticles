from django.shortcuts import render, redirect
from django.http import HttpResponse

def devs(request):
     return render(request, 'main/devs.html') #returns the index.html template

def unity(request):
     return render(request, 'main/unity.html')

def arduino(request):
     return render(request, 'main/arduino.html')

def cSharp(request):
     return render(request, 'main/cSharp.html')

def htmlCssJs(request):
     return render(request, 'main/htmlCssJs.html')

def mySql(request):
     return render(request, 'main/mySql.html')

def php(request):
     return render(request, 'main/php.html')

