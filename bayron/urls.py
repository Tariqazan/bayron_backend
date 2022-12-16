from django.urls import path
from .views import *


urlpatterns = [
    path('',index,name="home"),
    path("contact/", contact, name="contact"),
    path('form/', email_form, name='email_form'),
]