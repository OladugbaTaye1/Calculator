
const sevenHandler = ()=> {
    result.value += seven.innerHTML
}
const eightHandler = ()=> {
    result.value += eight.innerHTML
}
const nineHandler = ()=> {
    result.value += nine.innerHTML
}
const delHandler = ()=> {
    let s_number
    screen = result.value
    s_number = screen.length
    result.value = screen.slice(0,s_number-1)
}
const fourHandler = ()=> {
    result.value += four.innerHTML
}
const fiveHandler = ()=> {
    result.value += five.innerHTML
}
const sixHandler = ()=> {
    result.value += six.innerHTML
}
const addHandler = ()=> {
    result.value += add.innerHTML
}
const oneHandler = ()=> {
    result.value += one.innerHTML
}
const twoHandler = ()=> {
    result.value += two.innerHTML
}
const threeHandler = ()=> {
    result.value += three.innerHTML
}
const minusHandler = ()=> {
    result.value += minus.innerHTML
}
const pointHandler = ()=> {
    result.value += point.innerHTML
}
const zeroHandler = ()=> {
    result.value += zero.innerHTML
}
const divideHandler = ()=> {
    result.value += divide.innerHTML
}
const multiplyHandler = ()=> {
    result.value += multiply.innerHTML
}
const resetHandler = ()=> {
    result.value = ""
}
const equalHandler = ()=> {
    let screen
    screen = result.value
    result.value = eval(screen)
}