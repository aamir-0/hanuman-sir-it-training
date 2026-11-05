import json
import smtplib

from django.conf import settings
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST


REQUIRED_FIELDS = (
    "name",
    "organization",
    "email",
    "phone",
    "requirement",
    "delivery",
    "participants",
    "message",
)


@csrf_exempt
@require_POST
def send_enquiry(request):
    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Request body must contain valid JSON."}, status=400)

    missing_fields = [field for field in REQUIRED_FIELDS if not str(data.get(field, "")).strip()]
    if missing_fields:
        return JsonResponse({"error": f"Missing required fields: {', '.join(missing_fields)}."}, status=400)

    if "@" not in data["email"]:
        return JsonResponse({"error": "Enter a valid email address."}, status=400)

    if not settings.DEFAULT_FROM_EMAIL or not settings.ENQUIRY_RECIPIENT_EMAIL:
        return JsonResponse({"error": "Email delivery is not configured."}, status=503)

    message = "\n".join(
        [
            f"Name: {data['name']}",
            f"Organization: {data['organization']}",
            f"Email: {data['email']}",
            f"Phone: {data['phone']}",
            f"Training requirement: {data['requirement']}",
            f"Delivery mode: {data['delivery']}",
            f"Participants: {data['participants']}",
            "",
            "Message:",
            data["message"],
        ]
    )

    try:
        send_mail(
            subject=f"New training enquiry from {data['name']}",
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.ENQUIRY_RECIPIENT_EMAIL],
            reply_to=[data["email"]],
        )
    except (smtplib.SMTPException, ValueError):
        return JsonResponse({"error": "The enquiry could not be sent. Please try again later."}, status=502)

    return JsonResponse({"message": "Enquiry sent successfully."}, status=201)
