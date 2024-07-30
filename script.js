document.getElementById('addTransactionBtn').addEventListener('click', addTransaction);

function addTransaction() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (type && name && amount) {
        const tableBody = document.getElementById('transactionTableBody');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${type}</td>
            <td>${name}</td>
            <td>$${amount}</td>
            <td><button class="btn btn-danger btn-sm w-50 delete-btn">Delete</button></td>
        `;

        tableBody.appendChild(row);
        document.getElementById('type').value = '';
        document.getElementById('name').value = '';
        document.getElementById('amount').value = '';

        row.querySelector('.delete-btn').addEventListener('click', () => {
            row.remove();
            });
        } else {
            alert('Please fill out all fields');
        }
}
