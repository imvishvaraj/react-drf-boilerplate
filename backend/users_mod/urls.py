# urls.py in your users_mod

from django.urls import path
from .views import UserRegisterView, UserLoginView, UserDetailView


urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('me/', UserDetailView.as_view(), name='user-detail'),
]
