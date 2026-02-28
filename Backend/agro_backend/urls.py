from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import CropViewSet # This line will work once moved

router = DefaultRouter()
router.register(r'crops', CropViewSet, basename='crop')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]