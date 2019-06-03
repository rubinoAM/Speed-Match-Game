function changeShape(){
    const r1s1 = document.getElementById('r1s1');
    const r1s2 = document.getElementById('r1s2');
    const r1s3 = document.getElementById('r1s3');
    const r2s1 = document.getElementById('r2s1');
    const r2s2 = document.getElementById('r2s2');
    const r2s3 = document.getElementById('r2s3');
    const r3s1 = document.getElementById('r3s1');
    const r3s2 = document.getElementById('r3s2');
    const r3s3 = document.getElementById('r3s3');
    
    const squaresArray = [r1s1,r1s2,r1s3,r2s1,r2s2,r2s3,r3s1,r3s2,r3s3];
    for(let i=0;i<squaresArray.length;i++){
        squaresArray[i].addEventListener('click',(e)=>{
            if(squaresArray[i].children[0].classList.contains('puzzle')){
                squaresArray[i].children[0].classList.remove('puzzle');
                squaresArray[i].children[0].classList.add('heart');
                squaresArray[i].children[0].children[0].innerHTML = 'favorite';
            } else if (squaresArray[i].children[0].classList.contains('heart')){
                squaresArray[i].children[0].classList.remove('heart');
                squaresArray[i].children[0].classList.add('note');
                squaresArray[i].children[0].children[0].innerHTML = 'audiotrack';
            } else if (squaresArray[i].children[0].classList.contains('note')){
                squaresArray[i].children[0].classList.remove('note');
                squaresArray[i].children[0].classList.add('moon');
                squaresArray[i].children[0].children[0].innerHTML = 'brightness_2';
            } else if (squaresArray[i].children[0].classList.contains('moon')){
                squaresArray[i].children[0].classList.remove('moon');
                squaresArray[i].children[0].classList.add('sun');
                squaresArray[i].children[0].children[0].innerHTML = 'brightness_7';
            } else if (squaresArray[i].children[0].classList.contains('sun')){
                squaresArray[i].children[0].classList.remove('sun');
                squaresArray[i].children[0].classList.add('flower');
                squaresArray[i].children[0].children[0].innerHTML = 'local_florist';
            } else if (squaresArray[i].children[0].classList.contains('flower')){
                squaresArray[i].children[0].classList.remove('flower');
                squaresArray[i].children[0].classList.add('puzzle');
                squaresArray[i].children[0].children[0].innerHTML = 'extension';
            }
        })
    }
}