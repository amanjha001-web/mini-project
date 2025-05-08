
      //access button and define turn of x and y
    
    let acBtn= document.querySelectorAll(".box");
    let resetBtn=document.querySelector("#resetBtn");
    let winMsg=document.querySelector(".win");
    let newGameBtn=document.querySelector("#startNew");
    let winMatch=document.querySelector("#draw");
    const winPattern=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [6,4,2]
    ];
    let turn0=true ;

    acBtn.forEach((box)=>{
        box.addEventListener("click",()=>{
            if(turn0==true){
                 box.innerText="X";
                 turn0=false;
            }
            else{
                box.innerText="O";
                turn0=true;
            }
            box.disabled=true;
            checkWinner();
        });
    });


      //define win pattern and check winner

    const checkWinner=()=>{
        for(let pattern of winPattern){
              let pos1=  acBtn[pattern[0]].innerText;
              let pos2=  acBtn[pattern[1]].innerText;
              let pos3=  acBtn[pattern[2]].innerText;
            if(pos1!=""&&pos2!=""&&pos3!=""){
                if(pos1==pos2&&pos2==pos3){
                    
                    winMsg.style="visibility:visible;";
                    disableBtn();   
                    winMatch.innerText=`${pos3} is Won`;
                }
            }
        }
    };

     // disable button
    const disableBtn=()=>{
        for(box of acBtn ){
            box.disabled=true;
            box.style="cursor:default;";
        }
    }

    //enable button
    const enableBtn=()=>{
        for(box of acBtn){
            box.disabled=false;
            box.style="cursor:pointer;";
        }
    }

         //for reset game  button
    resetBtn.addEventListener("click",()=>{
          turn0=true;
          for(box of acBtn){
            box.innerText="";
          }
          winMsg.style="visibility:none";
          enableBtn();
    });

    //for start new game button
    newGameBtn.addEventListener("click",()=>{
        turn0=true;
        for(box of acBtn){
           box.innerText="";
        }
        winMsg.style="visibility:none";
        enableBtn();
    });

     // Random Star animation
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.textContent = '★';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.fontSize = `${Math.random() * 10 + 5}px`;
      star.style.animationDuration = `${Math.random() * 3 + 1}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      document.body.appendChild(star);
    }