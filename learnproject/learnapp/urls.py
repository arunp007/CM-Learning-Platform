from django.urls import path
from.import views

urlpatterns = [
    path('home',views.home, name='home'),
    path('learning_home', views.learning_home, name='learning_home'),
    path('python_home',views.python_home, name='python_home'),
    path('angular_home', views.angular_home, name='angular_home'),
    path('c_home', views.c_home, name='c_home'),
    path('cpp_home', views.cpp_home, name='cpp_home'),
    path('login',views.login, name='login')

]