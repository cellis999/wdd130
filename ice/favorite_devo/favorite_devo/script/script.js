const addButton = document.getElementById('add-button');
const devoTable = document.getElementById('devo-table');

addButton.addEventListener('click', function(event) {
    event.preventDefault();
    const speaker = document.getElementById('speaker').value;
    const title = document.getElementById('title').value;
    const location = document.getElementById('location').value;
    const year = document.getElementById('year').value;
    console.log('Speaker:', speaker);

    if (speaker === '' || title === '' || location === '' || year === '') {
    alert('Please fill in all fields before adding a devotional.');
    return;
    }

    const newRow = devoTable.insertRow();

    newRow.innerHTML = `
        <td>${speaker}</td>
        <td>${title}</td>
        <td>${location}</td>
        <td>${year}</td>
    `;

    devoTable.appendChild(newRow);

    document.getElementById('speaker').value = '';
    document.getElementById('title').value = '';
    document.getElementById('location').value = '';
    document.getElementById('year').value = '';

});
    