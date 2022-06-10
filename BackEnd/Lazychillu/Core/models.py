from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

User = get_user_model()

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    photo = models.FileField(upload_to='furniture')
    isAvailable = models.BooleanField(default=True)
    brand = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    category = models.CharField(max_length=100)
    amount = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.name
