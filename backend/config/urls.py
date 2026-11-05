from django.urls import include, path


urlpatterns = [
    path("api/", include("enquiries.urls")),
]
