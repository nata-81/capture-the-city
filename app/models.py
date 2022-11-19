from django.db import models

# Create your models here.

# admin.site.register(Table Name)
class User(models.Model):
    # note: charfield has max length 255 chars
    # TextField allows for longer entries
    # null/blank: we can't submit a form with no values
    handle = models.CharField(max_length=28)
    password = models.CharField(max_length=255)
    email = models.CharField(null=True, blank=True, max_length=255)

    def __str__(self) -> str:
        return self.handle

class Upload(models.Model):
    title = models.CharField(max_length=64)
    content = models.TextField()
    # auto_now can change
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title

class Link(models.Model):
    url = models.TextField()

    def __str__(self) -> str:
        return self.url