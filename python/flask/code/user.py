import sqlite3
from flask_restful import Resource, reqparse

class User:

    def __init__(self, _id, username, password):
        self.id = _id #using underscore because id is a python keyword
        self.username = username
        self.password = password



            #username mapping
    @classmethod
    def find_by_username(cls, username):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM users WHERE username=?"
        result = cursor.execute(query, (username,))
        row = result.fetchone()
        if row:
            # user = cls(row[0], row[1], row[2])
            user = cls(*row) 
        else:
            user = None

        connection.close()
        return user


            #user id mapping
    @classmethod
    def find_by_id(cls, _id):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM users WHERE id=?"
        result = cursor.execute(query, (_id,))
        row = result.fetchone()
        if row:
            # user = cls(row[0], row[1], row[2])
            user = cls(*row) 
        else:
            user = None

        connection.close()
        return user

class UserRegister(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('username',
            type=str,
            required=True,
            help="Username Field cannot be left blank"
        )
    parser.add_argument('password',
            type=str,
            required=True,
            help="Password Field cannot be left blank.. would you just leave your doors unlocked??"
        )

    def post(self):
        data = UserRegister.parser.parse_args()


        if User.find_by_username(data['username']):
            return {"message": "That username is already in use"}, 400

        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "INSERT INTO users VALUES (NULL, ?, ?)"
        cursor.execute(query, (data['username'], data['password']))

        connection.commit()
        connection.close()

        return {"message": "User created successfully."},201