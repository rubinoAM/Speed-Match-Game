document.addEventListener('DOMContentLoaded',(e)=>{
    fillRubric();
    fillP1Grid();
    fillP2Grid();

    let rubric = valuesRubric();
    console.log(rubric);

    changeShapeP1();
    changeShapeP2();
});