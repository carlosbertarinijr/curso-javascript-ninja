(function(win, doc){
  'use strict';
/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
  //Get(pegar) nos elementos do document, para adicionar os eventos
  var $timer = doc.querySelector('[data-js="timer"]');
  var $start = doc.querySelector('[data-js="start"]');
  var $stop = doc.querySelector('[data-js="stop"]');
  var $reset = doc.querySelector('[data-js="reset"]');
  var interval; // variavel para pegar o ID setTimeout
  //fim do GET

  //adicionando os Eventos
  $start.addEventListener('click', startTimer, false);
  $stop.addEventListener('click', stopTimer, false);
  $reset.addEventListener('click', resetTimer, false);
  //fim de Adicionar eventos

  //Funções para SET(Atribuir), os eventos que aconteceram no doc

  function startTimer(){
    $timer.value = +$timer.value + 1; //  O value o $timer é do tipo String, porém quando adiciono + antes do value automaticamente o JS  transformara em Number para podermos somar e não concatenar.
    interval = setTimeout(startTimer, 1000); // SET(atribui) a variavel interval para GET(pegar) o ID do timer
  };

  function stopTimer(){
    clearTimeout(interval);//Agora que eu GET(peguei) o ID do timer posso parar o timer, e continuar de onde parei.
  };

  function resetTimer(){
    $timer.value = 0;
    stopTimer();//como a função resetTimer é especificadamente para zerar o timer e parar o mesmo, eu não preciso duplicar o codigo de parar, eu simplismente invoco a função stopTimer após zerar o timer, excluindo  a ideia de duplicar o codigo
  };

  //fim das funções para Setar os eventos.

})(window,document);
