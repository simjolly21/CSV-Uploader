from django import forms
import csv, io
from .models import Product

class ProductForm(forms.Form):
    data_file = forms.FileField()
    
    def process_data(self):
        f = io.TextIOWrapper(self.cleaned_data['data_file'].file)
        reader = csv.DictReader(f)
        print(reader)
        for product in reader:
            Product.objects.create(
                name=product['name'],
                oneclass=product['oneclass'],
                school=product['school'],
                price=product['price']
                )