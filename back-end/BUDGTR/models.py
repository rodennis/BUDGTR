from django.db import models

# Create your models here.

class Month(models.Model):
    month = models.CharField(max_length=256)

    def __str__(self):
        return self.month

class Bill(models.Model):
    name = models.CharField(max_length=256)
    date = models.CharField(max_length=256)
    price = models.CharField(max_length=256)
    months = models.ForeignKey(Month, on_delete=models.CASCADE, related_name='bills', null=True)
    
    def __str__(self):
        return self.name