from django.contrib import admin
from Core.models import Cart,Product
# Register your models here.
class ProductModelAdmin(admin.ModelAdmin):
    model = Product
    list_display = ('name', 'price', 'isAvailable', 'brand', 'category')


admin.site.register(Cart)
admin.site.register(Product,ProductModelAdmin)
