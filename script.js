//NAVBAR
$(document).ready(function() {

    // import view port library function
    jQuery.extend(verge);
  
    // smooth scrolling of viewport to target
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 50
      }, 900);
    });
  
    $('#down').click(function() {
      $('html,body').animate({
        scrollTop: $('#about').offset().top - 50
      }, 900);
    });
  
    var currentTime = new Date();
    var year = currentTime.getFullYear();
  
    // data for the portfolio cards front and back
    var projectData = [{
        title: 'Quotes',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-build-a-random-quote-machine" target="_blank"><i>Build a Random Quote Machine</i></a>. The user is able to show a new random quote and send that quote to Twitter. <strong>Quotes</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Graphics Editor:</strong> Gimp, pixlr.com<br> <strong>Images:</strong> lorempixel.com<br> <strong>Fonts:</strong> Font-awesome<br> <strong>Data:</strong> random famous quotes API',
  
        image: ['http://2am.ninja/img/quotes.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/full/dojjre'],
          ['Live Site', 'fa-link', 'http://2am.ninja/quotes/']
        ]
      }, {
        title: 'Twitch TV',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-use-the-twitchtv-json-api" target="_blank"><i>Use the Twitchtv JSON API</i></a>. A user can see if Free Code Camp is currently streaming on Twitch.tv.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Fonts:</strong> Ubuntu Mono<br> <strong>Data:</strong> Twitchtv API',
  
        image: ['http://2am.ninja/img/twitch3.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/full/jrEBgq']
    //      ,['Live Site', 'fa-link', 'http://2am.ninja/twitch/']
        ]
      }, {
        title: 'Wiki Search',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-build-a-wikipedia-viewer" target="_blank"><i>Build a Wikipedia Viewer</i></a>. A user can search Wikipedia entries in a search box and see the resulting Wikipedia entries.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Graphics Editor:</strong> pixlr.com<br> <strong>Images:</strong> unsplash.com<br> <strong>Data:</strong> Wikipedia API',
  
        image: ['http://2am.ninja/img/wiki.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/full/rVRwor']
        ]
      }, {
        title: 'Pomodoro Timer',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-build-a-pomodoro-clock" target="_blank"><i>Build a Pomodoro Clock</i></a>. A user can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed. <strong>Pomodoro Timer</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, HTML5 Canvas, CSS3, Javascript, jQuery, ion.sound<br> <strong>Layout:</strong> Bootstrap, HTML5 Canvas<br> <strong>Fonts:</strong> IcoMoon',
  
        image: ['http://2am.ninja/img/timer.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/full/WvVZyM'],
          ['Live Site', 'fa-link', 'http://2am.ninja/timer/']
        ]
      }, {
        title: 'Local Weather',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-show-the-local-weather" target="_blank"><i>Show the Local Weather</i></a>. A user can see the weather in my current location.. <strong>Local Weather</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Images:</strong> flickr.com<br> <strong>Fonts:</strong> Climacons, Open Sans<br> <strong>Data:</strong> Open Weather Map API, IP-API.com Geolocation API',
  
        image: ['http://2am.ninja/img/weather.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://codepen.io/MutantSpore/full/oXaoxb/']
        ]
      },
      /*                    
                          {
           title: 'Camper News',
           text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-stylize-stories-on-camper-news" target="_blank"><i>Stylize Stories on Camper News</i></a>. The user can browse recent posts from Camper News.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap, Masonary<br> <strong>Graphics Editor:</strong> Gimp, pixlr.com<br> <strong>Images:</strong> unsplash.com<br>  <strong>Data:</strong> Free Code Camp news API',
  
           image: ['http://2am.ninja/img/news.jpg'],
           site: [
             ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/debug/vOvBqY']
           ]
         }, 
       */
      {
        title: 'Bar Graph',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart" target="_blank"><i>Visualize Data with a Bar Chart </i></a>. The user can see US Gross Domestic Product by quarter, over time, with a mouse over tooltip.</p> <strong>Code:</strong> HTML5, CSS3, D3, SVG, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap',
  
        image: ['http://2am.ninja/img/bar-graph.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/full/PNJMpg']
        ]
      }, {
        title: 'Heat Map',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/visualize-data-with-a-heat-map" target="_blank"><i>Visualize Data with a Heat Map</i></a>. The user can view a heat map with data represented both on the Y and X axis, with mouse over tooltip.</p> <strong>Code:</strong> HTML5, CSS3, D3, SVG, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap',
  
        image: ['http://2am.ninja/img/heat-map.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/full/VeKNEa']
        ]
      },
      /*                 
                       {
        title: 'Force Graph',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/show-relationships-with-a-force-directed-graph" target="_blank"><i>Show Relationships with a Force Directed Graph</i></a>. The user can see a Force-directed Graph that shows which campers are posting links on Camper News to which domains.</p> <strong>Code:</strong> HTML5, CSS3, D3, SVG, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br>  <strong>Data:</strong> Free Code Camp news API',
  
        image: ['http://2am.ninja/img/force-graph.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/debug/KVdbMO']
        ]
      }, 
      
      */
      {
        title: 'Tic-Tac-Toe',
        text: '<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game" target="_blank"><i>Build a Tic Tac Toe Game</i></a>. The user can play a game of Tic Tac Toe with the computer.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Materialize.css',
  
        image: ['http://2am.ninja/img/ttt.jpg'],
        site: [
          ['CodePen', 'fa-codepen', 'https://s.codepen.io/MutantSpore/full/jWWYLo']
        ]
      }
    ];
  
    // add listener to all the cards for click flipping
    function addListener() {
      var cards = document.querySelectorAll(".card.effect_click");
  
      for (var i = 0; i < cards.length; i++) {
        clickListener(cards[i]);
      }
  
      function clickListener(card) {
        card.addEventListener("click", function() {
          this.classList.toggle("flipped");
        });
      }
    }
  
    // create, populate and show portfolio project cards
    function showProjectCards() {
      var html = '';
  
      projectData.forEach(function(project) {
        html += '<div class="col-sm-6 col-md-4">';
        html += '<div class="card effect_click"><div class="card_front">';
        html += '<figure><img class="img-responsive" src="' + project.image[0] + '">';
        html += '<figcaption class="project-title">';
        html += project.title;
        html += '</figcaption></figure></div>';
  
        html += '<div class="card_back"><figure>';
        html += '<div class="project-title">' + project.title + '</div>';
        html += '<figcaption">';
        html += '<div class="project-body">' + project.text + '</div>';
        html += '<div><a data-toggle="tooltip" title="' + project.site[0][0] + '" data-placement="top" href="' + project.site[0][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' + project.site[0][1] + '" aria-hidden="true"></i></a>';
  
        if (typeof project.site[1] !== 'undefined') {
          html += '<a data-toggle="tooltip" title="' + project.site[1][0] + '" data-placement="top" href="' + project.site[1][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' + project.site[1][1] + '" aria-hidden="true"></i></a>';
        }
  
        html += '</div></figcaption></figure></div>';
        html += '</div>';
        html += '</div>';
      });
  
      $('#theProjects').append(html);
      addListener();
    }
  
    showProjectCards();
    $(".copyright").append("<span>© " + year + " Bruce Young. All rights reserved</span>");
  
    // turn on bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();
  
  });

//TEXT ROTATE
jQuery(document).ready(function($){
//set animation timing
var animationDelay = 800,
    //loading bar effect
    barAnimationDelay = 50,
    barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect
    lettersDelay = 50,
    //type effect
    typeLettersDelay = 150,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    //clip effect 
    revealDuration = 600,
    revealAnimationDelay = 2000;

initHeadline();


function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($('.box-headline.letters').find('b'));
    //initialise headline animation
    animateHeadline($('.box-headline'));
}

function singleLetters($words) {
    $words.each(function(){
        var word = $(this),
            letters = word.text().split(''),
            selected = word.hasClass('is-visible');
        for (i in letters) {
            if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
            letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
        }
        var newLetters = letters.join('');
        word.html(newLetters).css('opacity', 1);
    });
}

function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function(){
        var headline = $(this);
        
        if(headline.hasClass('loading-bar')) {
            duration = barAnimationDelay;
            setTimeout(function(){ headline.find('.box-words-wrapper').addClass('is-loading') }, barWaiting);
        } else if (headline.hasClass('clip')){
            var spanWrapper = headline.find('.box-words-wrapper'),
                newWidth = spanWrapper.width() + 10
            spanWrapper.css('width', newWidth);
        } else if (!headline.hasClass('type') ) {
            //assign to .box-words-wrapper the width of its longest word
            var words = headline.find('.box-words-wrapper b'),
                width = 0;
            words.each(function(){
                var wordWidth = $(this).width();
                if (wordWidth > width) width = wordWidth;
            });
            headline.find('.box-words-wrapper').css('width', width);
        };

        //trigger animation
        setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
    });
}

function hideWord($word) {
    var nextWord = takeNext($word);
    
    if($word.parents('.box-headline').hasClass('type')) {
        var parentSpan = $word.parent('.box-words-wrapper');
        parentSpan.addClass('selected').removeClass('waiting');	
        setTimeout(function(){ 
            parentSpan.removeClass('selected'); 
            $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
        }, selectionDuration);
        setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
    
    } else if($word.parents('.box-headline').hasClass('letters')) {
        var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
        hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
        showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

    }  else if($word.parents('.box-headline').hasClass('clip')) {
        $word.parents('.box-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
            switchWord($word, nextWord);
            showWord(nextWord);
        });

    } else if ($word.parents('.box-headline').hasClass('loading-bar')){
        $word.parents('.box-words-wrapper').removeClass('is-loading');
        switchWord($word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
        setTimeout(function(){ $word.parents('.box-words-wrapper').addClass('is-loading') }, barWaiting);

    } else {
        switchWord($word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, animationDelay);
    }
}

function showWord($word, $duration) {
    if($word.parents('.box-headline').hasClass('type')) {
        showLetter($word.find('i').eq(0), $word, false, $duration);
        $word.addClass('is-visible').removeClass('is-hidden');

    }  else if($word.parents('.box-headline').hasClass('clip')) {
        $word.parents('.box-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
            setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
        });
    }
}

function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');
    
    if(!$letter.is(':last-child')) {
        setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
    } else if($bool) { 
        setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
    }

    if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
    } 
}

function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');
    
    if(!$letter.is(':last-child')) { 
        setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
    } else { 
        if($word.parents('.box-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.box-words-wrapper').addClass('waiting'); }, 200);}
        if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
    }
}

function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
}

function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
}
});

jQuery(document).ready(function($){
//set animation timing
var animationDelay = 5000,
    //loading bar effect
    barAnimationDelay = 2000,
    barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect
    lettersDelay = 50,
    //type effect
    typeLettersDelay = 150,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    //clip effect
    revealDuration = 600,
    revealAnimationDelay = 1200;

initHeadline();


function initHeadline() {
//insert <i> element for each letter of a changing word
singleLetters($('.cd-headline.letters').find('b'));
//initialise headline animation
animateHeadline($('.cd-headline'));
}

function singleLetters($words) {
$words.each(function(){
    var word = $(this),
        letters = word.text().split(''),
        selected = word.hasClass('is-visible');
    for (i in letters) {
    if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
    letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
    }
    var newLetters = letters.join('');
    word.html(newLetters).css('opacity', 1);
});
}

function animateHeadline($headlines) {
var duration = animationDelay;
$headlines.each(function(){
    var headline = $(this);

    if(headline.hasClass('loading-bar')) {
    duration = barAnimationDelay;
    setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
    } else if (headline.hasClass('clip')){
    var spanWrapper = headline.find('.cd-words-wrapper'),
        newWidth = spanWrapper.width() + 10
    spanWrapper.css('width', newWidth);
    } else if (!headline.hasClass('type') ) {
    //assign to .cd-words-wrapper the width of its longest word
    var words = headline.find('.cd-words-wrapper b'),
        width = 0;
    words.each(function(){
        var wordWidth = $(this).width();
        if (wordWidth > width) width = wordWidth;
    });
    headline.find('.cd-words-wrapper').css('width', width);
    };

    //trigger animation
    setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
});
}

function hideWord($word) {
var nextWord = takeNext($word);

if($word.parents('.cd-headline').hasClass('type')) {
    var parentSpan = $word.parent('.cd-words-wrapper');
    parentSpan.addClass('selected').removeClass('waiting');
    setTimeout(function(){
    parentSpan.removeClass('selected');
    $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
    }, selectionDuration);
    setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

} else if($word.parents('.cd-headline').hasClass('letters')) {
    var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
    hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
    showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

}  else if($word.parents('.cd-headline').hasClass('clip')) {
    $word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
    switchWord($word, nextWord);
    showWord(nextWord);
    });

} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
    $word.parents('.cd-words-wrapper').removeClass('is-loading');
    switchWord($word, nextWord);
    setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
    setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

} else {
    switchWord($word, nextWord);
    setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}
}

function showWord($word, $duration) {
if($word.parents('.cd-headline').hasClass('type')) {
    showLetter($word.find('i').eq(0), $word, false, $duration);
    $word.addClass('is-visible').removeClass('is-hidden');

}  else if($word.parents('.cd-headline').hasClass('clip')) {
    $word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
    setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
    });
}
}

function hideLetter($letter, $word, $bool, $duration) {
$letter.removeClass('in').addClass('out');

if(!$letter.is(':last-child')) {
    setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
} else if($bool) {
    setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
}

if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
    var nextWord = takeNext($word);
    switchWord($word, nextWord);
}
}

function showLetter($letter, $word, $bool, $duration) {
$letter.addClass('in').removeClass('out');

if(!$letter.is(':last-child')) {
    setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
} else {
    if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
    if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
}
}

function takeNext($word) {
return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function takePrev($word) {
return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
}

function switchWord($oldWord, $newWord) {
$oldWord.removeClass('is-visible').addClass('is-hidden');
$newWord.removeClass('is-hidden').addClass('is-visible');
}
});


//MEET THE TEAM
$(function(){
    $('.profile_container').on('click', function(e){
      var $biginfo = $('#teamcontent');
      var $bigname = $('#bigname');
      var $bigjob  = $('#bigjob');
      var $bigdesc = $('#bigdesc');
      var $bigimg  = $('.bigimg');  
      
      var newimg  = $(this).find('.profilepic').attr('src');
      var newname = $(this).find('.profilepic').attr('alt');
      var newrole = $(this).siblings('.job').eq(0).html();
      var newdesc = $(this).siblings('.desc').eq(0).html();
      
      $bigimg.css('background-image', "url(" + newimg + ")");
      $bigname.html(newname);
      $bigjob.html(newrole);
      $bigdesc.html(newdesc);
      
      if($biginfo.css('display') == 'none') {
        $biginfo.slideDown(350);
      }
        
      $('html, body').animate({ scrollTop: $('.team_box').offset().top }, 'slow');  
    });
  });
      
  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
          
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });


//LOGIN PAGE
function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="#da0037";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#da0037";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }
  

// BACK TO TOP 
(function($) { "use strict";

	$(document).ready(function(){"use strict";
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery);  


//animate login bg
/*
 *Animates connected nodes about a grid
 *-------------------------------------  
 *@date:      19th April, 2020  
 */  
//set up the gridworm
class GridWorm
{ 
    constructor(point,interval,pointsList,screenWidth,screenHeight)
    {      
        this.radius  = 2;     
        this.xCoord  = point.x; 
        this.yCoord  = point.y; 
        this.interval= interval;
        this.color = this.getColor(1,true);//get random color object
        this.mainColor = this.color.color;//color of the head and body of the girdworm
        this.mainColorIndex = this.color.index;
        this.nColor = this.getColor(1,true);//get another random color object
        this.arrowHeadColor = this.nColor.color;//color of the arrrow points at the head of the gridworm
        this.arrowHeadColorIndex = this.nColor.index; 
        this.pointsList = pointsList;  
        this.screenWidth = screenWidth; 
        this.screenHeight= screenHeight; 
        this.speed   = 5;//the magnitude of the velocity
        this.velocity= this.getVelocity(); 
        this.junctionMemory = [{point:point,velocity:this.velocity}];//memory of each junction visited(helps to construct the worm)
        //the maximum number of junctions a gridworm can keep in memory(this determines how long the gridworm will be)
        this.junctionMemoryLength = 6; 
    } 
    getColor(opacity,isRandom = true,index = 0) 
    { 
        if(opacity < 0 || opacity > 1 || opacity === null || isNaN(opacity))//if opacity is incorrect
        {
            opacity = 1; 
        }
        var colors = 
        [
            `rgba(0,0,0,${opacity})`,`rgba(192,192,192,${opacity})`/*silver*/,`rgba(128,128,128,${opacity})`/*gray*/,`rgba(128,0,0,${opacity})`/*maroon*/,
            `rgba(255,0,0,${opacity})`/*red*/,`rgba(0,255,0,${opacity})`/*lime*/,`rgba(0,0,255,${opacity})`/*blue*/,`rgba(255,0,255,${opacity})`/*fuchsia*/,
            `rgba(128,128,0,${opacity})`/*olive*/,`rgba(0,128,0,${opacity})`/*green*/,`rgba(128,0,128,${opacity})`/*purple*/,
            `rgba(0,128,128,${opacity})`/*teal*/,`rgba(0,0,128,${opacity})`/*navy*/,`rgba(138,57,0,${opacity})`/*brown*/, `rgba(205,133,63,${opacity})`, 
            `rgba(244,164,96,${opacity})`,`rgba(139,105,30,${opacity})`,`rgba(165,42,42,${opacity})`,`rgba(178,34,34,${opacity})`,
            `rgba(220,20,60,${opacity})`,`rgba(255,140,0,${opacity})`,`rgba(255,165,0,${opacity})`,`rgba(255,215,0,${opacity})`,`rgba(184,134,11,${opacity})`,
            `rgba(218,165,32,${opacity})`,`rgba(218,165,32,${opacity})`,`rgba(238,232,170,${opacity})`,`rgba(189,183,107,${opacity})`,`rgba(240,230,140,${opacity})`,  
            `rgba(0,100,0,${opacity})`, `rgba(34,139,34,${opacity})`,`rgba(32,178,170,${opacity})`,`rgba(47,79,79,${opacity})`, 
            `rgba(0,139,139,${opacity})`,`rgba(95,158,160,${opacity})`,`rgba(70,130,180,${opacity})`,`rgba(25,25,112,${opacity})`,
            `rgba(0,0,128,${opacity})`,`rgba(0,0,139,${opacity})`,`rgba(72,61,139,${opacity})`,`rgba(75,0,130,${opacity})`,`rgba(139,0,139,${opacity})`, 
            `rgba(0,0,0,${opacity})`,`rgba(105,105,105,${opacity})`, `rgba(169,169,169,${opacity})` 
        ];
        if(isRandom)
        {
            let index = Math.floor(this.getRandomNumber(0,colors.length-1)); 
            let color = colors[index];
            return {color:color,index:index}; 
        }
        else//if specific
        {
            if(index >=0 && index < colors.length)
            {
                return colors[index];
            } 
            return colors[0];
        } 
    }
    getVelocity() 
    {
        let x,y;
        //flip a coin to decide if gridworm moves vertically or horizontally
        if( Math.random() > 0.5)//if gridworm moves vertically
        {
            x = 0;//no horizontal movement
            y = Math.random() > 0.5? -this.speed: this.speed;//flip a coin to decide if gridworm moves upwards or downwards
        }
        else//if gridworm moves horizontally
        {
            x = Math.random() > 0.5? -this.speed: this.speed;//flip a coin to decide if gridworm moves left or right
            y = 0;//no vertical movement
        } 
        return {x:x, y:y};
    }
    /**
    * Returns a random number between min (inclusive) and max (exclusive)
    * @param  {number} min The lesser of the two numbers. 
    * @param  {number} max The greater of the two numbers.  
    * @return {number} A random number between min (inclusive) and max (exclusive)
    */
    getRandomNumber(min, max) 
    {
        return Math.random() * (max - min) + min;
    }
    drawCircle(x,y,circleradius,ctx,colorIndex) 
    {
        for(let i = 0; i < 3; i++)
        {
            let color   = '';  
            let radius = 0; 
            switch(i)//create three circles with same center
            {
                case 0: 
                    radius  =circleradius;//smallest circle
                    color   = this.getColor(1,false,colorIndex); 
                    break; 
                case 1: 
                    radius  =circleradius *   2;//bigger circle 
                    color   = this.getColor(0.5,false,colorIndex);             
                    break; 
                case 2: 
                    radius  =circleradius *   6;//biggest circle 
                    color   = this.getColor(0.2,false,colorIndex); 
                    break; 
            }
            //draw the node
            ctx.beginPath(); 
            ctx.arc(x,y,radius,0,2*Math.PI);
            ctx.fillStyle = color; 
            ctx.fill(); 
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
    drawArrowHead(x,y,circleradius,ctx,colorIndex) 
    { 
        let points = [];  
        if(this.velocity.x === 0)//if gridworm is moving vertically
        {
            if(this.velocity.y > 0)//if gridworm is moving down
            {
                points.push({x:x+this.interval/3,y:y});//point to the right
                points.push({x:x-this.interval/3,y:y});//point to the left 
                points.push({x:x,y:y+this.interval/3});//point below 
            }
            else//if gridworm is moving up
            {
                points.push({x:x+this.interval/3,y:y});//point to the right
                points.push({x:x-this.interval/3,y:y});//point to the left
                points.push({x:x,y:y-this.interval/3});//point above  
            }
        }
        else//if gridworm is moving horizontally
        {
            if(this.velocity.x > 0)//if gridworm is moving right
            {
                points.push({x:x+this.interval/3,y:y});//point to the right 
                points.push({x:x,y:y-this.interval/3});//point above
                points.push({x:x,y:y+this.interval/3});//point below 
            }
            else//if gridworm is moving left
            {     
                points.push({x:x-this.interval/3,y:y});//point to the left
                points.push({x:x,y:y-this.interval/3});//point above
                points.push({x:x,y:y+this.interval/3});//point below 
            }
        }
        //draw a circle about the points that make the arrow head
        for(let i = 0; i < points.length;i++)
        {
            let point = points[i];
            this.drawCircle(point.x,point.y,circleradius/2,ctx,colorIndex); 
        } 
        this.drawTriangle(points[0],points[1],points[2],ctx);//draw the arrow head 
    }
    drawTriangle(point1,point2,point3,ctx)
    {
        ctx.beginPath();
        ctx.moveTo(point1.x, point1.y);
        ctx.lineTo(point2.x, point2.y);
        ctx.lineTo(point3.x, point3.y);  
        ctx.fillStyle = 'rgba(0,0,0,0.1)';//transparent black  
        ctx.fill();   
    }
    draw(ctx)
    {    
        //draw the head of the gridworm 
        this.drawCircle(this.xCoord,this.yCoord,this.radius/2,ctx,this.mainColorIndex); 
        this.drawArrowHead(this.xCoord,this.yCoord,this.radius/2,ctx,this.arrowHeadColorIndex); 
        //draw circles and squares at every visited junctions in the gridworm's memory(not RAM)
        for(let i = 0; i < this.junctionMemory.length; i++)
        {   
            let junction = this.junctionMemory[this.junctionMemory.length -(i+1)];
            //draw a circle at each junction point
            this.drawCircle(junction.point.x, junction.point.y,this.radius/2,ctx,this.mainColorIndex);  
            //draw painted squares at every junction point
            ctx.fillStyle   = this.getColor(0.1,false,this.mainColorIndex); 
            ctx.fillRect(junction.point.x,junction.point.y,this.interval,this.interval);
            
        } 
        //draw the line connecting head to body
        ctx.strokeStyle = 'black';
        ctx.lineWidth = this.radius; 
        ctx.beginPath(); 
        ctx.moveTo(this.xCoord,this.yCoord); 
        //draw a line to link all the visited junctions in the gridworm's memory(not RAM)
        for(let i = 0; i < this.junctionMemory.length; i++)
        {   //starting from the most recent to the least recent(LIFO)[NB: more like a stack data structure]
            let junction = this.junctionMemory[this.junctionMemory.length -(i+1)]; 
            ctx.lineTo(junction.point.x, junction.point.y);   
        } 
        ctx.stroke(); 
        ctx.closePath(); 
    } 
    update(deltaTime)
    {       
        this.junctionMemoryLength = this.junctionMemoryLength < 1? 1: this.junctionMemoryLength; 
        //keep the gridworm moving in its current direction  
        this.xCoord += this.velocity.x;//if gridworm is going left or right, keep it going
        this.yCoord += this.velocity.y;//if gridworm is going up or down, keep it going   
        if(this.xCoord <= this.interval)//if gridworm reaches the leftmost point 
        {
            this.xCoord = this.interval;
            this.velocity.x  = -this.velocity.x;//move right 
            this.xCoord += this.velocity.x * 3;//nudge it a bit away from the edge
        }
        if(this.xCoord >= this.screenWidth - this.interval)//if gridworm reaches the rightmost point
        {
            this.xCoord = this.junctionMemory[this.junctionMemory.length-1].point.x; 
            this.velocity.x  = -this.velocity.x;//move left 
            this.xCoord += this.velocity.x * 3;//nudge it a bit away from the edge
        }
        if(this.yCoord <= this.interval)//if gridworm reaches the topmost most point
        {
            this.yCoord  = this.interval; 
            this.velocity.y  = -this.velocity.y; //move down
            this.yCoord  += this.velocity.y * 3;//nudge it a bit away from the edge
        }
        if(this.yCoord >= this.screenHeight - this.interval)//if gridworm reaches the lowest point) 
        {
            this.yCoord  = this.junctionMemory[this.junctionMemory.length-1].point.y; 
            this.velocity.y  = -this.velocity.y;//move up
            this.yCoord  += this.velocity.y * 4;//nudge it a bit away from the edge
        }
        let currentCoord    = {x:this.xCoord,y:this.yCoord}; 
        let latestJunction  = this.getJunctionReached(currentCoord); 
        if(latestJunction !== currentCoord)
        {   
            let originalVelocity = this.velocity; 
            let newVelocity = this.getVelocity();//flip a coin to decide to move up and down or right and left  
            if(originalVelocity.y === 0 )//if gridworm is moving horizontally
            {
                this.velocity = newVelocity;
                if(newVelocity.y === 0 && newVelocity.x === -originalVelocity.x )//if it continues the horizontal movement in the opposite direction
                {
                    //don't add the new junction to the memory queue
                }
                else 
                {
                    let memory = {point:latestJunction,velocity:this.velocity}; 
                    if(!this.isInMemory(memory))
                    {
                        this.junctionMemory.push(memory);//add new memory to the queue
                    }
                    //this.junctionMemory.push({point:latestJunction,velocity:this.velocity});//add new memory to the queue
                }
                //nudge it a bit away from the junction
                this.xCoord += this.velocity.x * 3; //not complete yet. Don't make it too much or too little.  
            }
            else //if gridworm is moving vertically 
            {
                this.velocity = newVelocity;
                if(newVelocity.x === 0 && newVelocity.y === -originalVelocity.y )//if it continues the verticalal movement in the opposite direction
                {
                    //don't add the new junction to the memory queue
                }
                else 
                {
                    let memory = {point:latestJunction,velocity:this.velocity}; 
                    if(!this.isInMemory(memory))
                    {
                        this.junctionMemory.push(memory);//add new memory to the queue
                    } 
                }
                //nudge it a bit away from the junction
                this.yCoord += this.velocity.y * 3; //not complete yet. Don't make it too much or too little. 
            } 
        }
        if(this.junctionMemory.length > this.junctionMemoryLength)//if memory is too long
        {
            this.junctionMemory.shift();//remove the first memory
        } 
    }  
    isInMemory(memory)//check if a junction is in memory
    { 
        this.junctionMemory.some(function(mem)
        {
            if(mem.point === memory.point)
            { 
                return true;//junction is in memory
            }
            return mem.point === memory.point; 
        }); 
        return false;//junction is NOT in memory
    }
    getJunctionReached(currentCoord)
    {
        for(let i = 0; i < this.pointsList.length; i++)
        {
            let point = this.pointsList[i];
            //if point(junction) is too far away, ignore it 
            if(Math.abs(currentCoord.x - point.x) > (2 * this.interval) || Math.abs(currentCoord.y - point.y) > (2 *this.interval) )
            {
                continue; 
            }
            let distance = this.getDistance(currentCoord,point);  
            if(distance <= (this.radius))//if gridworm head is close enough to a junction
            {  
                return point;  
            }
        } 
        return currentCoord;  
    }     
    getDistance(p1,p2)//the distance between two points, p1 and p2
    {
        let dx = p1.x - p2.x; 
        let dy = p1.y - p2.y; 
        let distance = Math.sqrt(dx*dx + dy*dy);
        return distance; 
    }
    
    
    /**
    * Let node correspond to window resizing.
    * @param  {number} screenHeight The height of the screen. 
    * @param  {number} screenWidth  The width of the screen.  
    * @param  {number} dy           The percentage change in browser window height 
    * @param  {number} dx           The percentage change in browser window width  .  
    */
    refreshScreenSize(screenHeight,screenWidth,dx,dy,points)
    {     
        
    }   
}

//sets up and controls all points and gridworms on the canvas 
class Painter
{
    constructor(screenWidth,screenHeight)
    {      
        this.screenWidth    = screenWidth;
        this.screenHeight   = screenHeight;   
        this.interval       = 40;//interval from one point to the next 
        this.points         = this.createPoints(); //coordinates of the vertices of all squares when the canvas is partitioned
        this.gridWorms      = this.createGridWorms(); 
        this.color          = this.getRandomColor(0.1);
        document.addEventListener('click',(event)=>//when user clicks on the canvas
        {   
            this.points     = this.createPoints();
            this.gridWorms  = this.createGridWorms();//spawn new gridworms
            this.color          = this.getRandomColor(0.1);
        });
    } 
    createGridWorms() 
    {
        let gridworms = [],
            numOfGridWorms = 30; 
        for(var i = 0; i < numOfGridWorms; i++)
        { 
            let point = this.points[Math.floor(this.getRandomNumber(0,this.points.length-1))];//randomly select a point
            gridworms.push(new GridWorm(point,this.interval,this.points,this.screenWidth,this.screenHeight));
        }
        return gridworms; 
    }
    createPoints()//divide the canvas into squares 
    {
        let points = [], 
            interval = this.interval;//interval from one point to the next 
        for(var y = interval; y < this.screenHeight; y+=interval)//get all points in the grid, starting from the top to the bottom
        { 
            if(y+interval > this.screenHeight)//if the next point is beyond the right edge of the canvas
            {
                continue; //skip
            } 
            for(var x = interval; x < this.screenWidth; x+=interval)//all the while, getting all the horizontal points at each level 
            { 
                if(x+interval > this.screenWidth)//if the next point is beyond the bottom edge of the canvas
                { 
                    continue; //skip
                } 
                points.push({x:x,y:y}); 
            } 
        }
        return points;  
    }  
    getRandomColor(opacity)
    {
        var colors = [
            `rgba(255,0,0,      ${opacity})`,//red
            `rgba(255, 242,0,   ${opacity})`,//yellow, 
            `rgba(0,0,255,      ${opacity})`,//blue
            `rgba(255,255,0,    ${opacity})`,//yellow
            `rgba(0,255,255,    ${opacity})`,//cyan
            `rgba(255,0,255,    ${opacity})`,//magenta/fuchsia
            `rgba(192,192,192,  ${opacity})`,//silver
            `rgba(128,128,128,  ${opacity})`,//gray 
            `rgba(128,0,0,      ${opacity})`,//maroon
            `rgba(128,128,0,    ${opacity})`,//olive
            `rgba(0,128,0,      ${opacity})`,//green
            `rgba(128,0,128,    ${opacity})`,//purple 
            `rgba(0,128,128,    ${opacity})`,//teal
            `rgba(0,0,128,      ${opacity})`,//navy 
            `rgba(0, 255, 0,    ${opacity})`,//green
            `rgba(77, 0, 255,   ${opacity})`,//blue
            `rgba(255, 0, 140,  ${opacity})`,//purple
            `rgba(0,255,0,      ${opacity})`//lime
        ];
        return colors[parseInt(this.getRandomNumber(0, colors.length))];
    }
    /**
    * Returns a random number between min (inclusive) and max (exclusive)
    * @param  {number} min The lesser of the two numbers. 
    * @param  {number} max The greater of the two numbers.  
    * @return {number} A random number between min (inclusive) and max (exclusive)
    */
    getRandomNumber(min, max) 
    {
        return Math.random() * (max - min) + min;
    } 
    /**
    * Let canvas respond to window resizing.
    * @param  {number} screenHeight The height of the screen. 
    * @param  {number} screenWidth  The width of the screen.  
    */
    refreshScreenSize(screenHeight,screenWidth)
    {   
        if(this.screenHeight !== screenHeight || this.screenWidth !== screenWidth)//if the screen size has changed
        {  
            this.screenHeight   = screenHeight;  
            this.screenWidth    = screenWidth;   
            this.points         = this.createPoints(); //coordinates of the vertices of all squares when the canvas is partitioned
            this.gridWorms      = this.createGridWorms();  
        } 
    }  
    update(deltaTime)
    {     
       this.gridWorms.forEach(function(gridworm)
        {
            gridworm.update(deltaTime); 
        }); 
    }  
    draw(ctx)
    {    
        /*
        for(var i = 0; i < this.points.length; i++)
        {
            let point = this.points[i];
            ctx.fillStyle   = Math.random() > 0.5? this.color:'white';//creates a disco effect 
            ctx.fillRect(point.x,point.y,this.interval,this.interval);
        }
        */
        this.gridWorms.forEach(function(gridworm)
        {
            gridworm.draw(ctx); 
        }); 
    }   
}

//set everything up 
function getBrowserWindowSize() 
{
    let win = window,
    doc     = document,
    offset  = 20,//
    docElem = doc.documentElement,
    body    = doc.getElementsByTagName('body')[0],
    browserWindowWidth  = win.innerWidth || docElem.clientWidth || body.clientWidth,
    browserWindowHeight = win.innerHeight|| docElem.clientHeight|| body.clientHeight; 
    return {x:browserWindowWidth-offset,y:browserWindowHeight-offset}; 
} 
let browserWindowSize   = getBrowserWindowSize(),
c   = document.getElementById("gridwormCanvas"),
ctx = c.getContext("2d"); 
//set size of canvas
c.width          = browserWindowSize.x; 
c.height         = browserWindowSize.y; 
let SCREEN_WIDTH = browserWindowSize.x,
    SCREEN_HEIGHT= browserWindowSize.y,   
    painter      = new Painter(SCREEN_WIDTH,SCREEN_HEIGHT),  
    lastTime     = 100,  
    windowSize;   
function onWindowResize()//called every time the window gets resized. 
{  
    windowSize     = getBrowserWindowSize();
    c.width        = windowSize.x; 
    c.height       = windowSize.y; 
    SCREEN_WIDTH   = windowSize.x;
    SCREEN_HEIGHT  = windowSize.y;  
}
window.addEventListener('resize',onWindowResize); 
function updateCanvas()
{
    ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);    
    ctx.fillStyle   = 'white';  
    ctx.fillRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
}
function doAnimationLoop(timestamp)
{           
    updateCanvas();
    painter.refreshScreenSize(SCREEN_HEIGHT,SCREEN_WIDTH);//let canvas respond to window resizing  
    let deltaTime  = timestamp - lastTime; 
        lastTime   = timestamp;
    painter.update(deltaTime);   
    painter.draw(ctx);  
    requestAnimationFrame(doAnimationLoop); 
} 
requestAnimationFrame(doAnimationLoop); 

//BG CHANING COLOR

