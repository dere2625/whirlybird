jQuery(()=>{
    var step = 10;
    var score = 0;

    var transformInterval = setInterval(()=>{
        var containers = $('body').children();
        for(let i=1; i<=containers.length; i++){
            var position = $(`.container:nth-child(${i})`).position();
            if(position!=undefined){
                $(`.container:nth-child(${i})`).offset(
                    {top:0,left:position.left - step}
                )
                if($(`.container:nth-child(${i})`).position().left + 150 < 0){
                    score++;
                    step+=0.1;
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
        modal.style.display = 'flex';
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        let status =  'Game Over !!!'.split('');
        let i=0;
        var statusInterval = setInterval(()=>{
            $('.modal-content p').first().append(status[i])
            i++;
        },200)
        if(i > status.length){
            clearInterval(statusInterval)
        }

        let score = ('Your score is '+_score).split('');
        let j=0;
        var scoreInterval = setInterval(()=>{
            $('.modal-content p').last().append(score[j])
            j++;
        },200)
        if(j > score.length){
            clearInterval(scoreInterval)
        }
    }

})

