from django.urls import path

from SevenGradeTasks.views import SevenGradeGETID, SevenGradeDirectoryGETID, SevenGradeTasksViewSet, SevenGradeDirectoryViewSet

urlpatterns = [
    path('tasks/7thGrade/', SevenGradeTasksViewSet.as_view({'get': 'list'}), name='tasks7_list'),
    path('tasks/7thGrade/<int:id>', SevenGradeGETID.as_view(), name='tasks7_id'),
    path('directory/7thGrade/', SevenGradeDirectoryViewSet.as_view({'get': 'list'}), name='directory7_list'),
    path('directory/7thGrade/<int:id>', SevenGradeDirectoryGETID.as_view(), name='directory_id'),

]