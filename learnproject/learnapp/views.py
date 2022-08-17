from django.shortcuts import render, redirect

def home(request):
    return render(request,'home.html')

def login(request):
    return render(request, 'login.html')

def learning_home(request):
    return render(request, 'learning_home.html')

def python_home(request):
    return render(request, 'python_home.html')

def angular_home(request):
    return render(request, 'angular_home.html')

def c_home(request):
    return render(request, 'c_home.html')

def cpp_home(request):
    return render(request, 'cpp_home.html')

