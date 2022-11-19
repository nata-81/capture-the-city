from django.contrib import admin
from .models import User, Upload, Link

# Register your models here.
# admin.site.register(Table Name)
admin.site.register(User)
admin.site.register(Upload)
admin.site.register(Link)