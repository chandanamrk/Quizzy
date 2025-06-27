from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html')


def geography(request):
    return render(request, 'geography.html')


def general(request):
    return render(request, 'general.html')


def books(request):
    return render(request, 'books.html')


def indian(request):
    return render(request, 'indian.html')


def cyber(request):
    return render(request, 'cyber.html')
