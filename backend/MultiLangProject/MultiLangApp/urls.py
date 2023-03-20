from django.urls import path, re_path
from . import views
from . import unittests

urlpatterns = [
    path('', views.home_page, name='MultiLangApp-home'),
    re_path(r'^get_summary/$', views.get_summary, name='get_summary'), 
    re_path(r'^test_connection/$', unittests.test_connection, name='test_connection'),         
    re_path(r'^test_GET_request/$', unittests.test_GET_request, name='test_GET_request'),
    re_path(r'^test_summerizer_short/$', unittests.test_summerizer_short, name='test_summerizer_short'),
    re_path(r'^test_summerizer_medium/$', unittests.test_summerizer_medium, name='test_summerizer_medium'),
    re_path(r'^test_summerizer_long/$', unittests.test_summerizer_long, name='test_summerizer_long'),
]
