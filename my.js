let html = '';
for (let i = 2; i < 10; i++) {
    html += '<tr>';
    for (let j = 1; j < 10; j++) {
        html += '<td>';
        html += i + 'x' + j + '=' + i * j
        html += '</td>';
    }
    html += '</tr>';
}

document.getElementById('content').innerHTML = html

