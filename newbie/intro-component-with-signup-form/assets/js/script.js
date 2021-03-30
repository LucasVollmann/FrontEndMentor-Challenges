formInput = document.getElementsByTagName("input")
button    = document.getElementsByTagName("button")[0]
errorMsg  = document.getElementsByClassName("error-msg")

function checkInput(){
    for(i = 0; i < formInput.length; i++){

        input = formInput[i]
        error = errorMsg[i]

        if(input.value == ""){
            input.parentNode.classList.add("error-label")
            error.innerHTML = formInput[i].getAttribute('placeholder') + " Cannot be empty"
        }else{
            input.parentNode.classList.remove("error-label")
            error.innerHTML = ""

            if(i == 2){
                var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
                if (regex.test(input.value) == false){
                    input.parentNode.classList.add("error-label")
                    error.innerHTML = "Looks like this is not an email"
                }   
            }
        }        
    }
}

button.addEventListener("click", checkInput)
