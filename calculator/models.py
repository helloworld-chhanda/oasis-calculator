from django.db import models

class Cyber(models.Model):
    name = models.CharField(max_length=100)
