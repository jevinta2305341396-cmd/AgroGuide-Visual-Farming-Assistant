from rest_framework import serializers
from .models import User, Crop

class CropSerializer(serializers.ModelSerializer):
    farmer_name = serializers.ReadOnlyField(source='farmer.username')

    class Meta:
        model = Crop
        fields = ['id', 'farmer_name', 'name', 'category', 'price', 'stock_kg', 'image_url', 'created_at']