# project/urls.py (your main urls.py)
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('NewAppointments.urls')),   # 👈 include app urls
]
