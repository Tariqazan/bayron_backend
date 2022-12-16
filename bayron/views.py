from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.template import loader
from django.conf import settings

# Create your views here.


def index(request):
    return render(request, 'index.html')


def email_form(request):
    name = request.POST.get('name')
    email = request.POST.get('email')
    reconfirm_email = request.POST.get('reconfirm_email')
    content = request.POST.get('content')
    html_message = loader.render_to_string(
        'email.html',
        {
            'name': name,
            'email': email,
            'reconfirm_email': reconfirm_email,
            'content': content
        })
    send_mail(
        subject='Bayron',
        message="Bayron Contact Email",
        from_email='eit9917@gmail.com',
        recipient_list=['Info@baryon.jp'],
        fail_silently=False,
        html_message=html_message
    )
    return redirect('home')

# email_received.connect(email_form, dispatch_uid="something_unique")


def contact(request):
    return render(request, 'contact.html')
