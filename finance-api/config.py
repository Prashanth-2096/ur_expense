import os
from dotenv import load_dotenv
from pymongo import MongoClient

class Config:
    """Base configuration."""
    SECRET_KEY :str = os.getenv("SECRET_KEY")
    MONGO_URI : str = os.getenv("MONGO_URI")
