let rubricValues = [];
let p1Values = [];
let p2Values = [];

document.addEventListener('DOMContentLoaded',(e)=>{
    fillRubric();
    fillP1Grid();
    fillP2Grid();

    rubricValues = createValuesRubric();
    p1Values = createValuesP1();
    p2Values = createValuesP2();

    changeShapeP1();
    changeShapeP2();

    setTimeout(()=>{
        setInterval(()=>{
            checkValues(rubricValues,p1Values,p2Values);
        },10000);
    },2000);
});