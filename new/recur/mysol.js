function power(exp, base) {
    if(base === 0) return 1
    if(exp -1 > 0) {
        base = base * base
        exp--
        power(exp, base)
    } return base
}

power(2,0) //?
power(2,2) //?
power(2,4) //?


function factorial() {
    
}