jQuery(()=>{
    var speed = 10;
    var score = 0;

    var transformInterval = setInterval(()=>{
        var containers = $('body').children();
        for(let i=1; i<=containers.length; i++){
            var position = $(`.container:nth-child(${i})`).position();
            if(position!=undefined){
                $(`.container:nth-child(${i})`).offset(
                    {top:0,left:position.left - 10}
                )
                if($(`.container:nth-child(${i})`).position().left + 150 < 0){
                    score++;
                    $('.scoreboard h3 span').html(score)
                    $(`.container:nth-child(${i})`).offset({top:0,left:$(window).width()+200})
                    var temp = getRandomNumber();
                    $(`.container:nth-child(${i})`).children('.bottom').css("height", temp+"vh")
                    $(`.container:nth-child(${i})`).children('.top').css("height",(80-temp)+"vh")
                }
            }
        }
    },20);

    $('.container').mouseenter((e)=>{
        showNotification(score)
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

    function showNotification(_score){
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        document.getElementById("score").innerHTML = _score;
        modal.style.display = 'flex';

        span.onclick = function() {
            modal.style.display = "none";
            transformInterval;
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

})

