function createShapes(){
    const puzzle = parseDOM('puzzle','extension');
    const heart = parseDOM('heart','favorite');
    const note = parseDOM('note','audiotrack');
    const moon = parseDOM('moon','brightness_2');
    const sun = parseDOM('sun','brightness_7');
    const flower = parseDOM('flower','local_florist');

    return [puzzle,heart,note,moon,sun,flower];
}

function parseDOM(shape,icon){
    const parser = new DOMParser();
    const string = `<div class="shape ${shape}">
                        <i class="material-icons">${icon}</i>
                    </div>`;
    const htmlElem = parser.parseFromString(string, 'text/html');
    return htmlElem.body.firstChild;
}