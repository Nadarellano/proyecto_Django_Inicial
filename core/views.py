from django.shortcuts import render

# Create your views here.

def home (request):

    return render(request, 'core/home.html')

def otro (request):

    return render(request, 'core/otro.html')

def mas (request):

    return render(request, 'core/mas.html')