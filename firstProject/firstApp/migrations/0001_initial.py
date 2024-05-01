# Generated by Django 5.0.4 on 2024-05-01 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('sal', models.DecimalField(decimal_places=3, max_digits=11)),
            ],
        ),
    ]