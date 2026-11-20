from django.urls import path, re_path
from . import views

app_name = "portafolio"

urlpatterns = [
    path("", views.inicio, name="inicio"),
    path("sobre-mi/", views.sobre_mi, name="sobre_mi"),
    path("habilidades/", views.habilidades, name="habilidades"),
    path("proyectos/", views.proyectos, name="proyectos"),
    path("contacto/", views.contacto, name="contacto"),
    re_path(r"^.*$", views.pagina_no_encontrada, name="pagina_no_encontrada"),
]
