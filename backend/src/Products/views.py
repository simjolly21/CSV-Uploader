from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import csv, io
# Create your views here.

from .forms import ProductForm
from .models import Product

@api_view(['POST'])
def ProductCreateView(request):
    if request.method == 'POST':
        data_file = request.FILES["data-file"]
        data_set = data_file.read().decode('UTF-8')
        io_string = io.StringIO(data_set)
        next(io_string)
        for column in csv.reader(io_string, delimiter=',', quotechar="|"):
            print(column)
            Product.objects.create(
            name=column[0],
            oneclass=column[1],
            school=column[2],
            state=column[3],
            )
        return Response({"message": "Got some data!", "data": request.data})
    return Response({"message": "Hello, world!"})



