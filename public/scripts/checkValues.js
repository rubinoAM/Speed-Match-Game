function checkValues(rubricValues,p1Values,p2Values){
    [rubric,p1,p2] = [rubricValues,p1Values,p2Values];
    p1Count = 0;
    p2Count = 0;

    for(let i=0;i<rubric.length;i++){
        if(p1[i] === rubric[i]){
            p1Count++;
        } else if(p2[i] === rubric[i]){
            p2Count++;
        }
    }

    console.log(p1Count,p2Count);

    /*console.log(rubric);
    console.log(p1);
    console.log(p2);*/
}