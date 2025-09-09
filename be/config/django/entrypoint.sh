#!/bin/bash

# Check the first command-line argument
case "$1" in
   web)
        python manage.py migrate --noinput
    
        if [ "$DEBUG_VALUE" == "True" ]; then
            echo "Starting Django development server with hot reload..."
            exec python manage.py runserver 0.0.0.0:8000
        else
            echo "Starting Gunicorn for production..."
            exec gunicorn --bind :8000 --workers 1 app.wsgi
        fi
        ;;
  celery)
    # The -B -s path option should be used only for development, start the scheduler and worker separately for production.
    # Start the Celery worker (development mode with beat scheduler)
    exec celery -A core.celery_app worker --loglevel=info -B -s /tmp/celerybeat-schedule -c 1 --pool threads
    ;;
   *)
     echo "Incorrect usage! Please specify 'web' or 'celery' as an argument."
     exit 1
     ;;
esac
