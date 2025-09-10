from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics
from .models import Hotel, Booking
from .serializers import HotelSerializer, BookingSerializer

# ✅ Create a Booking
@api_view(['POST'])
def create_booking(request):
    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Booking saved successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ✅ List and Create Hotels
class HotelListCreateView(generics.ListCreateAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

# ✅ Get All Bookings
@api_view(['GET'])
def get_bookings(request):
    bookings = Booking.objects.all()
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)

# ✅ Delete a Hotel by ID
@api_view(['DELETE'])
def delete_hotel(request, id):
    try:
        hotel = Hotel.objects.get(id=id)
        hotel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Hotel.DoesNotExist:
        return Response({'error': 'Hotel not found'}, status=status.HTTP_404_NOT_FOUND)
