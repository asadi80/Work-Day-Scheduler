var dt = moment().format('HH') ;

const newLocal = $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

        //saving to the localstorage
$('.saveBtn').on('click', function(){
    $('textarea[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
 
    });   
});
$('textarea').keyup(function(e){
    var code = e.which;
    if(code == 13){
        e.preventDefault();
        $('.saveBtn').trigger('click');
    }
});

            //gitng data from localstorage
$(document).ready( function(){
    $('textarea[type="text"]').each(function(){   
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        console.log(id);
        
        $(this).val(value);
        if(id<dt){
            $(this).addClass("past");
        }else if(id===dt){
           
            $(this).addClass("present");
        }
        else{
            $(this).addClass("future");
        }
       
    }); 

});
        // adding sound when you click
const rollSound = new Audio("./assets/s/s.mp3");
$('.saveBtn').click(e => rollSound.play());
  

function isMobileWidth() {
    return $('textarea').removeClass('col-10')
    
}
function isMobileWidth() {
    return $('textarea').addClass('col-7');
    
}


