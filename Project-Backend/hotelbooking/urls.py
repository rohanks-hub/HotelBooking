from django.urls import path
from .views import (
    HotelListCreateView,
    create_booking,
    get_bookings,
    delete_hotel
)

urlpatterns = [
    path('hotels/', HotelListCreateView.as_view(), name='hotel-list-create'),  # GET, POST
    path('hotels/<int:id>/', delete_hotel, name='delete-hotel'),               # DELETE
    path('bookings/', create_booking, name='create-booking'),                  # POST
    path('bookings/all/', get_bookings, name='get-bookings'),                  # GET (admin dashboard)
]
