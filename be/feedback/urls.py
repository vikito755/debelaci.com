from django.urls import path
from . import views  # Import your views
from feedback.views import FeedbackViewSet

feedback_list = FeedbackViewSet.as_view({'get': 'list', 'post': 'create'})
feedback_detail = FeedbackViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'})


urlpatterns = [
    path('', views.FeedbackViewSet.as_view({'post': 'create'}), name='create'),
]
