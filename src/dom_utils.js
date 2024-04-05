
export function createElement(name){
    const element = document.createElement(name)
    return element
}

// Parametrinä ...children ottaa N määrän parametreja
// ja laittaa ne arrayn sisään. ks. Rest -operaattori
export function div(className, ...children){
    const divElement = createElement('DIV')

    divElement.className = className

    // Tässä oli pieni bugi, length > 1 tarkoittaa sitä että
    // ehto ei toteudu jos arrayssa on yksi item, korjauksena length > 0 tai length >= 1.

    // Korjattu vaihtoehtoisen esimerkin vuoksi seuraavalla menetelmällä:

    // 0 on falsy arvo ja arvioituu false:ksi, muut numerot ovat truthyjä
    // eli arrayn pituuden ollessa suurempi kuin nolla, koodi suorittuu if-blokissa
    if(children.length){
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

export function input(onInput){

    const el = createElement('INPUT')

    if(onInput){   
        el.addEventListener('input', (e) => onInput(e.target.value))
    }
        
    return el

}

export function textInput(onInput){

    const el = input(onInput)

    el.setAttribute('type', 'text')

    return el
}




