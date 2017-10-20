document.onkeydown = function(e) {
    if (e.key == "F5") {
        localStorage.clear();
    }
}

// date Field block
var dateField = document.querySelectorAll('.dateblock__datefield');

for (var i = 0, length = dateField.length; i < length; i++) {
    (function(element) {
        var name = element.getAttribute('name');

        element.value = localStorage.getItem(name) || element.value;

        element.onblur = function() {
            localStorage.setItem(name, element.value);
        };
    })(dateField[i]);
};


// time Field block
var timeField = document.querySelectorAll('.dateblock__timefield');

for (var i = 0, length = timeField.length; i < length; i++) {
    (function(element) {
        var name = element.getAttribute('name');

        element.value = localStorage.getItem(name) || element.value;

        element.onblur = function() {
            localStorage.setItem(name, element.value);
        };
    })(timeField[i]);
};


// radio button block

var rbtn = document.getElementsByName('rbtn');
for (var i = 0; i < rbtn.length; i++) {
    rbtn[i].onclick = function() {
        localStorage.setItem('r_btn_value', this.value);
    }
}
if (localStorage.getItem('r_btn_value')) {
    var r_btn_value = localStorage.getItem('r_btn_value');
    document.querySelector('input[name="rbtn"][value="' + r_btn_value + '"]').setAttribute('checked', 'checked');
}



// select block
var select = document.querySelector(".car_val");
var selectOption = select.options[select.selectedIndex];
var lastSelected = localStorage.getItem('select');

if (lastSelected) {
    select.value = lastSelected;
}

select.onchange = function() {
    lastSelected = select.options[select.selectedIndex].value;

    localStorage.setItem('select', lastSelected);
}