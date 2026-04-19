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


# Expert প্রশ্ন API
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from .models import ExpertQuestion
from .serializers import ExpertQuestionSerializer

class ExpertQuestionListCreateView(generics.ListCreateAPIView):
    serializer_class = ExpertQuestionSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        return ExpertQuestion.objects.filter(
            farmer=self.request.user
        ).order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(farmer=self.request.user)
