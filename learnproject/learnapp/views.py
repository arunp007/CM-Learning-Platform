from django.shortcuts import render, redirect
from.models import *

def home(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        name = request.POST['name']
        age = request.POST['age']
        phone = request.POST['phone']
        userdetails = Signup(email=email,password=password,name=name,age=age,phone=phone)
        userdetails.save()
    return render(request,'home.html')

def table(request):
    userinfo = Signup.objects.all()
    return render(request,'table.html',{'user': userinfo})

def delete(request,id):
    Signup.objects.get(id=id).delete()
    return redirect('table')

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        try:
            current_user = Signup.objects.get(email=email,password=password)
            request.session['xyz'] = current_user.id
            return redirect('main')

        except Signup.DoesNotExist:
            return render(request, 'login.html',{'message': "Username And Password Is Wrong"})
    
    return render(request, 'login.html')

def main(request):
    return render(request, 'main.html')
