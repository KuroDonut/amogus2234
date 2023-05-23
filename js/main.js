

var ajax_form = true;

$(document).ready(function () { // Document ready





    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('.cbp-af-header'),
            didScroll = false,
            changeHeaderOn = 100;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 0);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                classie.add(header, 'cbp-af-header-shrink');
            } else {
                classie.remove(header, 'cbp-af-header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();




$( 'pre' ).text( $( 'pre' ).html() );


var modal        = document.getElementById('modal'),
    modalContent = document.querySelector('.modal-content'),
    openModal    = document.querySelector('.js-open-modal'),
    closeModal   = document.querySelectorAll('.modal, .modal-close');

openModal.addEventListener('click', function() {
  modal.classList.add('is-visible');
});

[].forEach.call(closeModal, function ( el ) {
   el.addEventListener('click', function() {
     modal.classList.remove('is-visible');
  });
});

modalContent.addEventListener('click', function ( event ) {
  event.stopPropagation();  
});

setTimeout(function() {
  modal.style.display = 'block';
}, 250);



$('.goto').click(function(e){
 e.preventDefault();
    $('html').scrollTo(this.hash,this.hash);
   
});




    mediaCheck({
        media: '(max-width: 768px)',
        entry: function () {

            $('.make-it-appear-top').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-left').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-right').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-bottom').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });


        },
        exit: function () {



            $('.make-it-appear-top').waypoint(function (direction) {
                $(this).addClass('animated fadeInDown');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-left').waypoint(function (direction) {
                $(this).addClass('animated fadeInLeft');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-right').waypoint(function (direction) {
                $(this).addClass('animated fadeInRight');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-bottom').waypoint(function (direction) {
                $(this).addClass('animated fadeInUp');
            }, {
                offset: '80%'
            });

            $('.bounce').waypoint(function (direction) {
                $(this).addClass('animated bounce');
            }, {
                offset: '70%'
            });

            $('.pulse').waypoint(function (direction) {
                $(this).addClass('animated pulse');
            }, {
                offset: '50%'
            });

        }


    }); 


}); 






var nameSuccess = false, emailSuccess = false, messageSuccess = false;
  
var $elements = $("input, textarea");
$elements.on("focus", function() {
  var $selected = $(this);
  $elements.each(function() {
    var $this = $(this);
    if($this !== $selected)
      $(this).parent().css("opacity", 0.5);
  });
  $selected.parent().css("opacity", 1);
});

$("#contact-name").on("blur", validateName);
$("#contact-email").on("blur", validateEmail);
$("#contact-message").on("blur", validateMessage);

$("#contact-send").on("click", function() {
  validateName();
  validateEmail();
  validateMessage();
  
  if(nameSuccess && emailSuccess && messageSuccess) {
    $(".form").slideUp();
  }
  else if(!nameSuccess) $("#contact-name").focus();
  else if(!emailSuccess) $("#contact-email").focus();
  else if(!messageSuccess) $("#contact-message").focus();
});

function validateName(){
var $name = $("#contact-name");
  var text = $name.val().trim();
  if(text.length < 2) {
    $name.parent().removeClass("has-success").addClass("has-error");
    nameSuccess = false;
  }
  else{
    $name.parent().removeClass("has-error").addClass("has-success");
    nameSuccess = true;
  }
}

function validateEmail(){
  var $email = $("#contact-email");
  var text = $email.val().trim();
  var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
  var match = pattern.test(text);
  if(match) {
    $email.parent().removeClass("has-error").addClass("has-success");
    emailSuccess = true;
  }
  else{
    $email.parent().removeClass("has-success").addClass("has-error");
    emailSuccess = false;
  }
}

function validateMessage(){
  var $message = $("#contact-message");
  var text = $message.val().trim();
  
  if(text.length > 1) {
    $message.parent().removeClass("has-error").addClass("has-success");
    messageSuccess = true;
  }
  else {
    $message.parent().removeClass("has-success").addClass("has-error");
    messageSuccess = false;
  }
}

(function($) {
    "use strict";
    function count($this){
    var current = parseInt($this.html(), 10);
    current = current + 1; 	
    $this.html(++current);
        if(current > $this.data('count')){
            $this.html($this.data('count'));
        } else {    
            setTimeout(function(){count($this)}, 300);
        }
    }        	
    $(".stat-count").each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
    });
})(jQuery);


window.addEventListener("DOMContentLoaded", function () {
  
  
    var form = document.getElementById("my-form");

    var status = document.getElementById("status");
  

  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  

  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  

  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  $(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });  


  jQuery(document).ready(function($) {
    tab = $('.tabs h3 a');
  
    tab.on('click', function(event) {
      event.preventDefault();
      tab.removeClass('active');
      $(this).addClass('active');
  
      tab_content = $(this).attr('href');
      $('div[id$="tab-content"]').removeClass('active');
      $(tab_content).addClass('active');
    });
  });