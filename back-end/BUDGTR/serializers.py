from rest_framework import serializers
from .models import Month, Bill

class MonthSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Month
        fields = ['month', 'bills']

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ['name', 'date', 'price']