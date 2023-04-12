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
    re_path(r'^test_summerizer_empty/$', unittests.test_summerizer_empty, name='test_summerizer_empty'),
    re_path(r'^test_summerizer_random/$', unittests.test_summerizer_random, name='test_summerizer_random'),
    re_path(r'^test_get_summary/$', unittests.test_get_summary, name='test_get_summary'),
    re_path(r'^translate/$', views.translate, name='translate'),
    re_path(r'^test_translate/$', unittests.test_translate, name='test_translate'),
    re_path(r'^test_translate2/$', unittests.test_translate2, name='test_translate2'),
    
]
