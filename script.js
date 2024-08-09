document.addEventListener('DOMContentLoaded', function() {
    const names = [
        {name: 'Marian Jane Pensocas', lrn: '1234567890'},
        {name: 'Christian Tambobong', lrn: '0987654321'},
        {name: 'Niko Jay Sedan', lrn: '1122334455'},
        {name: 'Jessica P.', lrn: '6677889900'},
        {name: 'Ralf Perillo', lrn: '5544332211'},
        {name: 'Angel James Vedania', lrn: '7766554433'},
        {name: 'Justin Dave Peñano', lrn: '2233445566'},
        {name: 'Olivia Martinez', lrn: '8899001122'},
        {name: 'Ethan Anderson', lrn: '3344556677'},
        {name: 'Sophia Thomas', lrn: '7788990011'},
        // Additional sample data - more names and LRNs
    ];

    // Automatically generate 1000 names and LRNs
    for (let i = 11; i <= 1000; i++) {
        names.push({
            name: `Name ${i}`,
            lrn: `${Math.floor(1000000000 + Math.random() * 9000000000)}`
        });
    }

    const lrnList = document.getElementById('lrnList');

    // Populate the list with data
    names.forEach(person => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="name">${person.name}</span> - <span class="lrn">${person.lrn}</span>`;
        lrnList.appendChild(li);
    });
});

function searchFunction() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const ul = document.getElementById('lrnList');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const nameSpan = li[i].getElementsByClassName('name')[0];
        const lrnSpan = li[i].getElementsByClassName('lrn')[0];
        const name = nameSpan.textContent || nameSpan.innerText;
        const lrn = lrnSpan.textContent || lrnSpan.innerText;

        if (name.toUpperCase().indexOf(input) > -1 || lrn.indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
