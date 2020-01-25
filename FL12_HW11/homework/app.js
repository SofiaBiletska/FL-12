const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function elementCreation(item, struct) {
  let Icon = document.createElement('icon');
  Icon.classList.add('material-icons');
  let Title = document.createElement('span');
  Title.textContent = struct.title;
  let Element = document.createElement('li');
  Element.classList.add('element_item');
  if (struct.folder) {
    Element.classList.add('folder');
    Icon.textContent = 'folder';
  }
  item.append(Element);
  Element.append(Icon);
  Element.append(Title);
}


function folderListCreation (item, obj_struct) {
  let list_item = document.createElement('ul');
  item.append(list_item);
  obj_struct.forEach(function (it, k, obj_struct) {
    elementCreation(list_item, obj_struct[k]);
    if (obj_struct[k]['children'] && obj_struct[k]['folder']) {
      folderListCreation(list_item, obj_struct[k]['children']);
    } else {
      let folderIsEmpty = document.createElement('p');
      list_item.append(folderIsEmpty);
      folderIsEmpty.textContent = 'Folder is empty';
    }
  });
}

folderListCreation(rootNode, structure);

function tfold(Event) {
  let event_target = Event.target.parentNode;
  let Icon = event_target.firstChild;
  if (event_target.classList.contains('folder')) {
    event_target.classList.toggle('oFolder');
    if (Icon.textContent === 'folder'){
    Icon.textContent = 'folder_open';
    } else {
      Icon.textContent = 'folder';
    }
  }
}

rootNode.addEventListener('click', tfold);