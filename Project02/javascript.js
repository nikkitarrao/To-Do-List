var arrayOfTasks = [];
function click(){
  alert("Are you sure you wanna add a new task");
}
document.querySelector("#new-task").onsubmit = () => {
  const li = document.createElement('li');
  line.innerHTML = document.querySelector('#task').value;
  document.querySelector('#tasks-list').append(li);
  
}

