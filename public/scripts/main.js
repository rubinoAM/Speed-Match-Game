document.addEventListener('DOMContentLoaded',(e)=>{
    const shapeArray = createShapes();
    // for(let i=0;i<shapeArray.length;i++){
    //     console.log(shapeArray[i].children[0].innerHTML);
    // }

    const r1s1 = document.getElementById('r1s1');
    const r1s2 = document.getElementById('r1s2');
    const r1s3 = document.getElementById('r1s3');
    const r2s1 = document.getElementById('r2s1');
    const r2s2 = document.getElementById('r2s2');
    const r2s3 = document.getElementById('r2s3');
    const r3s1 = document.getElementById('r3s1');
    const r3s2 = document.getElementById('r3s2');
    const r3s3 = document.getElementById('r3s3');
    
    r1s1.appendChild(shapeArray[Math.floor(Math.random() * 5)]);
    r1s2.appendChild(shapeArray[Math.floor(Math.random() * 5)]);
    r1s3.appendChild(shapeArray[Math.floor(Math.random() * 5)]);
    r2s1.appendChild(shapeArray[Math.floor(Math.random() * 5)]);
    r2s2.appendChild(shapeArray[Math.floor(Math.random() * 5)]);
    r2s3.appendChild(shapeArray[Math.floor(Math.random() * 5)]);
    r3s1.appendChild(shapeArray[Math.floor(Math.random() * 5)]);
    r3s2.appendChild(shapeArray[Math.floor(Math.random() * 5)]);
    r3s3.appendChild(shapeArray[Math.floor(Math.random() * 5)]);
});