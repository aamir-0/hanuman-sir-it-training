from django.urls import path

from .views import send_enquiry


urlpatterns = [
    path("enquiries/", send_enquiry, name="send-enquiry"),
]
