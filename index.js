function tikla(){
    
    var element = document.getElementById("p6")
    var firstnumber = document.getElementById("isim")
    var Second = document.getElementById("isim1")
    var process2 = document.getElementById("process1")
     if(parseInt(process2.value) == 1){
        element.innerHTML = parseInt(firstnumber.value) + parseInt(Second.value)
     }
    else if(parseInt(process2.value) == 2){
        element.innerHTML = parseInt(Second.value)  - parseInt(firstnumber.value)
     }
      else if(parseInt(process2.value) == 3){
        element.innerHTML = parseInt(Second.value) * parseInt(firstnumber.value)

     }
    else if(parseInt(process2.value) == 4){
        element.innerHTML = parseInt(Second.value) / parseInt(firstnumber.value)
     }
    }