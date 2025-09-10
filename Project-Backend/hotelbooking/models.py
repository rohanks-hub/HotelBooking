from django.db import models

class Booking(models.Model):
    hotel_name = models.CharField(max_length=255)
    guest_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=50)
    email = models.CharField(max_length=255)
    dates = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

class Hotel(models.Model):
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    roomSize = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    amenities = models.JSONField()
    price = models.IntegerField()

