from django.shortcuts import render
from Core.models import Product,Cart
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from Core.serializers import ProductSerializer,CartSerializer
from rest_framework.permissions import IsAuthenticated
User = get_user_model()
# Create your views here.
class ProductAPIView(APIView):
    def get(self, request, format = None):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        serialized_data = serializer.data
        return Response(serialized_data)

class ProductDetailAPIView(APIView):
    def get(self, request, pk, format = None):
        try:
            product_obj = Product.objects.get(pk=pk)
        except:
            return Response({'product':'Not Found'})
        serializer = ProductSerializer(product_obj)
        serialized_data = serializer.data
        return Response(serialized_data)

class CartAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, id, format = None):
        print(request.user)
        try:
            if request.user.id == id:
                user_obj = User.objects.get(pk=id)
            else:
                raise NotFoundError
        except:
            return Response({'user':'Not Found'})
        cart_qs = Cart.objects.filter(user = user_obj)
        serializer = CartSerializer(cart_qs, many=True)
        serialized_data = serializer.data
        return Response(serialized_data)
