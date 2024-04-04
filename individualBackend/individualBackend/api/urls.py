from django.urls import path

from SevenGradeTasks.views import SevenGradeGETID, SevenGradeDirectoryGETID, SevenGradeTasksViewSet, SevenGradeDirectoryViewSet

urlpatterns = [
    path('7thGrade/', SevenGradeTasksViewSet.as_view({'get': 'list'}), name='tasks7_list'),
    path('7thGrade/<int:id>', SevenGradeGETID.as_view(), name='tasks7_id'),
    path('7thGradeDirectory/', SevenGradeDirectoryViewSet.as_view({'get': 'list'}), name='directory7_list'),
    path('7thGradeDirectory/<int:id>', SevenGradeDirectoryGETID.as_view(), name='directory_id'),

]