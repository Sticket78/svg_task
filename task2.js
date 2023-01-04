const cont1svg=document.querySelector('.container1 svg')
const cont2svg=document.querySelector('.container2 svg')
const AllElements1=Array.from(cont1svg.querySelectorAll('.st1, .st2'))
const AllElements2=Array.from(cont2svg.querySelectorAll('.st1, .st2'))
console.log(AllElements1.length)
console.log(AllElements2.length)
// коэффициенты направления и скорости движения по X
var kef_x = new Map([['ellipse', '1.2'], ['circle', '-1.4'], ['path', '-2.2'], ['rect', '-1.5'],['polygon', '2']]);
// коэффициенты направления и скорости движения по Y
var kef_y = new Map([['ellipse', '-1.9'], ['circle', '-1.8'], ['path', '-2.6'], ['rect', '2'],['polygon', '-2.2']]);
cont1svg.addEventListener('mousemove', (ev)=>{
    var rect1=cont1svg.getBoundingClientRect()
    var x = ev.clientX - rect1.left
    var y = ev.clientY - rect1.top
    container_action(AllElements1, x, y)
})
cont2svg.addEventListener('mousemove', (ev)=>{
    var rect2=cont2svg.getBoundingClientRect()
    var x = ev.clientX - rect2.left
    var y = ev.clientY - rect2.top
    container_action(AllElements2, x, y)
})

function container_action(arr, x, y) {

    arr.forEach ((item) =>{
        ValueX=set_new_value(x, 'x', item.tagName)
        ValueY=set_new_value(y, 'y', item.tagName)
        item.style.transform='translate3d('+ ValueX +'px,'+ValueY+'px, 0)'
    })
}
function set_new_value(value, value_name, tag) {
    if (value_name==='x') new_value=value/20*kef_x.get(tag)
    if (value_name==='y') new_value=value/20*kef_y.get(tag)
    return new_value
}