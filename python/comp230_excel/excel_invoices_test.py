import excel_invoices

def test_dictionaryBuilder():
    db=excel_invoices.dictionaryBuilder()
    assert(db['customers'][2]['f_name']=="Richmound")
    assert(db['invoices'][2]['invoice_no']==2)

def test_clientInvoices():
    assert(excel_invoices.clientInvoices(2)=='Annetta Colleford', 185, ['Flask', 'Lighter'])
    assert(excel_invoices.clientInvoices(1)=='rd', 185, ['Flask', 'Lighter'])