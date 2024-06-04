const Transaction = {
    form: document.getElementById('new-transaction'),
    overlay: document.querySelector('.modal-overlay'),
    modal: {
        open() {
            document.querySelector('.modal-overlay').classList.add('openModal');
        },
        close() {
            document.querySelector('.modal-overlay').classList.remove('openModal');
        },
    },
    inputs: {
        description: document.getElementById('description'),
        value: document.getElementById('value'),
        category: document.getElementById('category'),
        date: document.getElementById('date'),
    },
    getValues() {
        return {
            description: this.inputs.description.value,
            value: this.inputs.value.value,
            category: this.inputs.category.value,
            date: this.inputs.date.value,
        };
    },
};

Transaction.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValues = Transaction.getValues();
    console.log(inputValues);
    Transaction.modal.close();
});

Transaction.overlay.addEventListener('click', ({ target }) => {
    target === Transaction.overlay && Transaction.modal.close();
});
