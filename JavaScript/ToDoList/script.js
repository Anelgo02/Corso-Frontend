function addTask() {
  var task = document.getElementById("taskInput").value;

  if (task === "") {
    alert("Inserisci un'attività valida!");
    return;
  }

  var li = "<li>" + task + 
           " <button onclick='removeTask(this)'>X</button></li>";

  document.getElementById("taskList").innerHTML += li;

  document.getElementById("taskInput").value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}
