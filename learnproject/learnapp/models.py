from django.db import models

class Signup(models.Model):
    email = models.EmailField(max_length=50)
    password = models.TextField(max_length=50)
    name = models.TextField(max_length=50)
    age = models.IntegerField()
    phone = models.TextField(max_length=50)

    class Meta:
        db_table = 'signup'
