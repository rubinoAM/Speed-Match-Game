document.addEventListener('DOMContentLoaded',(e)=>{
    fillRubric();
    fillP1Grid();
    fillP2Grid();

    let rubricValues = valuesRubric();
    let p1Values = valuesP1();
    let p2Values = valuesP2();

    console.log(rubricValues);
    console.log(p1Values);
    console.log(p2Values);

    changeShapeP1();
    changeShapeP2();
});