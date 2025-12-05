# Shirikisha
A lightweight digital civic engagement platform that connects citizens to their elected leaders.


shirikisha/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py              # FastAPI application entry point
│   │   ├── config.py           # Configuration management
│   │   ├── database.py         # Database connection & models
│   │   ├── models.py           # SQLAlchemy ORM models
│   │   ├── schemas.py          # Pydantic schemas for validation
│   │   ├── crud.py             # CRUD operations
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── endpoints/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── leaders.py
│   │   │   │   ├── feedback.py
│   │   │   │   ├── resources.py
│   │   │   │   └── analytics.py
│   │   │   └── deps.py         # Dependencies (auth, DB sessions)
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   ├── security.py     # Security utilities
│   │   │   ├── cache.py        # Redis caching layer
│   │   │   └── celery_app.py   # Async task queue
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   ├── leader_service.py
│   │   │   ├── feedback_service.py
│   │   │   └── analytics_service.py
│   │   └── utils/
│   │       ├── __init__.py
│   │       ├── validators.py
│   │       └── helpers.py
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── test_api.py
│   │   └── conftest.py
│   ├── migrations/             # Alembic migrations
│   ├── requirements.txt
│   ├── .env.example
│   ├── docker-compose.yml
│   └── Dockerfile
├── frontend/                  # Separate frontend project
└── README.md