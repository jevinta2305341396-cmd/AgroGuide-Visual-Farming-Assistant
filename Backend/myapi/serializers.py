from rest_framework import serializers
from .models import Product, CropDetails

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CropDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropDetails
        fields = '__all__'
from rest_framework import serializers
from .models import CropDetails

class CropDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropDetails
        fields = '__all__'
from rest_framework import serializers
from .models import ExpertQuestion

class ExpertQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpertQuestion
        fields = '__all__'
        read_only_fields = ['farmer', 'expert_reply', 'status', 'created_at']