from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    USER_ROLES = (
        ('farmer', 'Farmer'),
        ('entrepreneur', 'Entrepreneur'),
        ('buyer', 'Buyer'),
    )
    role = models.CharField(max_length=20, choices=USER_ROLES, default='buyer')
    phone = models.CharField(max_length=15, unique=True, null=True, blank=True)
    address = models.TextField(null=True, blank=True)

class Crop(models.Model):
    farmer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='crops')
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, default='Vegetable')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock_kg = models.FloatField()
    image_url = models.URLField(max_length=500, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.farmer.username}"