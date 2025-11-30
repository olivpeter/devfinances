const modal = document.getElementById('modal');
const transactionsBodyTable = document.getElementById('transactionsTableBody');
const form = document.querySelector('form');

let transactions = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const value = document.getElementById('value').value;
    const type = document.getElementById('type').value;
    const date = document.getElementById('date').value;
    
    const transaction = {
        id: transactions.length + 1,
        description,
        value,
        type,
        date
    }; 

    transactions.push(transaction);

    transactionsBodyTable.innerHTML = ''

    transactions.forEach(transaction => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="table_data_description">${transaction.description}</td>
            <td class="table_data_value ${transaction.type}">${transaction.value}</td>
            <td class="table_data_date">${transaction.date}</td>
        `;

        transactionsBodyTable.appendChild(tr);
    });
    
    clearForm();
    handleModalOpen();
});

function handleModalOpen() {
    modal.classList.toggle('openModal');
}

function clearForm() {
    form.reset();
}