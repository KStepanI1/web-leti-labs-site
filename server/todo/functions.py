from server.mylabs.settings import MEDIA_ROOT


def handle_uploaded_file(folderName, f):
    with open(f'{MEDIA_ROOT}/' + f.name,'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)