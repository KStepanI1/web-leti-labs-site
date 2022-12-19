from django.contrib import admin

from .models import User, File, Labs


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at")


@admin.register(File)
class FileAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at")


@admin.register(Labs)
class LabsAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at")
