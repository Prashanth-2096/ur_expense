from flask_restx import Namespace, Resource, fields
from flask import request
from werkzeug.security import generate_password_hash, check_password_hash
from models import users_collection

# Namespace for Authentication
auth_ns = Namespace('auth', description='Authentication operations')

signup_model = auth_ns.model('Signup', {
    'username': fields.String(required=True, description='The user name'),
    'email': fields.String(required=True, description='The user email'),
    'phone': fields.String(required=True, description='The user phone number'),
    'password': fields.String(required=True, description='The user password'),
    'confirm_password': fields.String(required=True, description='The confirm password')
})

login_model = auth_ns.model('Login', {
    'email': fields.String(required=True, description='The user email'),
    'password': fields.String(required=True, description='The user password')
})

@auth_ns.route('/signup')
class Signup(Resource):
    @auth_ns.doc('signup')
    @auth_ns.expect(signup_model)
    def post(self):
        user_data = request.json
        print(user_data)
        if user_data['password'] != user_data['confirm_password']:
            return {'message': 'Passwords do not match'}, 400

        # Hash the password before storing
        hashed_password = generate_password_hash(user_data['password'])

        # Create user document
        user = {
            'username': user_data['username'],
            'email': user_data['email'],
            'phone': user_data['phone'],
            'password': hashed_password  # Store the hashed password
        }

        # Check if the user already exists
        if users_collection.find_one({'email': user_data['email']}):
            return {'message': 'User already exists'}, 400

        # Insert user into MongoDB
        result = users_collection.insert_one(user)
        return {'message': 'User created', 'id': str(result.inserted_id)}, 201

@auth_ns.route('/login')
class Login(Resource):
    @auth_ns.doc('login')
    @auth_ns.expect(login_model)
    def post(self):
        login_data = request.json
        email = login_data['email']
        password = login_data['password']

        # Retrieve the user document from MongoDB
        user = users_collection.find_one({'email': email})
        if user and check_password_hash(user['password'], password):
            return {'message': 'Login successful'}, 200
        else:
            return {'message': 'Invalid email or password'}, 401
