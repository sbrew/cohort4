from flask import Flask, jsonify, request, render_template

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

@app.route('/')
def home():
    return render_template('index.html')

# @app.route('/') #'http://www.google.ca/' / means homepage
# def home():
#     return "Hey, how ya doin?"

# POST - used to receive data
# GET - used to send data back only

# POST /store data: {name:}
@app.route('/store', methods=['POST'])
def create_store():
    request_data = request.get_json()
    new_store = {
        'name': request_data['name'],
        'items': []
    }
    stores.append(new_store)
    return jsonify(new_store)


# GET /store/<string:name>
@app.route('/store/<string:name>')  # 'http://127.0.0.1:5000/store/store_name'
def get_store(name):
    # iterate over store
    for store in stores:
    # if the store name matches, return it
        if store['name'] == name:
            return jsonify(store)
    # if none match, return an error message
    return jsonify({'message': 'Store not found'})


# GET /store
@app.route('/store')
def get_stores():
    return jsonify({'stores': stores})

# POST /store/<string:name>/item {name:, price:}
@app.route('/store/<string:name>/item', methods=['POST']) # 'http://127.0.0.1:5000/store/store_name'
def create_item_in_store(name):
    request_data = request.get_json()
    for store in stores:
        if store['name'] == name:
            new_item = {
                'name': request_data['name'],
                'price': request_data['price']
            }
            store['items'].append(new_item)
            return jsonify(new_item)
    return jsonify({'message': 'store not found'})

# GET /store/<string:name>/item
@app.route('/store/<string:name>/item')
def get_item_in_store(name):
    #  iterate over store
    for store in stores:
    # if the store name matches, return it
        if store['name'] == name:
            return jsonify({'items': store['items']})
    # if none match, return an error message
    return jsonify({'message': 'Store not found'})


app.run(port=5000)
