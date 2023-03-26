from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),  #the path for our index view
    path('unity', views.unity),
    path('index', views.index),
]