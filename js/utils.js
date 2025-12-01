
function handleModalOpen() {
    modal.classList.toggle('openModal');
}

function clearForm() {
    form.reset();
}

function parseDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
}

function formatValue(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

const STORAGE_KEY = 'transactions';

function loadTransactions() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return JSON.parse(data) || [];
    } catch (error) {
        console.error('Erro ao carregar transações:', error);
        return [];
    }
}

function saveTransactions() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}
