from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    image_name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CropDetails(models.Model):
    SEASON_CHOICES = [
        ('kharif1', 'খরিপ-১ (গ্রীষ্মকাল)'),
        ('kharif2', 'খরিপ-২ (বর্ষাকাল)'),
        ('robi', 'রবি (শীতকাল)'),
    ]
    name = models.CharField(max_length=100)
    season = models.CharField(max_length=20, choices=SEASON_CHOICES)
    planting_time = models.CharField(max_length=100)
    fertilizer = models.TextField()
    irrigation = models.TextField()
    description = models.TextField()
    image_name = models.CharField(max_length=100)

    def __str__(self):
        return self.name