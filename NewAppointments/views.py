# appointments/views.py
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def send_appointment_email(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            name = data.get("name")
            email = data.get("email")
            service = data.get("service")
            mobile = data.get("mobile")
            message = data.get("message")

            subject = f"New Appointment Request from {name}"
            body = f"""
            Name: {name}
            Email: {email}
            Service: {service}
            Mobile: {mobile}
            Message: {message}
            """

            send_mail(
                subject,
                body,
                "krishnasmadar777@gmail.com",        # From
                ["jeevanandam.s40@gmail.com",email],  # To
                fail_silently=False,
            )

            return JsonResponse({"success": True, "message": "Email sent successfully!"})
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request"}, status=405)
