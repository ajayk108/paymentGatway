function initiateUpiPayment() {
    var recipientUPI = 'recipient@example.com'; // Replace with the recipient's UPI ID
    var recipientName = 'Recipient'; // Replace with the recipient's name
    var merchantCode = '1234'; // Replace with the merchant code
    var orderID = 'ORDER123'; // Replace with the unique order ID
    var transactionNote = 'Payment for Order'; // Replace with the transaction note
    var amount = '1'; // Replace with the payment amount
    var currency = 'INR'; // Currency (Indian Rupees in this case)

    var upiUrl = 'upi://pay?pa=' + recipientUPI +
                 '&pn=' + recipientName +
                 '&mc=' + merchantCode +
                 '&tid=' + orderID +
                 '&tn=' + encodeURIComponent(transactionNote) +
                 '&am=' + amount +
                 '&cu=' + currency;

    // Open the UPI payment link
    window.open(upiUrl);
}
