 $(document).ready(function () {

     $("#nome-heroi").focus();

     //Ajax para listar os Heróis
     $.ajax({
         type: "GET",
         url: "https://api-loc-rafaeel16.c9users.io/api/heroes",
         success: function (data) {
             $.each(data, function (i, item) {
                  console.log("Nome: " + item.name + " - Icone: " + item.icon);
             });
         },
         error: function (e) {
             alert("Erro: " + e);
         }

     });
 });


 //Função Ajax para cadastrar o herói
 function CadastraHeroi() {
     var name = $("#nome-heroi").val();
     var icon = $("#nome-icone").val();
     $.ajax({
         type: "POST",
         data: {
             "name": name,
             "icon": icon
         },
         url: "https://api-loc-rafaeel16.c9users.io/api/heroes",
         success: function (data) {
             console.log("Herói Cadastrado com sucesso.");

             $("#nome-heroi").val("")
             $("#nome-icone").val("");

             window.location.reload();
         },
         error: function (e) {
             alert("Erro: " + e);
         }
     });
 }

 // Captura o ENTER para executar a função de Cadastrar o Herói
 $(document).keypress(function (e) {
     if (e.which == 13) {
         CadastraHeroi();
     }
 });