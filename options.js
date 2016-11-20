var list = document.getElementById('demo');
var lastid = 0;

function changeText2() {
    var profilename = document.getElementById('profilename').value;
    var profiletext = document.getElementById('profiletext').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(profilename+ " : "+ profiletext));
    entry.setAttribute('id','item'+lastid);
    entry.setAttribute('data-name',profilename); //added a data-name attribute for easier access to name
    var removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("remove"));
    removeButton.setAttribute('onClick','removeName("'+'item'+lastid+'")');
    entry.appendChild(removeButton);
    lastid+=1;
    list.appendChild(entry);
}


function removeName(itemid){
    var item = document.getElementById(itemid);
    list.removeChild(item);
}

function getNames(){
    var names = [];
    for(var i=0;i<list.children.length;i++){
        names.push(list.children[i].getAttribute("data-name"));//get previously set attribute and add to array
    }
    return names;
}