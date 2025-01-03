document.addEventListener('DOMContentLoaded', () => {
    const addTransactionBtn = document.getElementById('addTransactionBtn');
    const transactionList = document.getElementById('transactionList');
    const totalIncomeE1 = document.getElementById('totalIncome');
    const totalExpensesE1 = document.getElementById('totalExpenses');
    const balanceE1 = document.getElementById('balance');

    const transactionName = document.getElementById('transactionName');
    const transactionAmount = document.getElementById('transactionAmount');
    const transactionCategory = document.getElementById('transactionCategory');

    function displayTransactions() {
        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactionList.innerHTML = '';
        transactions.forEach((transaction, index) => {
            const li = document.createElement('li');

            if (transaction.category === 'Income') {
                li.innerHTML = `
                ${transaction.name} - $${transaction.amount.toFixed(2)} (${
                    transaction.category
                })
                <button class = "delete-Btn" onclick = "deleteTransaction(${index})">Delete</button>
            `;

            li.style.background = 'linear-gradient(to left, rgb(157, 188, 245), rgb(50, 32, 211))';
            li.style.color = 'white';
            } else {
                li.innerHTML = `
                ${transaction.name} - $${transaction.amount.toFixed(2)} (${
                    transaction.category
                })
                <button class = "delete-Btn" onclick = "deleteTransaction(${index})">Delete</button>
            `;

            li.style.background = 'linear-gradient(to left,rgb(226, 202, 96), rgb(71, 60, 10))';
            li.style.color = 'white';
            }

            transactionList.appendChild(li);
        });
    }

    function addTransaction() {
        const name = transactionName.value;

        const amount = parseFloat(
            transactionAmount.value
        );

        const category = transactionCategory.value;

        if (name && !isNaN(amount)) {
            const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
            const newTransaction = {name, amount, category};

            transactions.push(newTransaction);

            localStorage.setItem('transactions', JSON.stringify(transactions));
            displayTransactions();
            updateSummary();

            //reset fields after adding transaction
            transactionName.value = '';
            transactionAmount.value = '';
            transactionCategory.value = 'Income';
        }
    }

    function updateSummary() {
        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        let totalIncome = 0;
        let totalExpenses = 0;

        transactions.forEach((transaction) => {
            if (transaction.category === 'Income') {
                totalIncome += transaction.amount;
            } else {
                totalExpenses += transaction.amount;
            }
        });

        const balance = totalIncome - totalExpenses;

        totalIncomeE1.textContent = totalIncome.toFixed(2);
        totalExpensesE1.textContent = totalExpenses.toFixed(2);
        balanceE1.textContent = balance.toFixed(2);
    }

    function deleteTransaction(index) {
        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        displayTransactions();
        updateSummary();
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addTransaction();
        }
    }

    // Add event listener to the button to add a transaction
    addTransactionBtn.addEventListener('click', addTransaction);

    // Add event listener for the Enter key on the form inputs
    transactionName.addEventListener('keypress', handleKeyPress);
    transactionAmount.addEventListener('keypress', handleKeyPress);
    transactionCategory.addEventListener('keypress', handleKeyPress);
    
    window.deleteTransaction = deleteTransaction;

    displayTransactions();
    updateSummary();

});