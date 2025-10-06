# appointments/urls.py
from django.urls import path
from .views import send_appointment_email

urlpatterns = [
    path("send-email/", send_appointment_email, name="send-email"),
]
