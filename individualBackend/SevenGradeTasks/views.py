from django.shortcuts import render
from rest_framework import viewsets
from .models import  SevenGradeTasks, SevenGradeDirectory
from .serializers import SevenGradeTasksSerializer, SevenGradeDirectorySerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class SevenGradeTasksViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset =  SevenGradeTasks.objects.all()
        serializer_class = SevenGradeTasksSerializer(queryset, many=True)
        return Response(serializer_class.data)
    

class SevenGradeGETID(APIView):
    queryset = SevenGradeTasks.objects.all()
    serializer_class = SevenGradeTasksSerializer
    lookup_field = "id"

    def get(self, request, id):
        try:
            task = self.queryset.get(id=id)
            serializer = self.serializer_class(task)
            return Response(serializer.data)
        except SevenGradeTasks.DoesNotExist:
            return Response({"error": "Задача с указанным id не найдена."}, status=status.HTTP_404_NOT_FOUND)
    def put(self, request, id):
        try:
            task = self.queryset.get(id=id)
            serializer = self.serializer_class(task, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except SevenGradeTasks.DoesNotExist:
            return Response({"detail": "Задача с указанным id не найдена."}, status=status.HTTP_404_NOT_FOUND)
        
class SevenGradeDirectoryViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset =  SevenGradeDirectory.objects.all()
        serializer_class = SevenGradeDirectorySerializer(queryset, many=True)
        return Response(serializer_class.data)
    
class SevenGradeDirectoryGETID(APIView):
    queryset = SevenGradeDirectory.objects.all()
    serializer_class = SevenGradeDirectorySerializer
    lookup_field = "id"

    def get(self, request, id):
        try:
            task = self.queryset.get(id=id)
            serializer = self.serializer_class(task)
            return Response(serializer.data)
        except SevenGradeTasks.DoesNotExist:
            return Response({"error": "Задача с указанным id не найдена."}, status=status.HTTP_404_NOT_FOUND)

