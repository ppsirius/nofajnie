$('#portfolio .box').click(slideProject);
$('.slide__text-link').click(slideProject);

function slideProject() {
  $('.project_img img').remove();
  $('.project_content').removeClass('slideOutUp');
  $('.project_content').addClass('slideInDown');
  $('.project_content').css('display', 'block');
  var clickedProject 
  if (typeof $(this).children('img').data("project") === 'string') {
    clickedProject = $(this).children('img').data("project");
  } else {
      clickedProject = $(this).data("project");
  }
  var projectName = window[clickedProject].name;
  var projectDescription = window[clickedProject].description;
  var projectUrl = window[clickedProject].url;
  $('.project_title h2').text(projectName);
  $('.project_description span').text(projectDescription);
  $.each(projectUrl, function(index, value) {
    $('.project_img').append('<img src="'+ value +'">');
  });
}

$(document).on('click', '.close', function() {
  $('.project_content').removeClass('slideInDown');
  $('.project_content').addClass('slideOutUp');
});

function Project(name, description, url) {
  this.name = name;
  this.description = description;
  this.url = url;
}

var figle = new Project('FIGLE MIGLE', 
                        'Identyfikacja wizualna przygotowana dla nowo powstałej restauracji. Kolorystyka żywa, energiczna, nowoczesne tak samo jak jedzenie :)',
                        [ 'img/projects/figle1.jpg', 'img/projects/figle2.jpg', 'img/projects/figle3.jpg', 'img/projects/figle4.jpg', 'img/projects/figle6.jpg' ] );
var azja = new Project('MUZEUM AZJI I PACYFIKU', 
                        'Identyfikacja wizualna przygotowana w ramach konkursu na logo dla Muzeum Azji i Pacyfiku.',
                        [ 'img/projects/azja1.jpg', 'img/projects/azja2.jpg', 'img/projects/azja3.jpg', 'img/projects/azja4.jpg', 'img/projects/azja5.jpg', 'img/projects/azja6.jpg', 'img/projects/azja7.jpg' ] );
var chmiel = new Project('CHMIEL FLORAL DESIGNER', 
                         'Identyfikacja wizualna przygotowana dla młodego florysty z Warszawy. Jak sam mówi "Dobrze, że kwiaty umierają, bo zdradziłyby nasze tajemnice i głęboko skrywane intencje"',
                         [ 'img/projects/chmiel1.jpg', 'img/projects/chmiel2.jpg', 'img/projects/chmiel3.jpg', 'img/projects/chmiel4.jpg', 'img/projects/chmiel5.jpg', 'img/projects/chmiel6.jpg', 'img/projects/chmiel7.jpg', 'img/projects/chmiel8.jpg' ] );          
var ilustrations = new Project('ilustracje', 
                         'Przedstawiamy Wam zbiór naszych ilustracji wektorowych. Są wśród nich trzy plakaty filmowe, kilka portretów oraz coś dla młodego odbiorcy - kartony, para z londoardami',
                         [ 'img/projects/ilu1.jpg', 'img/projects/ilu2.jpg', 'img/projects/ilu3.jpg', 'img/projects/ilu4.jpg', 'img/projects/ilu5.jpg', 'img/projects/ilu6.jpg', 'img/projects/ilu7.jpg', 'img/projects/ilu8.jpg', 'img/projects/ilu9.jpg', 'img/projects/ilu10.jpg', 'img/projects/ilu11.jpg', 'img/projects/ilu12.jpg' ] );          
var flowers = new Project('FLOWERS', 
                         'Kolejne ilustracje. Tym razem motywem przewodnim są kwiaty w rozmaitych warjacjach w połączeniu z ładną typografią. Kolory bardzo fajnie dobrane. Wszytko to daje nam spójną koncepcję.',
                         [ 'img/projects/flowers1.jpg', 'img/projects/flowers2.jpg', 'img/projects/flowers3.jpg', 'img/projects/flowers4.jpg', 'img/projects/flowers5.jpg', 'img/projects/flowers6.jpg' ] );          
var pegaz = new Project('PEGAZ', 
                         'Okładka płyty zaprojektowana dla Leny Romul. „Pegaz” to album przestrzenny, mieszający brzmienie elektroniki i jazzu, pulsujące w soulowym rytmie. Wszystkie teksty są w języku polskim, autorstwa Leny, podobnie jak muzyka zawarta na krążku.',
                         [ 'img/projects/pegaz1.jpg', 'img/projects/pegaz2.jpg', 'img/projects/pegaz3.jpg', 'img/projects/pegaz4.jpg', 'img/projects/pegaz5.jpg' ] );          
var corner = new Project('PERFECT CORNER', 
                         'Identyfikacja wizualna przygotowana dla Developera z Warszawy. Znak łączy bryłę budynku oraz pierwsze litery nazwy inwestycji. Kolorystyka odważna, skierowana do młodego klienta.',
                         [ 'img/projects/perfect1.jpg', 'img/projects/perfect2.jpg', 'img/projects/perfect3.jpg', 'img/projects/perfect4.jpg' ] );          
var mice = new Project('MICE', 
                         'Identyfikacja wizualna przygotowana dla Developera z Warszawy.',
                         [ 'img/projects/mice1.jpg', 'img/projects/mice2.jpg', 'img/projects/mice3.jpg', 'img/projects/mice4.jpg' ] );          



//show menu

$('.menu').click(showMenu);

function showMenu() {
  $('.menu_content').css("display", "block" );
  $('.menu_content').addClass('animated slideInDown')
  $('.menu_content').removeClass('slideOutUp');
}

$(document).on('click', '.close_menu', function() {
  $('.menu_content').addClass('slideOutUp');
  $('.menu_content').removeClass('slideInDown');
});

$(document).on('click', 'nav a', function() {
  $('.menu_content').addClass('slideOutUp');
  $('.menu_content').removeClass('slideInDown');
});



$('#portfolio .box').mouseenter(function(){
    $(this).children(".portfolio_project").fadeToggle('fast');
}).mouseleave(function(){
    $(this).children(".portfolio_project").fadeToggle('fast');
});