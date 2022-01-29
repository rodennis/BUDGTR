from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from BUDGTR.views import MonthViewSet, BillViewSet

router = routers.DefaultRouter()
router.register('month', MonthViewSet)
router.register('bill', BillViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
