from django.contrib import admin
from django.urls import path
from Core import views


urlpatterns = [
    path('products/',views.ProductAPIView.as_view(), name='product_page'),
    path('products/<int:pk>/', views.ProductDetailAPIView.as_view(), name='product_detail'),
    path('cart/<int:id>/',views.CartAPIView.as_view(), name='cart_page'),

]
