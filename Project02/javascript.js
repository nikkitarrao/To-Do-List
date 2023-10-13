var arrayOfTasks = [];

document.addEventListener('DOMContentLoaded', ()=> {
  
  document.querySelector('#submit').disabled = true;
  document.querySelector('#task').onkeyup = () => {
      if(document.querySelector('#task').value.length > 0 )
        document.querySelector('#submit').disabled = false;
      else
        document.querySelector('#submit').disabled = true;
  };
  
document.querySelector("#new-task").onsubmit = () => {
  const li = document.createElement('li');
  let task_text = document.querySelector('#task').value;
  let new_task_html = '<span> ${task_text} </span>
    <button class = "remove" > remove task from list</button>';
  li.innerHTML = document.querySelector('#task').value;
  document.querySelector('#tasks-list').append(li);
  document.querySelector('#task').value = '';
  document.querySelector('#submit').disabled = true;
  return false;
};

});
