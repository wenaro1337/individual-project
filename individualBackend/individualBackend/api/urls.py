from django.urls import path

from SevenGradeTasks.views import SevenGradeGETID, SevenGradeTasksViewSet

urlpatterns = [
    path('7thGrade/', SevenGradeTasksViewSet.as_view({'get': 'list'}), name='tasks7_list'),
    path('7thGrade/<int:id>', SevenGradeGETID.as_view(), name='tasks7_id'),
]