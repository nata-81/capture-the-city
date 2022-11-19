from rest_framework.serializers import ModelSerializer
from .models import Link, Upload, User

class UploadSerializer(ModelSerializer):
    class Meta:
        model = Upload
        fields = '__all__'

class LinkSerializer(ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'