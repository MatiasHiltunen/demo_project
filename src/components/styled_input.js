import { div, numberInput, style, textInput } from "../dom_utils"

export function styledInput(onInput) {

    return div('InputContainer', style(
        textInput(onInput),
        {
            className: "input"
        }
    ))
}

export function styledNumberInput(onInput) {

    return div('InputContainer', style(
        numberInput(onInput),
        {
            className: "input"
        }
    ))
}
