from django.urls import path

def test(request):
    from django.http import HttpResponse
    return HttpResponse("TEST WORKING")

urlpatterns = [
    path('test/', test),
]
