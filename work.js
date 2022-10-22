let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', ()=>{
    if(button.innerHTML == '='){
        if(string[0] == '+'){
          string= "";
        }
        else{
          string = eval(string);
          document.querySelector('input').value = string;
        }
      	
    }
    else if(button.innerHTML == 'AC'){
      	string = ""
      	document.querySelector('input').value = string;
    }
    else if(button.innerHTML == 'X'){
    	string = string.slice(0,-1);
      	document.querySelector('input').value = string;
    }
    else{ 
	    console.log(button)
	    string = string + button.innerHTML;
	    document.querySelector('input').value = string;
    }
  })
})