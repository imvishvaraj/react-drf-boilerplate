#!/bin/bash

if [ "$DJANGO_DEBUG" = "true" ]
then
    echo "Running Django in debug mode"
    python -Xfrozen_modules=off -m debugpy --listen 0.0.0.0:${BACKEND_DEBUG_PORT:-5678} manage.py runserver 0.0.0.0:${BACKEND_PORT:-8000}
else
    echo "Running Django in production mode"
    gunicorn core.wsgi:application --bind 0.0.0.0:${BACKEND_PORT:-8000}
fi