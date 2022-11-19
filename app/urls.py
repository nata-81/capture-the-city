from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('uploads/', views.getUploads, name='uploads'),
    path('upload/<str:id>/', views.getUpload, name='upload'),
]