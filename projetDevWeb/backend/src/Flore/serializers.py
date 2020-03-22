from rest_framework import serializers
from Flore.models import Arbre, Fleur

class ArbreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arbre
        fields = '__all__'

class FleurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fleur
        fields = '__all__'