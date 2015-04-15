$('.box img').click(slideProject);
$('.slide__text-link').click(slideProject);

function slideProject() {
  $('.box img').after('<div class="project_content animated slideInDown"><div class="close"><img src="img/icon.svg#cross" title="Close"></div><div class="content"><div class="project_title"></div><div class="project_description"></div><div class="project_img"></div></div></div>');
  var clickedProject = $(this).data("project");
  var projectName = window[clickedProject].name;
  var projectDescription = window[clickedProject].description;
  var projectUrl = window[clickedProject].url;
  $('.project_title').append('<h2>'+ projectName +'</h2>');
  $('.project_description').append('<span>'+ projectDescription +'</span>');
  $.each(projectUrl, function(index, value) {
    $('.project_img').append('<img src="'+ value +'">');
  });
}

$(document).on('click', '.close', function() {
  $('.project_content').addClass('slideOutUp');
  setTimeout(function(){$('.project_content').remove()},1000);
});

function Project(name, description, url) {
  this.name = name;
  this.description = description;
  this.url = url;
}

var figle = new Project('Figle Migle', 
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                        [ 'img/figle1.jpg' ] );
var migle = new Project('Migle', 
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                        [ 'img/figle1.jpg' ] );
           