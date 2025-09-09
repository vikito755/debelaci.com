# from django.db import models
from django.db import models

class Feedback(models.Model):
    id = models.IntegerField(auto_created=True, primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    message = models.CharField(max_length=1000, blank=False, default='')
    