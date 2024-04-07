from django.db import models

from django_ckeditor_5.fields import CKEditor5Field

class SevenGradeTasks(models.Model):
    id = models.IntegerField(primary_key=True)
    question = models.TextField(default='')
    task = CKEditor5Field(blank=True, config_name='extends')
    onlypicrute = CKEditor5Field(null=True, blank=True, config_name='custom')
    answer = models.TextField(blank=False)
    passed = models.BooleanField(default=False)

    def __str__(self):
        return (str(self.id) + ' ' + self.question[0:50])
    
class SevenGradeDirectory(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.TextField(default='')
    body = CKEditor5Field(blank=True, config_name='extends')

    def __str__(self):
        return (str(self.id) + ' ' + self.title[0:50])