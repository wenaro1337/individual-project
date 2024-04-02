from rest_framework.serializers import ModelSerializer
from .models import SevenGradeTasks

class SevenGradeTasksSerializer(ModelSerializer):
    class Meta:
        model = SevenGradeTasks
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if representation['onlypicrute'] == '':
            representation['onlypicrute'] = None
        return representation