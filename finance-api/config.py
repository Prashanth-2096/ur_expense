import os

from pymongo import MongoClient

class Config:
    """Base configuration."""
    SECRET_KEY = 'Lg18fp9BZceyWjrWTA1XceMqbWnrkX7a+T0+d2BGlCQzox1uQ/Ltq5LZ4l+R3yB34wzXxES7I5uvoOnUuaAsGL0uo0sMdFbebGAFNIe8dlgI25R6e+I7/rclKqDksgIj'
    MONGO_URI = 'mongodb://localhost:27017'

