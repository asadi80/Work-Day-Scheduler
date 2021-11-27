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

   
  







