(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      if (value != "=") {
        screen.value += value;
      }
    });
  });
  equal.addEventListener("click", (e) => {
    if (screen.value === "") {
      screen.value = "Please enter";
    } else {
      if (e.target.dataset.num == "=") {
        let answer = eval(screen.value);
        screen.value = answer;
      }
    }
  });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = '';
        } else {
            let = answer = eval(value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = '';
    })

}());