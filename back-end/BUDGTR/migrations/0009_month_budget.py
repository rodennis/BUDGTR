# Generated by Django 4.0.1 on 2022-02-01 04:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BUDGTR', '0008_alter_bill_months'),
    ]

    operations = [
        migrations.AddField(
            model_name='month',
            name='budget',
            field=models.CharField(default='', max_length=256),
        ),
    ]
