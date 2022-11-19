from rest_framework.serializers import ModelSerializer
from .models import Link, Upload, User

class UploadSerializer(ModelSerializer):
    class meta:
        model = Upload
        fields = '__all__'

class LinkSerializer(ModelSerializer):
    class meta:
        model = Link
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class meta:
        model = User
        fields = '__all__'