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
    from django.db import models

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
    # নতুন ফিল্ড
    suitable_districts = models.CharField(max_length=255, default="সারা বাংলাদেশ") 
    soil_type = models.CharField(max_length=200, default="দোআঁশ ও বেলে দোআঁশ")

    def __str__(self):
        return self.name
    from django.db import models
from django.contrib.auth.models import User

class ExpertQuestion(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Answered', 'Answered'),
    ]

    farmer = models.ForeignKey(User, on_delete=models.CASCADE)
    crop_name = models.CharField(max_length=100)
    question = models.TextField()
    image = models.ImageField(upload_to='expert_queries/', blank=True, null=True)
    expert_reply = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.crop_name} - {self.status}"