var arrayOfTasks = [];
document.addEventListener('DOMContentLoaded', function() {
  //Disabling the button unless there is something typed
  document.querySelector('#submit').disabled = true;
  document.querySelector('#task').onkeyup = () => {
      if(document.querySelector('#task').value.length > 0 )
        document.querySelector('#submit').disabled = false;
      else
        document.querySelector('#submit').disabled = true;
  };

  //adding a task to the list
  document.querySelector("#new-task").onsubmit = () => {
    const li = document.createElement('li');
    let taskText = document.querySelector('#task').value;
    let newTaskHTML = `
                      <span> ${taskText} </span>
                      <button class = "remove" > remove task from list </button>
                      `;
    li.innerHTML = newTaskHTML

    // li.innerHTML = document.querySelector('#task').value; can delete cause it is working now
     document.querySelector('#tasks-list').append(li);
     document.querySelector('#task').value = '';
     arrayOfTasks.push(li);
    return false;  
  }
//<button class = "levelOfCompletion" > change completion status </button>


//removing an item from the list
 document.addEventListener('click', function(event){
   element = event.target;
      if(element.className === 'remove'){
          element.parentElement.remove();
          arrayOfTasks.splice(li);
      }
   //   if(element.className === 'levelOfCompletion'){
   //       element.parentElement.style.textDecoration: 'line-through';
  //    }
    })


  
});
