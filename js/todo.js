window.onload = function () {

  var taskList = [];    //тут будут хранится все таски

  // если localStorage не пустой выводим все что там есть
  if ( localStorage.getItem('todo') != undefined ){

    // берем из localStorage и передаем в обьект
    taskList = JSON.parse(localStorage.getItem('todo') );

    // и выводим сам список
    showTaskList();
  }

  // обрабатываем клик на елементах списка
  document.getElementById('out').onclick = function (event) {

    // удалить
    if( event.target.className == 'remove') {
      var currentElementDataId = event.target.dataset.index;
      removeSingleTask(currentElementDataId);
      showTaskList();
    }
    // чекнуть
    if (event.target.className == 'che') {
      checkTask();
      showTaskList();
    }


  }

  // document.getElementById('out').onblur = function (event) {
  //   console.log(event.target);
  // }





  // добавляем новую таску в список
  document.getElementById('add').onclick = function(){
    var inputValue    = document.getElementById('in').value;
    if(inputValue != ''){
      var singleTask     = {}; // создаем обьект одной таски
      var taskListLenght = taskList.length; // узнаем длину списка задач

      singleTask.todo   = inputValue;
      singleTask.status = false;  // устанавливаем значение по умолчанию "не выполнено"

      taskList[taskListLenght] = singleTask;

      showTaskList();

      localStorage.setItem('todo', JSON.stringify(taskList) );

      //очищаем поле
      document.getElementById('in').value = "";
    }
  }
  // очищаем все
  document.getElementById('clear').onclick = function(){
    clearTaskList();
    showTaskList();
  }

  // проверяем чекбокс и меняем его состояние по выбору
  function checkTask () {
    var checkbox = document.getElementsByClassName('che');
    for ( var i = 0; i < checkbox.length; i++ ) {
      taskList[i].status = checkbox[i].checked ? true : false ;
      localStorage.setItem('todo', JSON.stringify(taskList) );
    }
  }

  // вывести список задач
  function showTaskList () {

    var outTasks = '';

    // перебираем список задач
    for (var key in taskList) {

      // создаем порядковый номер для каждого таска
      var currentIndex = 'data-index="' + key + '"';

      outTasks += "<li " + currentIndex + ">";
      outTasks += taskList[key].status == true
         ? '<input type="checkbox" class="che" checked>'
         : '<input type="checkbox" class="che" >';

      //outTasks += taskList[key].todo;
      outTasks += "<input type='text' value='"+ taskList[key].todo +"'>";
      outTasks += "<span class='remove'" + currentIndex + ">х</span>"
      outTasks += "</li>";

    }

    document.getElementById('out').innerHTML = outTasks;

  }

  // удалить все таски и очистить список
  function clearTaskList () {
    localStorage.clear();
    taskList = [];
  }

  // удалить одну таску
  function removeSingleTask ( index ) {
    taskList.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(taskList) );
  }

}
