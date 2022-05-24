from django.urls import path
from .views import home
from .views import otro
from .views import mas


urlpatterns = [
    path('home', home,name="home"),
    path('otro', otro,name="otro"),
    path('mas', mas,name="mas"),

]

