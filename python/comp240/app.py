from flask import Flask, jsonify, render_template
from excel_invoices import clientInvoices, dictionaryBuilder

app = Flask(__name__)

@app.route('/')  # This refers to the homepage
def home():
    return render_template("base.html")

@app.route("/dump")
def simpleDump():
    data = dictionaryBuilder()
    return jsonify(data)


@app.route('/invoice/<int:invoice_no>')
def invoice(invoice_no):
    return jsonify({'Invoice Report': clientInvoices(invoice_no)}), 200


app.run(port=5000)
