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
// html = '';

// + i = 2; 2<10 ->true ->
    // html = '<tr>';
    // j = 1; i < 10 -> true ->
          // html = '<tr><td>';
          // html = '<tr><td>2x1=2'
          // html = '<tr><td>2x1=2</td>
   // j = 2 ....


document.getElementById('content').innerHTML = html

