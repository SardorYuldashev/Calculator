var display = document.querySelector('.display')
document.querySelectorAll('td').forEach(function(item) {
    item.addEventListener('click', function (e) {                
        let num = e.target.innerText
        if (num == "C") {
            display.value = ""
        } else if (num == "="){            
            display.value = eval(display.value);
        } else {
            display.value += num
        }
    })
})