from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Upload, Link, User
from .serializer import UploadSerializer, LinkSerializer, UserSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/helloworld/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getUploads(request):
    uploads = Upload.objects.all()
    serializer = UploadSerializer(uploads, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUpload(request, id):
    upload = Upload.objects.get(id=id)
    serializer = UploadSerializer(upload, many=False)
    return Response(serializer.data)
