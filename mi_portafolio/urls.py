from django.urls import include, path

handler404 = "portafolio.views.pagina_no_encontrada"

urlpatterns = [path("", include("portafolio.urls"))]
