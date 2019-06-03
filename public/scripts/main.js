document.addEventListener('DOMContentLoaded',(e)=>{
    const shapeArray = createShapes();
    console.log(shapeArray);
});

function createShapes(){
    const puzzle = document.createElement('div');
    puzzle.classList.add('shape');
    puzzle.classList.add('puzzle');

    const heart = document.createElement('div');
    heart.classList.add('shape');
    heart.classList.add('heart');

    const note = document.createElement('div');
    note.classList.add('shape');
    note.classList.add('note');

    const moon = document.createElement('div');
    moon.classList.add('shape');
    moon.classList.add('moon');

    const sun = document.createElement('div');
    sun.classList.add('shape');
    sun.classList.add('sun');

    const flower = document.createElement('div');
    flower.classList.add('shape');
    flower.classList.add('flower');

    return [puzzle,heart,note,moon,sun,flower];
}