/* Новые элементы должны добавляться в список по нажатию на Enter */
const checkList = document.querySelector('.input-wrapper');

checkList.addEventListener('keydown', function() {
    if (event.key == 'Enter' && text !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.addEventListener('click', function() {
            li.classList.toggle('done');
        });
    }
    Input.value = '';
});


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */