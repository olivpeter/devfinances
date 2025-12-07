const modal = document.getElementById('modal');
const transactionsBodyTable = document.getElementById('transactionsTableBody');
const form = document.querySelector('form');

let transactions = loadTransactions();

function renderTransactions() {
    transactionsBodyTable.innerHTML = '';

    transactions.forEach(transaction => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td class="table_data_description">${transaction.description}</td>
            <td class="table_data_value ${transaction.type}">${formatValue(transaction.value)}</td>
            <td class="table_data_date">${parseDate(transaction.date)}</td>
        `;

        transactionsBodyTable.appendChild(tr);
    });

    updateBalance();
}

function updateBalance() {
    const incomeResult = transactions //
        .filter(transaction => transaction.type === 'entry')
        .reduce((acc, transaction) => acc + transaction.value, 0);

    const expenseResult = transactions //
        .filter(transaction => transaction.type === 'exit')
        .reduce((acc, transaction) => acc + transaction.value, 0);

    const totalResult = incomeResult + expenseResult;

    document.getElementById('incomeDisplay').innerHTML = formatValue(incomeResult);
    document.getElementById('expenseDisplay').innerHTML = formatValue(Math.abs(expenseResult));
    document.getElementById('totalDisplay').innerHTML = formatValue(totalResult);
}

renderTransactions();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const value = document.getElementById('value').value;
    const type = document.getElementById('type').value;
    const date = document.getElementById('date').value;

    const transaction = {
        id: transactions.length + 1,
        description,
        value: Number(value.replace(',', '.')),
        type,
        date
    };

    transactions.push(transaction);
    saveTransactions();
    renderTransactions();

    clearForm();
    handleModalOpen();
});