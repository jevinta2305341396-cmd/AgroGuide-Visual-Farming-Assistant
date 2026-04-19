from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_products),
    path('crops/<str:season>/', views.get_crops_by_season),
]
from django.urls import path
from .views import ExpertQuestionListCreateView

urlpatterns = [
    path('ask-expert/', ExpertQuestionListCreateView.as_view(), name='ask_expert'),
]