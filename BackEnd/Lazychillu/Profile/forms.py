from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserChangeForm
from django.core import validators
from Lazychillu.validators import number_validator,uppercase_validator,lowercase_validator,symbol_validator

User = get_user_model()

class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput(),validators=[number_validator,uppercase_validator,lowercase_validator,symbol_validator])
    class Meta:
        model= User
        fields=('email','first_name','last_name','password','phone','address','is_superuser')
    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super(UserForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password"])
        if commit:
            user.save()
        return user


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model= User
        fields=('email','first_name','last_name', 'password','phone','address','is_superuser')
