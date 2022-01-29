from rest_framework import serializers
from .models import Month, Bill

class MonthSerializer(serializers.ModelSerializer):
    bills = serializers.StringRelatedField(many=True)
    class Meta: 
        model = Month
        fields = ['month', 'bills']

class BillSerializer(serializers.ModelSerializer):
    months = serializers.HyperlinkedRelatedField(view_name='month-detail',read_only=True)

    class Meta:
        model = Bill
        fields = ['name', 'date', 'price', 'months']