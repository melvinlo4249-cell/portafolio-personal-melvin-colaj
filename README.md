# Portafolio personal — Melvin Colaj

Proyecto académico para **Introducción a la Programación Web**. Sitio personal hecho con Django, HTML, CSS y JavaScript. No usa modelos, base de datos, autenticación ni frameworks CSS.

## Requisitos

- Python 3.10 o superior
- pip

## Ejecutar localmente

1. Crea y activa un entorno virtual:

   ```bash
   python -m venv .venv
   # Windows PowerShell: .venv\Scripts\Activate.ps1
   # macOS/Linux: source .venv/bin/activate
   ```

2. Instala Django:

   ```bash
   pip install -r requirements.txt
   ```

3. Inicia el servidor:

   ```bash
   python manage.py runserver
   ```

4. Abre http://127.0.0.1:8000/.

## Rutas

- `/` Inicio
- `/sobre-mi/` Sobre mí
- `/habilidades/` Habilidades
- `/proyectos/` Proyectos
- `/contacto/` Contacto
- Las rutas no encontradas muestran una página 404 personalizada.

## Interactividad

- Menú desplegable en móvil.
- Validación de nombre, correo y mensaje con confirmación local; el formulario no envía datos.
- Filtro de tarjetas de proyectos por tecnología.

Las tres tarjetas de proyectos son propuestas marcadas “En desarrollo”. Las ilustraciones son conceptuales y no representan capturas de aplicaciones terminadas.
