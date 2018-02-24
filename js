var frases = [
  'Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.  -  William Shakespare',
   'Este CD-ROM pode conter mais informação do que todo estes papéis abaixo de mim - Bill Gates, 1994',
    'A pior coisa que eu posso ser é igual a todo mundo. Eu odeio isso. - Arnold Schwarzenegger',
     'Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir. - Steve Jobs ',
      'A História é um conjunto de mentiras sobre as quais se chegou a um acordo. - Napoleão Bonaparte ',
      'Ações não valem menos por não serem elogiadas. - Aragorn (Senhor dos anéis)',
      'Você tem inimigos? Bom. Significa que você brigou por algo, alguma vez na vida. - Winston Churchill ',
      'Um pouco de filosofia inclina a mente humana para o ateísmo, mas o aprofundamento na filosofia reaproxima a mente humana da religião - Francis Bacon',
      'Na maioria das vezes, a diferença entre vencer e perder consiste em não desistir. - Walt Disney',
      'Todo mundo é um gênio. Mas, se você julgar um peixe por sua capacidade de subir em uma árvore, ela vai gastar toda a sua vida acreditando que ele é estúpido. - Albert Einstein'

];

 var fundo= [
 "http://www.designbolts.com/wp-content/uploads/2014/03/Marron-Mixed-High-resolution-blurr-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Light-HD-Background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Multi-color-blur-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Light-Blue-blur-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Yellow-blur-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Bright-Blue1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Purple-Blur-Background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Blue-Blur-Background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/Sea-green-blur-background1.jpg", "http://www.designbolts.com/wp-content/uploads/2014/03/best-blurred-background-wallpaper1.jpg"
 ]


function novafrase() {

//Muda a frase sempre que a função é chamada
var aleatorio = Math.floor(Math.random() * (frases.length));
document.getElementById('frase').innerHTML = frases[aleatorio];

//muda a imagem do background sempre que a função é chamada
var i = Math.floor((Math.random() * (fundo.length)));
document.body.style.backgroundImage = "url('"+fundo[i]+"')";

 //muda a imagem no div da direita de acordo com a frase
  if (frases[aleatorio] == frases[1]) {
  document.getElementById('right').style.background = "url('http://i.imgur.com/vu0S20q.png')";
}

  if (frases[aleatorio] == frases[0]) {
  document.getElementById('right').style.background = "url('http://2.bp.blogspot.com/-8vz5_F7bIcg/UojjX8LCD7I/AAAAAAAAAFA/13kcbP4njsw/s1600/1314818_640px.jpg')";
}

    if (frases[aleatorio] == frases[2]) {
  document.getElementById('right').style.background = "url('http://www.2createabody.com/images/arnold-schwarzenegger.jpg')";
}

      if (frases[aleatorio] == frases[3]) {
  document.getElementById('right').style.background = "url('http://www.fubiz.net/wp-content/uploads/2017/02/blackandwhitecandidportraits3-900x600.jpg')";
}

        if (frases[aleatorio] == frases[4]) {
  document.getElementById('right').style.background = "url('https://vilavinifera.files.wordpress.com/2017/05/napoleao-bonaparte-e-sabre.jpg')";
}

if (frases[aleatorio] == frases[5]) {
document.getElementById('right').style.background = "url('https://vignette2.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg/revision/latest?cb=20170121121423')";
}

if (frases[aleatorio] == frases[6]) {
document.getElementById('right').style.background = "url('http://www.infoescola.com/wp-content/uploads/2008/07/winston-churchill.jpg')";
}

if (frases[aleatorio] == frases[7]) {
document.getElementById('right').style.background = "url('http://www.newsbeast.gr/files/1/2014/12/15/pzzelssezez/sceencggssowes4.jpg')";
}

if (frases[aleatorio] == frases[8]) {
document.getElementById('right').style.background = "url('https://vignette.wikia.nocookie.net/disney/images/e/e5/Walt_Disney_2.jpg/revision/latest?cb=20170715055910')";
}

if (frases[aleatorio] == frases[9]) {
document.getElementById('right').style.background = "url('http://physicsdatabase.com/wp-content/uploads/2014/06/Albert-Einstein-by-Yousuf-Karsh-1.jpg')";
}




}


//$('#tweetBtn').on('click', function() {
  //tweet();
//});

function tweetIt() {
  var phrase = document.getElementById('frase').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    phrase +
    '.' +
    'via @leojunioyuri';
    window.open(tweetUrl);
}

