from flask import Flask
from flask_cors import CORS
from flask_restx import Api
from routes.auth_routes import auth_ns  # Importing Namespace
from routes.finance_routes import finance_ns  # Importing Namespace

def create_app():
    app = Flask(__name__)

    # Enable CORS
    CORS(app)

    # Create Api object and register namespaces
    api = Api(app)
    api.add_namespace(auth_ns)
    api.add_namespace(finance_ns)

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, port=8080)

