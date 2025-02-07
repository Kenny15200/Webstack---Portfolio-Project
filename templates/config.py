import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'mysecret')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://user:password@localhost/real_estate')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
