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