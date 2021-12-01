// ノートを取得する
fetch('./note.csv').then(res => res.text()).then(text => {
    const note = document.getElementById('note');
    note.innerHTML = '';
    text.split('\n').map(record => record.trim()).filter(record => !!record).forEach(record => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<div class="body"><h1>${record}</h1></div>`;
        note.appendChild(card);
    });
}).catch(c => {
    const note = document.getElementById('note');
    note.children[0].children[0].innerHTML = '取得に失敗しました';
});