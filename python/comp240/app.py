from flask import Flask, jsonify
from excel_invoices import clientInvoices


app = Flask(__name__)




@app.route('/invoice/<int:invoice_no>')
def invoice(invoice_no):
    return jsonify({'Invoice Report': clientInvoices(invoice_no)}), 200



app.run(port=5000)