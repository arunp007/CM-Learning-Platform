# Generated by Django 4.0.1 on 2022-05-31 04:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learnapp', '0002_alter_signup_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signup',
            name='name',
            field=models.TextField(max_length=50),
        ),
        migrations.AlterField(
            model_name='signup',
            name='phone',
            field=models.TextField(max_length=50),
        ),
    ]
