from pymongo import MongoClient
from config import Config

# Initialize MongoDB connection
client = MongoClient(Config.MONGO_URI)

db = client['finance']  #database name

# Define collections
users_collection = db['users']
expenses_collection = db['expenses']
transactions_collection = db['transactions']
goals_collection = db['goals']  # Assuming you have a 'goals' collection
