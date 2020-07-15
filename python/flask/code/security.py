from werkzeug.security import safe_str_cmp #safe string compare
from user import User

users = [
    User(1, 'Daryl', 'qwerty')
]

username_mapping = {u.username: u for u in users}
userid_mapping = {u.id: u for u in users}

def authenticate(username, password):
    user = username_mapping.get(username, None)
    # if user and user.password == password:
    #     return user
    #line below shows how safe string compare works related to line 13
    if user and safe_str_cmp(user.password, password):
        return user

def identity(payload):  #this is unique to flask jwt
    user_id = payload['identity']
    return userid_mapping.get(user_id, None)