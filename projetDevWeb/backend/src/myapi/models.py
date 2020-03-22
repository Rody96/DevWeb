from django.db import models

class Arbres_Remarquables(models.Model):
    nom_français = models.CharField(max_length=60, null=True)
    nom_scientifique = models.CharField(max_length=60, null=True)
    famille = models.CharField(max_length=60, null=True)
    parcours = models.CharField(max_length=60)
    num_parcours = models.IntegerField()

    def __str__(self):
        return self.nom_français