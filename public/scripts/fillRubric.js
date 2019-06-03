function fillRubric(){
    const shapeArray = createShapes();
    
    const r1s1 = document.getElementById('r1s1');
    const r1s2 = document.getElementById('r1s2');
    const r1s3 = document.getElementById('r1s3');
    const r2s1 = document.getElementById('r2s1');
    const r2s2 = document.getElementById('r2s2');
    const r2s3 = document.getElementById('r2s3');
    const r3s1 = document.getElementById('r3s1');
    const r3s2 = document.getElementById('r3s2');
    const r3s3 = document.getElementById('r3s3');

    r1s1.innerHTML = shapeArray[Math.floor(Math.random() * 6)];
    r1s2.innerHTML = shapeArray[Math.floor(Math.random() * 6)];
    r1s3.innerHTML = shapeArray[Math.floor(Math.random() * 6)];
    r2s1.innerHTML = shapeArray[Math.floor(Math.random() * 6)];
    r2s2.innerHTML = shapeArray[Math.floor(Math.random() * 6)];
    r2s3.innerHTML = shapeArray[Math.floor(Math.random() * 6)];
    r3s1.innerHTML = shapeArray[Math.floor(Math.random() * 6)];
    r3s2.innerHTML = shapeArray[Math.floor(Math.random() * 6)];
    r3s3.innerHTML = shapeArray[Math.floor(Math.random() * 6)];
}