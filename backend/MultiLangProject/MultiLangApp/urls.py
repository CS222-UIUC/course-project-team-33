from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.home, name='MultiLangApp-home'),
    re_path(r'^get_summary/$', views.get_summary, name='get_summary'),
]