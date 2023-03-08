from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.home, name='MultiLangApp-home'),
    url(r'^get_summary/$', views.get_summary, name='get_summary'),
]