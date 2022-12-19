import json
import os
from django.core import serializers
from rest_framework import viewsets
from django import http

from django.conf import settings
from .serializers import UserSerializer, FileSerializer, LabsSerializer
from .models import Labs, User, File
from django.views.decorators.csrf import csrf_exempt
from transliterate import translit, detect_language
import shutil


def getObject(instance):
    data = serializers.serialize('json', [instance,])
    struct = json.loads(data)
    data = json.dumps(struct[0])
    return data


def saveFile(file):
    instance = File(file=file, name=file.name, size=file.size,
                    extension=file.name.split('.')[-1], path=f'/media/{file.name}')
    instance.save()
    return instance


def moveFile(instance, root_path, dir_path, dir_name):
    name = instance.name
    src = os.path.join(root_path, name)
    shutil.move(src, dir_path)

    url = settings.MEDIA_URL

    instance.path = os.path.join(url, dir_name, name)

    instance.save()


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class FileView(viewsets.ModelViewSet):
    serializer_class = FileSerializer
    queryset = File.objects.all()

    def get(self, request, *args, **kwargs):
        return http.HttpResponse('Success')


class LabsView(viewsets.ModelViewSet):
    serializer_class = LabsSerializer
    queryset = Labs.objects.all()

    def get(self, request, *args, **kwargs):
        return http.HttpResponse('Success')


@csrf_exempt
def upload_file(request):
    if request.method == 'POST':
        file = request.FILES['file']

        instance = saveFile(file)

        return http.HttpResponse(getObject(instance), content_type='application/json')
    return http.HttpResponseNotAllowed(permitted_methods=['POST'])


@csrf_exempt
def upload_files(request):
    if request.method == 'POST':
        files = request.FILES.getlist('file')
        res = []
        for f in files:
            instance = saveFile(f)
            res.append(instance)
        response_value = json.dumps({'ids': list(map(lambda x: x.id, res))})
        return http.HttpResponse(response_value, content_type='application/json')
    return http.HttpResponseNotAllowed(permitted_methods=['POST'])


@csrf_exempt
def create_lab(request):
    if request.method == 'POST':
        params = request.GET

        name = params.getlist('name')[0]
        html = File.objects.get(id=params.getlist('html')[0])
        css = File.objects.get(id=params.getlist('css')[0])
        otherIds = params.getlist('o')
        otherFiles = list(map(lambda fId: File.objects.get(id=fId), otherIds))

        print('IDS', otherIds)
        print('FILES', otherFiles)

        lab_dir_name = name

        try:
            if (detect_language(name)):
                lab_dir_name = translit(name, reversed=True)
        except TypeError:
            pass

        root = settings.MEDIA_ROOT

        dir_path = os.path.join(root, lab_dir_name)

        if not os.path.exists(dir_path):
            os.mkdir(dir_path)
        else:
            return http.HttpResponse('Невозможно создать лабораторную работу.')

        if (css.name and html.name):
            moveFile(html, root, dir_path, lab_dir_name)
            moveFile(css, root, dir_path, lab_dir_name)
            if (len(otherFiles) > 0):
                for f in otherFiles:
                    moveFile(f, root, dir_path, lab_dir_name)

        instance = Labs(name=name, html_file=html, css_file=css)

        instance.save()

        return http.HttpResponse('Success')

    return http.HttpResponseNotAllowed(permitted_methods=['POST'])
