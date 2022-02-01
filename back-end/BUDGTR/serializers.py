from rest_framework import serializers
from .models import Month, Bill

class MonthSerializer(serializers.ModelSerializer):
    bills = serializers.StringRelatedField(many=True, read_only=True)
    class Meta: 
        model = Month
        fields = ['id', 'month', 'budget', 'bills']

class BillSerializer(serializers.ModelSerializer):
    months = MonthSerializer

    class Meta:
        model = Bill
        fields = ['name', 'date', 'price', 'months']
