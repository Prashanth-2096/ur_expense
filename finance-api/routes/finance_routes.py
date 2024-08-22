from flask_restx import Namespace, Resource, fields
from flask import request
from models import transactions_collection, goals_collection

# Namespace for Finance operations
finance_ns = Namespace('finance', description='Finance operations')

transaction_model = finance_ns.model('Transaction', {
    'description': fields.String(required=True, description='The transaction description'),
    'amount': fields.Float(required=True, description='The transaction amount'),
    'type': fields.String(required=True, description='The transaction type (income/expense)')
})

goal_model = finance_ns.model('Goal', {
    'name': fields.String(required=True, description='Savings goal name'),
    'target_amount': fields.Float(required=True, description='Target amount for the goal'),
    'current_amount': fields.Float(required=True, description='Current amount saved')
})

@finance_ns.route('/transactions')
class Transactions(Resource):
    @finance_ns.doc('get_transactions')
    @finance_ns.marshal_list_with(transaction_model)
    def get(self):
        """Fetch all transactions"""
        try:
            transactions = list(transactions_collection.find({}, {'_id': 0}))
            return transactions, 200
        except Exception as e:
            return {'message': str(e)}, 500

    @finance_ns.doc('create_transaction')
    @finance_ns.expect(transaction_model)
    def post(self):
        """Create a new transaction"""
        transaction_data = request.json
        try:
            result = transactions_collection.insert_one(transaction_data)
            return {'message': 'Transaction created', 'id': str(result.inserted_id)}, 201
        except Exception as e:
            return {'message': str(e)}, 500

@finance_ns.route('/goals')
class Goals(Resource):
    @finance_ns.doc('get_goals')
    @finance_ns.marshal_list_with(goal_model)
    def get(self):
        """Fetch all savings goals"""
        try:
            goals = list(goals_collection.find({}, {'_id': 0}))
            return goals, 200
        except Exception as e:
            return {'message': str(e)}, 500

    @finance_ns.doc('create_goal')
    @finance_ns.expect(goal_model)
    def post(self):
        """Create a new savings goal"""
        goal_data = request.json
        try:
            result = goals_collection.insert_one(goal_data)
            return {'message': 'Goal created', 'id': str(result.inserted_id)}, 201
        except Exception as e:
            return {'message': str(e)}, 500
