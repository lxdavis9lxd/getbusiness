# getbusiness

## Vendor EJS Template and Route

This application includes a vendor EJS template and route to handle GET, POST, modify, and delete vendor information including name, address, phone number, ID, and email.

### Vendor EJS Template

The vendor EJS template is located at `views/vendor.ejs`. It includes form elements for name, address, phone number, ID, and email, as well as buttons for submitting, modifying, and deleting vendor information.

### Vendor Route

The vendor route is located at `routes/vendor.js`. It includes the following routes:
- GET `/vendor`: Displays vendor information.
- POST `/vendor`: Adds new vendor information.
- PUT `/vendor/:id`: Modifies existing vendor information.
- DELETE `/vendor/:id`: Deletes vendor information.
