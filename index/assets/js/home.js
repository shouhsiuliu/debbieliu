

// $(window).scroll(function() {
//     if ($('.tittle').scrollTop() > 200) {
//         $(this).addClass('fixed');
//     } else {
//         $(this).removeClass('fixed');
//     }
// });



    var prev = 50;
    var $window = $(window);
    var tittle = $('.tittle');
    

    $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        // tittle.toggleClass('fixed', scrollTop > prev);
        // break;
        // prev = scrollTop;

    }) 


// story

var ig_story = document.getElementById('igStory');
       
        
        
        function openIgStory() {
            width=0;
            ig_story.classList.add('post');
            var autoplay;
            var autoload;
           
            ig_story.onmouseleave = function(e){
                autoplay = setInterval(function(){    
                    plusStory(1);
                        
                }, 3000),

                autoload = setInterval(function(){    
                    loadingBar();        
                }, 30);
               ;
            }
            ig_story.onmouseenter = function(e){
                clearInterval(autoplay),
                clearInterval(autoload);
            }
        }
        
        function closeIgStory() {
            ig_story.classList.remove('post');        
            ig_story.onmouseleave = function(e){
                clearInterval(autoplay),
                clearInterval(autoload);
                ig_load_line.style.width = 0+ '%';
            }
        }

       
 
        
        const ig_load_line = document.getElementById('igLoadLine');
        let width = 0;
            
        function loadingBar(){

            if(width == 100){
                width = 0;        
            }else{
                width++;
                ig_load_line.style.width = width + '%'; 
            }
           
        } 
   

       

        var slideIndex = 1;
        slideStory(slideIndex);

        function plusStory(n) {
            slideStory(slideIndex += n);  
            width = 0;  
        }
        
        function currentSlide(n) {
            slideStory(slideIndex = n);
            width = 0;
        }
        
        function slideStory(n) {
            var i;
            var slides = document.getElementsByClassName("ig_story_item");
       
            
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }


