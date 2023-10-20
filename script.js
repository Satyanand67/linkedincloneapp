function show() {
    var p = document.getElementById('pwd');
let hideButton = document.getElementById('eye');
    p.setAttribute('type', 'text');
 hideButton.textContent='Hide';
  hideButton.id='eye';
  
  
}

function hide() {
    var p = document.getElementById('pwd');
  var hideButton = document.getElementById('eye');
    p.setAttribute('type', 'password');
  hideButton.textContent='Show';
  hideButton.id='eye';
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);
/* 
///html/body/main/div[2]/section/div[2]/ul/li[2]/img