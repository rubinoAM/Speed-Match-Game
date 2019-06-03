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
        console.log(e);
    })
}