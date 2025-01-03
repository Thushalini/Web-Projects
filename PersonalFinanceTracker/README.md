Personal Finance Tracker

A simple and interactive web-based expense tracker application. This project helps users track their income and expenses and calculate the balance effectively.

**Features**:

-> Add new transactions (income or expense).
-> Categorize transactions as "Income" or "Expense".
-> Display a list of all transactions with category-specific styling.
-> Delete individual transactions.
-> Automatically calculate and display the total income, total expenses, and balance.
-> Data persistence using localStorage to retain transaction history across sessions.

**Technologies Used**:

- HTML: For structuring the web page.
- CSS: For styling the application.
- JavaScript: For interactivity and dynamic updates.

**Usage**:

- Enter the transaction name, amount, and category (Income or Expense) in the provided input fields.
- Click the Add Transaction button or press Enter to add the transaction.
- View all added transactions in the list, categorized with distinct styling.
- Monitor total income, total expenses, and the calculated balance at the top.
- Delete a transaction by clicking the Delete button next to it.

**Code Overview**:

**Core JavaScript Functions**:

=> displayTransactions():
Retrieves transactions from localStorage and displays them in the transaction list with category-specific styling.

=> addTransaction():
Adds a new transaction to localStorage, updates the transaction list, and recalculates the summary.

=> updateSummary():
Calculates and displays the total income, total expenses, and balance based on stored transactions.

=> deleteTransaction(index):
Removes a transaction from localStorage and updates the transaction list and summary.

=> handleKeyPress(event):
Adds a transaction when the Enter key is pressed while focusing on an input field.

**Event Listeners**:

Add Transaction Button: Listens for click events to add a transaction.
Enter Key: Listens for keypress events on input fields to add a transaction.

Feel free to contribute to the project or suggest improvements!

