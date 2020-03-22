#from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ArbresSerializer
from .models import Arbres_Remarquables

# Create your views here.
class ArbresViewSet(viewsets.ModelViewSet):
    queryset = Arbres_Remarquables.objects.all().order_by('nom_français')
    serializer_class = ArbresSerializer