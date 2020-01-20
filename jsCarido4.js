const cond = (num) => {
    if(num % 2 !== 0){
        console.log('Weird')
        return
    }
    else {
        if(num >=2 && num <= 5) console.log('Not Weird')
        if(num >=6 && num <= 20) console.log('Weird')
        if(num > 20) console.log('Not Weird')
    }
}

cond(24)


const tipCal = (meal, tip, tax) => {
    const calTip = perHelp(meal,tip) //?
    const calTax = perHelp(meal, tax) //?
    const num = Number(meal) + Number(calTip) + Number(calTax)
    console.log(Math.round(num))
    return num
}

const perHelp = (num, per) => {
    return Number((per / 100) * num).toFixed(2)
}


tipCal(12.00, 20, 8) //?


