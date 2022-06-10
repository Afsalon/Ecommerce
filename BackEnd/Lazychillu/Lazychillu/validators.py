import re

from django.core.exceptions import ValidationError
from django.utils.translation import ugettext as u


def number_validator(password):
    if not re.findall('\d', password):
        raise ValidationError(u("The password must contain at least 1 digit, 0-9."))




def uppercase_validator(password):
    if not re.findall('[A-Z]', password):
        raise ValidationError(u("The password must contain at least 1 uppercase letter, A-Z."))



def lowercase_validator(password):
    if not re.findall('[a-z]', password):
        raise ValidationError(u("The password must contain at least 1 lowercase letter, a-z."))


def symbol_validator(password):
     if not re.findall('[()[\]{}|\\`~!@#$%^&*_\-+=;:\'",<>./?]', password):
            raise ValidationError(u("The password must contain at least 1 symbol: " +"()[]{}|\`~!@#$%^&*_-+=;:'\",<>./?"))
