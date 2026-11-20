from django.shortcuts import render


def inicio(request):
    return render(request, "portafolio/inicio.html", {"page_title": "Inicio", "current_page": "inicio"})


def sobre_mi(request):
    return render(request, "portafolio/sobre_mi.html", {"page_title": "Sobre mí", "current_page": "sobre_mi"})


def habilidades(request):
    return render(request, "portafolio/habilidades.html", {"page_title": "Habilidades", "current_page": "habilidades"})


def proyectos(request):
    return render(request, "portafolio/proyectos.html", {"page_title": "Proyectos", "current_page": "proyectos"})


def contacto(request):
    return render(request, "portafolio/contacto.html", {"page_title": "Contacto", "current_page": "contacto"})


def pagina_no_encontrada(request, exception=None):
    return render(
        request,
        "portafolio/404.html",
        {"page_title": "Página no encontrada", "current_page": ""},
        status=404,
    )
