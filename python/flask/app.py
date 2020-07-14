from flask import Flask, jsonify

app = Flask(__name__)

stores = [
    {
        'name': "Hey check out my awesome store",
        'items': [
            {
                'name': 'My item',
                'price': 15.99
            }
        ]
    }
]

# @app.route('/') #'http://www.google.ca/' / means homepage
# def home():
#     return "Hey, how ya doin?"

# POST /store data: {name:}
@app.route('/store', methods=['POST'])
def create_store():
    pass


# GET /store/<string:name>
@app.route('/store/<string:name>')  # 'http://127.0.0.1:5000/store/store_name'
def get_store(name):
    pass

# GET /store
@app.route('/store')
def get_stores():
    return jsonify({'stores': stores})

# POST /store/<string:name>/item {name:, price:}
@app.route('/store/<string:name>/item', methods=['POST']) # 'http://127.0.0.1:5000/store/store_name'
def create_item_in_store(name):
    pass

# GET /store/<string:name>/item
@app.route('/store/<string:name>/item')
def get_item_in_store(name):
    pass


app.run(port=5000)
