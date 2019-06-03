function createShapes(){
    const puzzle = htmlString('puzzle','extension');
    const heart = htmlString('heart','favorite');
    const note = htmlString('note','audiotrack');
    const moon = htmlString('moon','brightness_2');
    const sun = htmlString('sun','brightness_7');
    const flower = htmlString('flower','local_florist');

    return [puzzle,heart,note,moon,sun,flower];
}

function htmlString(shape,icon){
    return `<div class="shape ${shape}">
                <i class="material-icons">${icon}</i>
            </div>`;
}