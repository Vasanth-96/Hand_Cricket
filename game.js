document.addEventListener('DOMContentLoaded',function(){

    let computerscore = 0;
    let myscore = 0;
    document.querySelector('#play').onclick = function(){

        document.querySelector('#fingers').style.display = "block";
        let N = 40;
        let computerhand = Math.floor(Math.random() * 20) + 20;
        computerscore=computerhand;

    //assigning the computerhand
    document.querySelector('#computerhand').innerHTML = `Computer score is : <big>${computerhand}</big>`;
    document.querySelector('#myhand').innerHTML = `Your score is : <big>${myscore}</big>`;
    document.querySelector('#play').style.display = "none";
    document.querySelector('#ref').style.display = "none";
    }

    document.querySelector('#one').onclick = function(){
        let newhand = Math.floor(Math.random() * 6) + 1;
        if(newhand == 1)
        {
            alert("sorry you have lost the game as computer also played the same hand = 1 ");
            location.reload();
        }
        else
        {
            myscore = myscore + 1;
            document.querySelector('#myhand').innerHTML = `Your score is : <big >${myscore}</big>`;
        }
        if(myscore > computerscore)
        {
            alert(`You Have Won The Game, your score was ${myscore}`)
            location.reload();
        }
    }
    document.querySelector('#two').onclick = function(){
        let newhand = Math.floor(Math.random() * 6) + 1;
        if(newhand == 2)
        {
            alert("sorry you have lost the game as computer also played the same hand = 2 ");
            location.reload();
        }
        else
        {
            myscore = myscore + 2;
            document.querySelector('#myhand').innerHTML = `Your score is : <big>${myscore}</big>`;
        }
        if(myscore > computerscore)
        {
            alert(`You Have Won The Game, your score was ${myscore}`)
            location.reload();
        }
    }
    document.querySelector('#three').onclick = function(){
        let newhand = Math.floor(Math.random() * 6) + 1;
        if(newhand == 3)
        {
            alert("sorry you have lost the game as computer also played the same hand = 3 ");
            location.reload();
        }
        else
        {
            myscore = myscore + 3;
            document.querySelector('#myhand').innerHTML = `Your score is : <big>${myscore}</big>`;
        }
        if(myscore > computerscore)
        {
            alert(`You Have Won The Game, your score was ${myscore}`)
            location.reload();
        }
    }
    document.querySelector('#four').onclick = function(){
        let newhand = Math.floor(Math.random() * 6) + 1;
        if(newhand == 4)
        {
            alert("sorry you have lost the game as computer also played the same hand = 4 ");
            location.reload();
        }
        else
        {
            myscore = myscore + 4;
            document.querySelector('#myhand').innerHTML = `Your score is : <big>${myscore}</big>`;
        }
        if(myscore > computerscore)
        {
            alert(`You Have Won The Game, your score was ${myscore}`)
            location.reload();
        }
    }
    document.querySelector('#five').onclick = function(){
        let newhand = Math.floor(Math.random() * 6) + 1;
        if(newhand == 5)
        {
            alert("sorry you have lost the game as computer also played the same hand = 5 ");
            location.reload();
        }
        else
        {
            myscore = myscore + 5;
            document.querySelector('#myhand').innerHTML = `Your score is : <big>${myscore}</big>`;
        }
        if(myscore > computerscore)
        {
            alert(`You Have Won The Game, your score was ${myscore}`)
            location.reload();
        }
    }
    document.querySelector('#six').onclick = function(){
        let newhand = Math.floor(Math.random() * 6) + 1;
        if(newhand == 6)
        {
            alert("sorry you have lost the game as computer also played the same hand = 6 ");
            location.reload();
        }
        else
        {
            myscore = myscore + 6;
            document.querySelector('#myhand').innerHTML = `Your score is : <big>${myscore}</big>`;
        }
        if(myscore > computerscore)
        {
            alert(`You Have Won The Game, your score was ${myscore}`)
            location.reload();
        }
    }
    

})