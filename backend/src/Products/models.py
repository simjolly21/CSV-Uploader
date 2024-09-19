from django.db import models

# Create your models here.

class Product(models.Model):
    name    = models.TextField(max_length=30)
    oneclass    = models.TextField(max_length=30)
    school    = models.TextField(max_length=30)
    state    = models.TextField(max_length=30)
    
