from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MarketPriceViewSet, FarmerListingViewSet

router = DefaultRouter()
router.register(r'market', MarketPriceViewSet)
router.register(r'listings', FarmerListingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]