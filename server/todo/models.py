from django.db import models
from datetime import datetime


class TimeBasedModels(models.Model):
    class Meta:
        abstract = True

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class User(TimeBasedModels):
    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, verbose_name="Имя пользователя")

    def __str__(self):
        return f"№{self.id} - {self.name}"


class File(TimeBasedModels):
    class Meta:
        verbose_name = 'Файл'
        verbose_name_plural = 'Файлы'

    id = models.AutoField(primary_key=True)
    name = models.CharField(
        max_length=255, verbose_name="Имя файла", blank=False, null=False)
    extension = models.CharField(
        max_length=50, verbose_name="Расширение файла")
    size = models.IntegerField(verbose_name="Размер файла", default=0)
    created_at = models.DateTimeField(
        verbose_name="Дата создания", default=datetime.now(), editable=False)
    file = models.FileField(verbose_name='Файл', default=None)
    path = models.CharField(
        max_length=4092, verbose_name='Путь файла', default='/media/')

    def __str__(self):
        return f"№{self.id} - {self.name}"


class Labs(TimeBasedModels):
    class Meta:
        verbose_name = 'Лаболаторная работа'
        verbose_name_plural = 'Лаболаторные работы'

    id = models.AutoField(primary_key=True)
    name = models.CharField(
        max_length=255, verbose_name="Имя файла", blank=False, null=False)
    html_file = models.ForeignKey(File, verbose_name='HTML файл',
                                  related_name='html',  default=None, on_delete=models.CASCADE)
    css_file = models.ForeignKey(File, verbose_name='CSS файл',
                                 related_name='css', default=None, on_delete=models.CASCADE)

    def __str__(self):
        return f"№{self.id} - {self.name}"
