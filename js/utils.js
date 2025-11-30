
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