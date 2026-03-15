from rest_framework import serializers
from .models import MarketPrice, FarmerListing

class MarketPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarketPrice
        fields = '__all__'

class FarmerListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerListing
        fields = '__all__'