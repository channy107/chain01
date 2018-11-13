from django.urls import path, include
from app.views import *

app_name = "app"

urlpatterns = [
    path('', VoteView.as_view(), name="index"),
]
