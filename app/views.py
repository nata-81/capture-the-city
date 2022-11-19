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

# Uploads
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

@api_view(['GET'])
def getUploadByCoordinates(request, lat_s, long_s):
    lat = float(lat_s)
    long = float(long_s)
    error = 0.0001
    #upload = Upload.objects.all()
    print("FROM/TO lte, gte -------------------")
    print(lat + error)
    print(lat - error)
    print("END -------------------")

    upload = Upload.objects.all().filter(latitude__lte = (lat + error), latitude__gte = (lat - error), longitude__lte = (long + error), longitude__gte = (long - error))
    serializer = UploadSerializer(upload, many=True)

    print(serializer.data)

    return Response(serializer.data)

@api_view(['POST'])
def createUpload(request):
    data = request.data
    upload = Upload.objects.create(
        body=data['body']
    )
    upload.save()
    serializer = UploadSerializer(upload, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteUpload(request, id):
    upload = Upload.objects.get(id=id)
    upload.delete()
    return Response('Upload was deleted!')

# Users
@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUser(request, id):
    user = User.objects.get(id=id)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createUser(request):
    data = request.data
    # Hash
    user = User.objects.create(
        body=data['body']
    )
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateUser(request, id):
    data = request.data
    user = User.objects.get(id=id)
    serializer = UserSerializer(instance=user, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteUser(request, id):
    user = User.objects.get(id=id)
    user.delete()
    return Response('User was deleted!')

# Links
@api_view(['GET'])
def getLinks(request):
    users = Link.objects.all()
    serializer = LinkSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLink(request, id):
    link = Link.objects.get(id=id)
    serializer = LinkSerializer(link, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createLink(request):
    data = request.data
    # Hash
    link = Link.objects.create(
        body=data['body']
    )
    serializer = LinkSerializer(link, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateLink(request, id):
    data = request.data
    link = Link.objects.get(id=id)
    serializer = LinkSerializer(instance=link, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteLink(request, id):
    link = Link.objects.get(id=id)
    link.delete()
    return Response('Link was deleted!')