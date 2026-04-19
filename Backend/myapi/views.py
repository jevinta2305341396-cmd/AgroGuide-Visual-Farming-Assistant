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
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .models import ExpertQuestion
from .serializers import ExpertQuestionSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly]) 
def ask_expert_api(request):
    if request.method == 'GET':
        questions = ExpertQuestion.objects.all().order_by('-created_at')
        serializer = ExpertQuestionSerializer(questions, many=True)
        return Response(serializer.data)
        
    elif request.method == 'POST':
        serializer = ExpertQuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)