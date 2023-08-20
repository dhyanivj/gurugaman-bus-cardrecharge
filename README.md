# Gurugaman Bus Card Recharge Web Application

## Overview

The Gurugaman Bus Card Recharge web application provides a user-friendly interface for Gurugram bus cardholders to recharge their cards online. The process involves entering personal details, card number, and the desired recharge amount, followed by a UPI payment.

## Features

- **User-friendly Interface**: Simple and intuitive design that guides the user through the recharge process.
- **Dynamic Card Number Display**: As users type in their card number, it's dynamically displayed on the screen.
- **UPI Payment Integration**: Users are redirected to their UPI app for payment, ensuring a secure transaction.

## How to Use

1. **Enter Personal Details**: Start by entering your name.
2. **Input Card Number**: Type in your Gurugram bus card number.
3. **Specify Recharge Amount**: Enter the amount you wish to recharge.
4. **UPI Payment**: Confirm the details and proceed to payment via UPI.

## UPI Payment

The application currently supports Paytm UPI. To switch to another UPI handle like PhonePe, modify the `handleName` variable in the `script.js` file.

## Payment Confirmation

Due to the peer-to-peer nature of UPI, the application does not natively support payment confirmations. Users are advised to check their UPI app or bank statement to confirm the transaction. For more robust payment confirmation methods, consider integrating with a third-party payment gateway.

## FAQ

- **Is this the official Gurugram bus card recharge application?**
  - No, this is an independent project to facilitate online recharges.
  
- **How is the payment processed?**
  - The payment is processed via UPI. Users are redirected to their UPI app to complete the transaction.

## Support

For any issues or queries related to the application, please raise an issue on the GitHub repository or contact the developer directly.
