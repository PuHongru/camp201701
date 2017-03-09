const [insertBtn, deleteBtn, updateBtn]
    = Array.from(document.querySelectorAll('#buttons button'));

const datalist = document.getElementById('datalist');
const rowtext = document.getElementById('rowtext');

function getAllCheckedRows (list){
    return Array.from(
        list.querySelectorAll('li input:checked')).map(el => {
            while (el.nodeName.toUpperCase() !== 'LI'){
                el = el.parentNode;
            }
            return el;
    });
}

function createNewRow (){
    var row = document.createElement('li');
    row.innerHTML = `<label><input type="checkbox"/>${rowtext.value}</label>`;
    return row;
}

// ��������Ч��
function fadeOut (obj, time){
    var startTime = Date.now(),
        h = obj.offsetHeight,
        duration = time;

    requestAnimationFrame(function step (){
        var p = Math.min(1.0, (Date.now() - startTime) / duration);
        obj.style.opacity = 1 - p;
        obj.style.height = h - p * h + 'px';
        if (p < 1.0) requestAnimationFrame(step);
    });
}

// ����Ԫ�ؽڵ�
function appendNode (list, objs){
    if (objs.length){
        objs.forEach(obj =>
            obj.insertAdjacentElement('afterend', createNewRow()));
    } else {
        list.appendChild(createNewRow());
    }
}

// ������ӽڵ㰴ť
insertBtn.addEventListener('click', evt => {
    var cheakedRows = getAllCheckedRows(datalist);
    appendNode(datalist, cheakedRows);
});

//���ɾ���ڵ�
deleteBtn.addEventListener('click', evt => {
    var cheakedRows = getAllCheckedRows(datalist);
    if (cheakedRows.length){
        cheakedRows.forEach(row => {
            fadeOut(row, 500);
            setTimeout(function (){
                row.remove();
            }, 500);
        });
    }
    isChecked();
});

// ������½ڵ�
updateBtn.addEventListener('click', evt => {
    var cheakedRows = getAllCheckedRows(datalist);
    if (cheakedRows.length){
        cheakedRows.forEach(row =>
            row.childNodes[0].childNodes[1].textContent = rowtext.value)
    }
});

// �ж��Ƿ�ѡ�У���ȷ��update��ť��delete��ť
function isChecked (){
    var cheakedRows = getAllCheckedRows(datalist);
    if (cheakedRows.length){
        deleteBtn.disabled = false;
        updateBtn.disabled = false;
    } else {
        deleteBtn.disabled = true;
        updateBtn.disabled = true;
    }
}
isChecked();
console.log(datalist.querySelectorAll('li input'));
datalist.querySelectorAll('li input').forEach(el => {
    el.addEventListener('change',function (){
        isChecked();
    });
});