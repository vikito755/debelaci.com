import os
import environ

env = environ.Env()
proj_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
environ.Env.read_env(os.path.join(proj_dir, ".env"))

class EnvDetails:
    DEBUG = os.getenv("DEBUG_VALUE", 'False').lower() in ('true', '1', 't')
    DJANGO_ALLOWED_HOSTS = [host.strip() for host in env.str("DJANGO_ALLOWED_HOSTS", "127.0.0.1").split(",")]
    DB_NAME = env.str("DB_NAME", None)
    DB_USER = env.str("DB_USER", None)
    DB_PASSWORD = env.str("DB_PASSWORD", None)
    DB_HOST = env.str("DB_HOST", None)
    DB_PORT = env.str("DB_PORT", None)
    SECRET_KEY=env.str("SECRET_KEY", None)
    FRONTEND_URL=env.str("FRONTEND_URL", None)
    # # Auth
    # GOOGLE_OAUTH_CLIENT_SECRET=env.str("GOOGLE_OAUTH_CLIENT_SECRET", None)
    # GOOGLE_OAUTH_CLIENT_ID=env.str("GOOGLE_OAUTH_CLIENT_ID", None)
    # # Email
    EMAIL_HOST=env.str("EMAIL_HOST", None)
    EMAIL_USE_TLS=env.bool("EMAIL_USE_TLS", None)
    EMAIL_PORT=env.str("EMAIL_PORT", None)
    EMAIL_HOST_USER=env.str("EMAIL_HOST_USER", None)
    EMAIL_HOST_PASSWORD=env.str("EMAIL_HOST_PASSWORD", None)
    # COMPANY_NAME=env.str("COMPANY_NAME", None)
    # RABITMQ_CONNECTION_STRING=env.str("RABITMQ_CONNECTION_STRING", None)