from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_products),
    path('crops/<str:season>/', views.get_crops_by_season),
]