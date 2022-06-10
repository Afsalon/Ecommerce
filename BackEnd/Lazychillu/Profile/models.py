from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractUser
from Profile.managers import CustomManager
# Create your models here.

class User(AbstractUser):
    username = None
    first_name = models.CharField(max_length=50, blank=False, null=False)
    email = models.EmailField(unique=True)
    address = models.CharField(max_length=300)
    phone = PhoneNumberField(null=False, blank=False, unique=True)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=['first_name','address','phone']

    objects=CustomManager()

    def __str__(self):
        return self.email
