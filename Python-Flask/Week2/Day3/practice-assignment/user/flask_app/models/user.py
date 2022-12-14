from flask_app.config.mysqlconnection import MySQLConnection
# burger.py
class User:

    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls,data):
        query="INSERT INTO users (first_name,last_name,email,created_at,updated_at) VALUES (%(first_name)s,%(last_name)s,%(email)s,NOW() ,NOW())"
        return MySQLConnection ('users_schema').query_db(query,data)


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        users_from_db = MySQLConnection('users_schema').query_db(query)
        user = []
        for b in users_from_db:
            user.append(cls(b))
        return user
