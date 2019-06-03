function createShapes(){
    const puzzle = document.createElement('div');
    puzzle.classList.add('shape');
    puzzle.classList.add('puzzle');
    const puzzleIcon = document.createElement('i');
    puzzleIcon.classList.add('material-icons');
    puzzleIcon.innerHTML = "extension";
    puzzle.appendChild(puzzleIcon);

    const heart = document.createElement('div');
    heart.classList.add('shape');
    heart.classList.add('heart');
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('material-icons');
    heartIcon.innerHTML = "favorite";
    heart.appendChild(heartIcon);

    const note = document.createElement('div');
    note.classList.add('shape');
    note.classList.add('note');
    const noteIcon = document.createElement('i');
    noteIcon.classList.add('material-icons');
    noteIcon.innerHTML = "audiotrack";
    note.appendChild(noteIcon);

    const moon = document.createElement('div');
    moon.classList.add('shape');
    moon.classList.add('moon');
    const moonIcon = document.createElement('i');
    moonIcon.classList.add('material-icons');
    moonIcon.innerHTML = "brightness_2";
    moon.appendChild(moonIcon);

    const sun = document.createElement('div');
    sun.classList.add('shape');
    sun.classList.add('sun');
    const sunIcon = document.createElement('i');
    sunIcon.classList.add('material-icons');
    sunIcon.innerHTML = "brightness_7";
    sun.appendChild(sunIcon);

    const flower = document.createElement('div');
    flower.classList.add('shape');
    flower.classList.add('flower');
    const flowerIcon = document.createElement('i');
    flowerIcon.classList.add('material-icons');
    flowerIcon.innerHTML = "local_florist";
    flower.appendChild(flowerIcon);

    return [puzzle,heart,note,moon,sun,flower];
}