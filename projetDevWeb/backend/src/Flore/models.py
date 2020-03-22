from django.db import models

# Create your models here.



class Arbre(models.Model):
    nom_arbre = models.CharField(max_length=30)

    def __str__(self):
        return self.nom_arbre

class Fleur(models.Model):
    nom_fleur = models.CharField(max_length=30)

    def __str__(self):
        return self.nom_fleur