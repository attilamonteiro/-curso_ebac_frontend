$(document).ready(function() {
    // Função para adicionar tarefa à lista
    $("#addTaskForm").submit(function(event) {
      event.preventDefault();
      var taskName = $("#taskName").val();
      if (taskName.trim() !== "") {
        $("#taskList").append("<li>" + taskName + "</li>");
        $("#taskName").val(""); // Limpa o campo após adicionar a tarefa
      }
    });
  
    // Função para aplicar estilo quando um item da lista é clicado
    $("#taskList").on("click", "li", function() {
      $(this).toggleClass("completed");
    });
  });
  