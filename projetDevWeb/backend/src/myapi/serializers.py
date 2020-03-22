from rest_framework import serializers
from .models import Arbres_Remarquables

class ArbresSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Arbres_Remarquables
        fields = ('nom_français', 'nom_scientifique', 'famille', 'parcours', 'num_parcours')