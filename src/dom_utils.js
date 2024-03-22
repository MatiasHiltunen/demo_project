
export function createElement(name){
    const element = document.createElement(name)
    return element
}

// Parametrinä ...children ottaa N määrän parametreja
// ja laittaa ne arrayn sisään. ks. Rest -operaattori
export function div(className, ...children){
    const divElement = createElement('DIV')

    divElement.className = className

    if(children.length > 1){
        // ...children tässä tapauksessa on spread-operaattori
        divElement.append(...children)
    }

    return divElement
}

export function button(buttonText, clickCallback){
    const el = createElement('BUTTON')

    el.innerText = buttonText

    if(clickCallback){
        el.addEventListener('click', clickCallback)
    }

    return el
}

export function text(text){

    const el = createElement('P')

    el.innerText = text

    return el
}




