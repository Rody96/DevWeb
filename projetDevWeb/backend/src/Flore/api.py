from Flore.models import Arbre, Fleur
from rest_framework import viewsets, permissions
from .serializers import ArbreSerializer, FleurSerializer

class ArbreViewSet(viewsets.ModelViewSet):
    queryset = Arbre.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArbreSerializer

class FleurViewSet(viewsets.ModelViewSet):
    queryset = Fleur.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class =  FleurSerializer