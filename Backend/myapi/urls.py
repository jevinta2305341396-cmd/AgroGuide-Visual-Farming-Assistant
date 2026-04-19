raise Exception("CHECK API URL FILE")

from django.urls import path
from . import views
from .views import ExpertQuestionListCreateView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('products/', views.get_products),
    path('crops/<str:season>/', views.get_crops_by_season),
    path('ask-expert/', ExpertQuestionListCreateView.as_view(), name='ask_expert'),
    path('login/', obtain_auth_token, name='api_login'),
]
from django.urls import path
from . import views

urlpatterns = [
    path('ask-expert/', views.ask_expert_api, name='ask_expert_api'),
]