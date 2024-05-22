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
};

Transaction.form.addEventListener('submit', (e) => {
    e.preventDefault();
});

Transaction.overlay.addEventListener('click', ({ target }) => {
    target === Transaction.overlay && Transaction.modal.close();
});
