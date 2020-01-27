let rootElement = document.getElementById('root');

function mainPage () {
    let add_new_button = document.createElement('button');
    add_new_button.classList.add('button_add_new');
    add_new_button.textContent = 'Add new';
    rootElement.appendChild(add_new_button);

    let text = document.createElement('text');
    text.classList.add('main_text');
    text.textContent = 'Terms constructor';
    rootElement.appendChild(text);

    let obj = Object.keys(localStorage);

    let unordered_list = document.createElement('ul');
    rootElement.appendChild(unordered_list);

    for (let prop of obj) {
        let list_element = document.createElement('li');

        let name_term = document.createElement('span');
        name_term.textContent = prop;

        let colon = document.createElement('colon');
        colon.textContent = ' : ';

        let name_definition = document.createElement('span');
        name_definition.textContent = localStorage.getItem(prop);

        let remove_button = document.createElement('button');
        remove_button.textContent = 'Remove';
        remove_button.addEventListener('click', function () {
            localStorage.removeItem(prop);
            location.reload();
        });

        let edit_button = document.createElement('button');
        edit_button.textContent = 'Edit';
        edit_button.addEventListener('click', function () {
            location.hash = `/modify/${prop}`;
            location.reload();
        });

        unordered_list.appendChild(list_element);

        list_element.appendChild(name_term);
        list_element.appendChild(colon);
        list_element.appendChild(name_definition);
        list_element.appendChild(remove_button);
        list_element.appendChild(edit_button);
    }

    add_new_button.addEventListener('click', function () {
        location.hash = '/add';
        location.reload();
    });
}

function addPage() {
    let name = document.createElement('input');
    name.type = 'text';
    name.placeholder = 'NAME';

    let meaning = document.createElement('input');
    meaning.type = 'text';
    meaning.placeholder = 'DEFINITION';

    let save_button = document.createElement('button');
    save_button.textContent = 'Save changes';

    let reject_button = document.createElement('button');
    reject_button.textContent = 'Cancel';

    rootElement.appendChild(name);
    rootElement.appendChild(meaning);
    rootElement.appendChild(save_button);
    rootElement.appendChild(reject_button);

    save_button.addEventListener('click', function(){

        if (name.value && meaning.value) {
            localStorage.setItem(name.value, meaning.value);
            location.hash = '';
            location.reload();
        }
    });

    reject_button.addEventListener('click', function () {
        location.hash = '';
        location.reload();
    });
}

function modifyPage() {
    let prop = location.hash.replace('#/modify/', '');

    let name = document.createElement('input');
    name.type = 'text';
    name.value = prop;
    name.disabled = true;

    let meaning = document.createElement('input');
    meaning.type = 'text';
    meaning.value = localStorage.getItem(prop);

    let save_button = document.createElement('button');
    save_button.textContent = 'Save changes';

    let reject_button = document.createElement('button');
    reject_button.textContent = 'Cancel';

    rootElement.appendChild(name);
    rootElement.appendChild(meaning);
    rootElement.appendChild(save_button);
    rootElement.appendChild(reject_button);

    save_button.addEventListener('click', function () {

        if (meaning.value && name.value) {

            localStorage.setItem(name.value, meaning.value);
            location.hash = '';
            location.reload();
        }
    });

    reject_button.addEventListener('click', function () {

        location.hash = '';
        location.reload();
    });
}


if ('#/add' === location.hash ) {
    addPage();
} else if ('' === location.hash ) {
    mainPage();
} else {
    modifyPage();
}