document.addEventListener('DOMContentLoaded',(e)=>{
    const shapeArray = createShapes();
    /*for(let i=0;i<shapeArray.length;i++){
        console.log(shapeArray[i]);
    }*/
    console.log(shapeArray);
    const r1s1 = document.getElementById('r1s1').appendChild(shapeArray[Math.floor(Math.random() * 6)]);
    const r1s2 = document.getElementById('r1s2').appendChild(shapeArray[Math.floor(Math.random() * 6)]);
    const r1s3 = document.getElementById('r1s3').appendChild(shapeArray[Math.floor(Math.random() * 6)]);
    const r2s1 = document.getElementById('r2s1').appendChild(shapeArray[Math.floor(Math.random() * 6)]);
    const r2s2 = document.getElementById('r2s2').appendChild(shapeArray[Math.floor(Math.random() * 6)]);
    const r2s3 = document.getElementById('r2s3').appendChild(shapeArray[Math.floor(Math.random() * 6)]);
    const r3s1 = document.getElementById('r3s1').appendChild(shapeArray[Math.floor(Math.random() * 6)]);
    const r3s2 = document.getElementById('r3s2').appendChild(shapeArray[Math.floor(Math.random() * 6)]);
    const r3s3 = document.getElementById('r3s3').appendChild(shapeArray[Math.floor(Math.random() * 6)]);
});