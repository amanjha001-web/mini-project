
      //access button and define turn of x and y
    
    let acBtn= document.querySelectorAll(".box");
    let resetBtn=document.querySelector("#resetBtn");
    let winMsg=document.querySelector(".win");
    let newGameBtn=document.querySelector("#startNew");
    let winMatch=document.querySelector("#draw");
    let h1=document.querySelector("h1");
    let btnCnt=document.querySelector(".btn");
    let con=document.querySelector(".container");
    
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

    

    // Make responsive
    function checkScreenSize(){
        if(window.innerWidth<312){
            h1.style="font-size:37px; line-height: 60px;";
            for(let btn of acBtn){
                btn.style="min-height:10vh; font-size:25px;";
            }
            resetBtn.style="width:70px; height:27px; font-size:12px";
            btnCnt.style="margin:50px 0px; ";
            winMsg.style="min-width:150px;";
            winMatch.style="font-size:25px;";
            con.style="height:386px;";
            
        }
        else if(window.innerWidth<412){
            h1.style="font-size:42px; line-height: 55px;";
            for(let btn of acBtn){
                btn.style="min-height:12vh; font-size:29px;";
            }
            resetBtn.style="width:75px; height:30px; font-size:15px";
            btnCnt.style="margin:43px 0px;";
            winMsg.style="max-width:180px;";
            winMatch.style="font-size:29px;";
            
        }
        else if(window.innerWidth<512){
            h1.style="font-size:47px; line-height: 60px;";
            for(let btn of acBtn){
                btn.style="min-height:14vh; font-size:32px;";
            }
            resetBtn.style="width:80px; height:32px; font-size:18px";
            btnCnt.style="margin:36px 0px;";
            winMsg.style="max-width:210px;";
            winMatch.style="font-size:32px;";
            
        }
        else if(window.innerWidth<612){
            h1.style="font-size:55px; line-height: 65px;" ;
            for(let btn of acBtn){
                btn.style="min-height:16vh; font-size:35px;";
            }
            resetBtn.style="width:95px; height:34px; font-size:21px";
            btnCnt.style="margin:29px 0px;";
            winMsg.style="max-width:240px;";
            winMatch.style="font-size:36px;";
            
        }
        else if(window.innerWidth<712){
            h1.style="font-size:62px; line-height: 70px;";
            for(let btn of acBtn){
                btn.style="min-height:18vh; font-size:40px;";
            }
            resetBtn.style="width:110px; height:36px; font-size:24px";
            btnCnt.style="margin:22px 0px;";
            winMsg.style="max-width:260px;";
            winMatch.style="font-size:40px;";
            
        }
        else if(window.innerWidth<850){
            h1.style="font-size:67px; line-height: 77px;";
            for(let btn of acBtn){
                btn.style="min-height:20vh; font-size:45px;";
            }
            resetBtn.style="width:125px; height:38px; font-size:27px";
            btnCnt.style="margin:15px 0px;";
            winMsg.style="max-width:280px;";
            winMatch.style="font-size:45px;";
            
        }else{
            h1.style="font-size:72px; line-height: 87px;";
            for(let btn of acBtn){
                btn.style="min-height:22vh; font-size:50px;";
            }
            resetBtn.style="width:140px; height:40px; font-size:30px";
            btnCnt.style="margin:8px 0px;";
            winMsg.style="max-width:300px;";
            winMatch.style="font-size:50px;";
            
        }
    }
    window.addEventListener("resize",checkScreenSize);
    