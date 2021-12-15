var form = document.getElementById('to-do');
var itemList = document.querySelector('.op-ul');
form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    // Get input value
    var newItem = document.getElementById('add').value;

    // Delete event
    itemList.addEventListener('click', removeItem);

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'op-li';
    // Create new li element
    var data = document.createElement('p');
    // Add class
    data.className = 'op-data';
    // Create new li element
    var box = document.createElement('input');
    box.type = "checkbox";
    // Add class
    box.className = 'op-box';

    // Add text node with input value
    li.appendChild(box);
    li.appendChild(data);
    data.appendChild(document.createTextNode(newItem));
    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'close';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}