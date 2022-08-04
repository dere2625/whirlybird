jQuery(()=>{

    var something = $('.container:nth-child(3)').position();
    // console.log(something);

    var transformInterval = setInterval(()=>{
        var containers = $('body').children();
        for(let i=1; i<=containers.length; i++){
            var position = $(`.container:nth-child(${i})`).position();
            $(`.container:nth-child(${i})`).offset(
                {top:0,left:position.left - 5}
            )
            if($(`.container:nth-child(${i})`).position().left + 150 < 0){
                $(`.container:nth-child(${i})`).offset({top:0,left:$(window).width()+400})
                $(`.container:nth-child(${i})`).children('.bottom').css("background-color","red")
                $(`.container:nth-child(${i})`).children('.bottom').css("background-color","red")
            }
        }
    },50);

    $('.container').mouseenter((e)=>{
        clearInterval(transformInterval)
    })

    



})