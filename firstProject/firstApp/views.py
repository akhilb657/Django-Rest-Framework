from django.shortcuts import render
from django.http import JsonResponse
from firstApp.models import Employee

# Create your views here.
def employeeView(request):
  emp = {
    'id': 1,
    'name': 'Ranga',
    'sal': 11111
  }

  data = Employee.objects.all()
  response = {'employees': list(data.values('name','sal'))}

  return JsonResponse(response)
