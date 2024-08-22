from flask import Flask
from flask_cors import CORS
from config import Config
from routes.auth_routes import auth_ns
from routes.finance_routes import finance_ns
from flask_restx import Api

def create_app():
    app = Flask(__name__)
    
    # Load configuration settings
    app.config.from_object(Config)
    
    # Enable CORS (Cross-Origin Resource Sharing)
    CORS(app)
    
    # Set up Flask-RESTx API
    api = Api(app, version='1.0', title='Personal Finance API', description='A simple API for managing personal finances', doc='/swagger/')
    
    # Register namespaces for modular route handling
    api.add_namespace(auth_ns, path='/auth')
    api.add_namespace(finance_ns, path='/finance')
    
    return app
