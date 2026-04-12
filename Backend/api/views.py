from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, CropDetails
from .serializers import ProductSerializer, CropDetailsSerializer

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_crops_by_season(request, season):
    crops = CropDetails.objects.filter(season=season)
    serializer = CropDetailsSerializer(crops, many=True)
    return Response(serializer.data)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CropDetails
from .serializers import CropDetailsSerializer

@api_view(['GET'])
def get_crops_by_season(request, season_code):
    # ফ্রন্টএন্ড থেকে যেই সিজনের নাম আসবে, ডাটাবেজ থেকে শুধু সেই সিজনের ডাটা ফিল্টার করে পাঠাবে
    crops = CropDetails.objects.filter(season=season_code)
    serializer = CropDetailsSerializer(crops, many=True)
    return Response(serializer.data)