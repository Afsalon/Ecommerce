from django.contrib import admin
from Profile.models import User
from django.contrib.auth.admin import UserAdmin
from Profile.forms import UserForm,CustomUserChangeForm
# Register your models here.



class CustomUserAdmin(UserAdmin):
    ordering = ('email',)
    list_display = ('email','first_name','last_name','phone','is_superuser')
    add_form = UserForm
    model = User
    form =CustomUserChangeForm
    add_fieldsets=(
    ('Personal Detail', {'fields':('email','first_name','password','last_name','phone','address')}),
    ('Permissions', {'fields':('is_staff','is_active')})
    )
    fieldsets=(
    ('Personal Detail', {'fields':('email','first_name','last_name','password','phone','address')}),
    ('Permissions', {'fields':('is_staff','is_active')})
    )

admin.site.register(User, CustomUserAdmin)
