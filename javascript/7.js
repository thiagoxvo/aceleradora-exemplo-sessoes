$(document).ready(function() {

  //1 - Ajax
  // $('#botao').click(function() {
  //   $.ajax({
  //       url: 'http://localhost:3000'
  //     })
  //     .done(function(data) {
  //       $("#response").append(data);
  //     });
  // });

  //2 - Callbacks
  // $('#botao').click(function() {
  //   $.ajax({
  //       url: 'http://localhost:3000'
  //     })
  //     .success(function(data){
  //       console.log("Sucesso!");
  //     })
  //     .fail(function(data){
  //       console.log("Fail");
  //     })
  //     .done(function(data) {
  //       console.log("Done");
  //       $("#response").append(data);
  //     });
  // });

  //3 - Chamadas assincronas
  // $('#botao').click(function() {

  //   var primeiraRequest = $.ajax({
  //     url: 'http://localhost:3000?r=1'
  //   });

  //   var segundaRequest = $.ajax({
  //     url: 'http://localhost:3000?r=2'
  //   });

  //   primeiraRequest.done(function(data) {
  //     console.log(data);
  //   });

  //   segundaRequest.done(function(data) {
  //     console.log(data);
  //   });    
  // });

  //4 - Ordenando as respostas
  // $('#botao').click(function() {

  //   var treatResponse = function treatResponse(data) {
  //     console.log(data);
  //   };

  //   var primeiraRequest = $.ajax({
  //     url: 'http://localhost:3000?r=1'
  //   });
  //   primeiraRequest.done(treatResponse)

  //   var segundaRequest = function segundaRequest() {
  //     var segundaRequest = $.ajax({
  //       url: 'http://localhost:3000?r=2'
  //     });
  //     segundaRequest.done(treatResponse);
  //   };

  //   primeiraRequest.then(segundaRequest);

  // });

  //5 - Ordenando com jquery
  $('#botao').click(function() {
    var primeiraRequest = $.ajax({
      url: 'http://localhost:3000?r=1'
    });

    var segundaRequest = $.ajax({
      url: 'http://localhost:3000?r=2'
    });

    $.when(primeiraRequest, segundaRequest)
      .done(function(response1, response2) {
        console.log(response1);
        console.log(response2);
        alert("acabaram as 2 chamadas");
      });
  });

});