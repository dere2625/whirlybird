jQuery(()=>{

    var transformInterval = setInterval(()=>{
        var containers = $('body').children();
        for(let i=1; i<=containers.length; i++){
            var position = $(`.container:nth-child(${i})`).position();
            $(`.container:nth-child(${i})`).offset(
                {top:0,left:position.left - 5}
            )
            if($(`.container:nth-child(${i})`).position().left + 150 < 0){
                $(`.container:nth-child(${i})`).offset({top:0,left:$(window).width()+200})
                var temp = getRandomNumber();
                console.log();
                $(`.container:nth-child(${i})`).children('.bottom').css("height", temp+"vh")
                $(`.container:nth-child(${i})`).children('.top').css("height",(80-temp)+"vh")
            }
        }
    },20);

    $('.container').mouseenter((e)=>{
        clearInterval(transformInterval)
    })

    function getRandomNumber(){
        var ceiling = 60;
        var floor = 20;
        let flr = Math.floor(Math.random() * (ceiling - floor) + floor)
        if(flr < floor){
            getRandomNumber();
        }
        return flr;
    }



})