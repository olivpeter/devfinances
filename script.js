const modal = document.getElementById('modal');
const transactionsBodyTable = document.getElementById('transactionsTableBody');

let transactions = [
    {
        id: 1,
        description: 'Salário',
        value: 17400,
        date: '24/11/2025',
        type: 'entry'
    },
    {
        id: 2,
        description: 'Aluguel',
        value: -1259,
        date: '24/11/2025',
        type: 'exit'        
    },
    {
        id: 3,
        description: 'Desenvolvimento de Site',
        value: 5000,
        date: '21/11/2025',
        type: 'entry'
    },
    {
        id: 4,
        description: 'Internet',
        value: -200,
        date: '23/11/2025',
        type: 'exit'
    },
    {
        id: 5,
        description: 'Supermercado',
        value: -800,
        date: '20/11/2025',
        type: 'exit'
    },
    {
        id: 6,
        description: 'Venda de App',
        value: 2500,
        date: '15/11/2025',
        type: 'entry'
    }
];

function handleModalOpen() {
    modal.classList.toggle('openModal');
}

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