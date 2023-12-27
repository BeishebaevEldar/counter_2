let mainRes = document.getElementById('res')
let count = 0   
let counter = document.getElementById('count')

let matchRandom = () =>{
    mainRes.innerHTML = ++count    
    if(count===1000){
        counter.style.width='250px'
        counter.style.transition='1s'

    }else if(count===10000){
        counter.style.width='310px'
        counter.style.transition='1s'
    }

}
let cleaR = () =>{
    if(0 < count){
        mainRes.innerHTML = count = 0

        counter.style.transition='1s'
    }
}
let minus = () =>{
    mainRes.innerHTML = --count
    if(0 > count){
         mainRes.innerHTML = count = '0'
    }
    if(count===999){
        counter.style.width='200px'
        counter.style.transition='1s'
    }
    if(count===9999){
        counter.style.width='250px'
        counter.style.transition='1s'
    }      
}