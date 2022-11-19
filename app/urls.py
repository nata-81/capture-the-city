from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    # Uploads
    path('uploads/', views.getUploads, name='uploads'),
    path('upload/<str:id>/', views.getUpload, name='upload'),
    path('upload/<str:latitude>/<str:longitude>', views.getUpload, name='upload'),
    path('upload/create/', views.createUpload, name="upload-create"),
    path('upload/<str:id>/delete/', views.deleteUpload, name="upload-delete"),
    # Users
    path('users/', views.getUsers, name='users'),
    path('user/<str:id>/', views.getUser, name='user'),
    path('user/create/', views.createUser, name="user-create"),
    path('user/<str:id>/update/', views.updateUser, name="user-update"),
    path('user/<str:id>/delete/', views.deleteUser, name="user-delete"),
    # Links
    path('links/', views.getLinks, name='links'),
    path('link/<str:id>/', views.getLink, name='link'),
    path('link/create/', views.createLink, name="link-create"),
    path('link/<str:id>/update/', views.updateLink, name="link-update"),
    path('link/<str:id>/delete/', views.deleteLink, name="link-delete"),
]