# Generated by Django 5.0.2 on 2024-04-06 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SevenGradeTasks', '0007_alter_sevengradedirectory_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sevengradetasks',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]