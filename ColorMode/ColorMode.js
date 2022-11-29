

// following along links

const triggers = document.querySelectorAll('.pointedWords');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink()    {
    const linkCoords = this.getBoundingClientRect(); // getting x/y information about content
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }

    highlight.style.width=`${linkCoords.width}px`;
    highlight.style.height= `${linkCoords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(word => word.addEventListener('mouseenter', highlightLink));



const background = document.querySelector('dropBackground');
const popupTriggers = document.querySelectorAll('.dropdown');

function handleEnter()  {
    console.log("ddddd");
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active') ,200);
}

function handleLeave()  {
console.log('aaa');
}
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
