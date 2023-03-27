from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.devs),  #the path for our index view
    path('unity', views.unity),
    path('devs', views.devs),
    path('arduino', views.arduino),
    path('cSharp', views.cSharp),
    path('htmlCssJs', views.htmlCssJs),
    path('mySql', views.mySql),
    path('php', views.php),
    path('mampSetup', views.mampSetup),
    
]