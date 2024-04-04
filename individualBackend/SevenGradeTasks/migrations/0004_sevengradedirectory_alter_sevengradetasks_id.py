# Generated by Django 5.0.2 on 2024-04-04 15:47

import django_ckeditor_5.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SevenGradeTasks', '0003_alter_sevengradetasks_id_alter_sevengradetasks_task'),
    ]

    operations = [
        migrations.CreateModel(
            name='SevenGradeDirectory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(default='')),
                ('subtitle', django_ckeditor_5.fields.CKEditor5Field(blank=True)),
            ],
        ),
        migrations.AlterField(
            model_name='sevengradetasks',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
