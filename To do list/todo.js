var arr = [];
function btn_able() {
    var btn = document.getElementById('btn');
    var input = document.getElementById('input');
    btn.disabled = false;
}
function add() {
    var div = document.getElementById('list');
    var li = document.createElement('li');
    var ul = document.createElement('ul');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', 'checkbox');
    check.setAttribute('Onchange', 'check(this)');
    var dropdown = document.createElement('select');
    dropdown.setAttribute('class', 'dropdown');
    dropdown.appendChild(new Option("To do"));
    dropdown.appendChild(new Option("In progress"));
    dropdown.appendChild(new Option("Completed"));
    dropdown.setAttribute('Onchange', "select_value(this)");
    var exit = document.createElement('button');
    exit.onclick = function () {
        debugger;
        var del = ul.querySelector('.task_name');
        // var del1=ul.parentElement as HTMLInputElement;
        // console.log(del1)
        var delvalue = del.innerText;
        var ind = arr.indexOf(delvalue);
        if (ind > -1) {
            arr.splice(ind, 1);
            ul.removeChild(this.parentElement);
            console.log(arr);
        }
    };
    exit.setAttribute('class', 'fa-solid fa-remove');
    div.appendChild(ul);
    var inputVal = document.getElementById('input');
    if (inputVal.value != null && inputVal.value != '') {
        debugger;
        var inputvalue = inputVal.value;
        if (arr.indexOf(inputvalue) !== -1) {
            alert("Task Already exists");
        }
        else {
            var text = document.createElement('p');
            text.setAttribute('class', 'task_name');
            text.setAttribute('readonly', 'true');
            // text.setAttribute('class','form-control')
            text.innerText = inputvalue;
            li.appendChild(check);
            li.appendChild(text);
            // var ul=document.getElementById('ul') as HTMLUListElement;
            li.appendChild(dropdown);
            li.appendChild(exit);
            ul.appendChild(li);
            arr.push(inputvalue);
        }
    }
    else {
        alert("Task cannot be empty");
        inputVal.value = '';
    }
    inputVal.value = '';
    console.log(arr);
}
function select_value(e) {
    debugger;
    var listItem = e.parentElement;
    var taskelement = listItem.querySelector('.task_name');
    console.log(listItem.querySelector('.task_name'));
    var check = listItem.querySelector('#checkbox');
    // var check_box=document.getElementById('checkbox') as HTMLInputElement;
    if (e.value == 'Completed') {
        check.checked = true;
        taskelement.style.textDecoration = 'line-through';
    }
    else {
        check.checked = false;
        taskelement.style.textDecoration = 'none';
    }
    console.log(e.value);
}
function check(e) {
    debugger;
    var listItem = e.parentElement;
    var taskelement = listItem.querySelector('.task_name');
    var drop = listItem.querySelector('.dropdown');
    console.log(e.checked);
    if (e.checked == true) {
        drop.value = 'Completed';
        taskelement.style.textDecoration = 'line-through';
    }
    else {
        drop.value = 'To do';
        taskelement.style.textDecoration = 'none';
    }
    console.log(e.value);
}
function search() {
    var input = document.getElementById("search");
    var input1 = input.value.toLowerCase();
    var ul = document.getElementById("list");
    var li = ul.getElementsByTagName("li");
    debugger;
    for (var i = 0; i < li.length; i++) {
        if (li[i].innerText.toLowerCase().indexOf(input1) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}
