from django.db import models
from django.contrib.auth.models import User

# ১. বাজারের পণ্যের জন্য
class MarketProduct(models.Model):
    name = models.CharField(max_length=100)
    price_range = models.CharField(max_length=100)
    category = models.CharField(max_length=50) # সবজি, ফল, ইত্যাদি
    image = models.ImageField(upload_to='market/', null=True, blank=True)

# ২. কৃষকের ফসল লিস্টিং (Marketplace)
class CropListing(models.Model):
    farmer = models.ForeignKey(User, on_delete=models.CASCADE)
    crop_name = models.CharField(max_length=100)
    quantity = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='listings/')