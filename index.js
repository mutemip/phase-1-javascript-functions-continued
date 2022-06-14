// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
// saturdayFun("Swim")

const mondayWork  = function (activity = "go to the office"){
    return`This Monday, I will ${activity}.`;
}
// mondayWork("work from home")

const wrapAdjective = function (lop = "*"){
    return function (state = "special"){
        return `You are ${lop}${state}${lop}!`;
    }
}