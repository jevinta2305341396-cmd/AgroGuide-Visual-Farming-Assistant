from rest_framework import viewsets
from .models import MarketPrice, FarmerListing
from .serializers import MarketPriceSerializer, FarmerListingSerializer

class MarketPriceViewSet(viewsets.ModelViewSet):
    queryset = MarketPrice.objects.all()
    serializer_class = MarketPriceSerializer

class FarmerListingViewSet(viewsets.ModelViewSet):
    queryset = FarmerListing.objects.all()
    serializer_class = FarmerListingSerializer