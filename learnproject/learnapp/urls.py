from django.urls import path
from.import views

urlpatterns = [
    path('home',views.home, name='home'),
    path('table',views.table, name='table'),
    path('delete/<int:id>',views.delete, name='delete'),
    path('main',views.main, name='main'),
    path('login',views.login, name='login')

]