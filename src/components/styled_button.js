import { html } from "../dom_utils";


export function styledButton(text, clickCallback){


    const button = html(`
    <button class="btn" type="button">
        <strong>${text}</strong>
        <div id="container-stars">
        <div id="stars"></div>
        </div>
    
        <div id="glow">
        <div class="circle"></div>
        <div class="circle"></div>
        </div>
    </button>
    `)

    if(clickCallback){
        button.addEventListener('click', clickCallback)
    }

    return button

}