from django.db import models

# Create your models here.


class quiz(models.Model):
    Quiz_name = models.TextField()
    quiz_description = models.TextField()
    No_Of_Questions = models.IntegerField()
    date = models.DateField(auto_now=False, auto_now_add=False)
