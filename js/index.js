$(document).ready(function(){
    $(".loading .lds-ripple").fadeOut(1000 , ()=>{
        $(".loading .lds-ripple").parent().fadeOut(1000,()=>{
            $(".loading").remove();
            $("body").css("overflow-y" , "auto")
        })
    });
})


