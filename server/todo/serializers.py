from rest_framework import serializers
from .models import User, File, Labs

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name')

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ('id', 'file', 'path', 'name', 'extension')

class LabsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Labs
        fields = ('id', 'name', 'html_file', 'css_file')