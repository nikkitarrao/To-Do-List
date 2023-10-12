var arrayOfTasks = [];

document.addEventListener('DOMContentLoaded', ()=> {
  document.querySelector('#submit').disabled = true;
  
  
document.querySelector("#new-task").onsubmit = () => {
  const li = document.createElement('li');
  line.innerHTML = document.querySelector('#task').value;
  document.querySelector('#tasks-list').append(li);
  
}

});
