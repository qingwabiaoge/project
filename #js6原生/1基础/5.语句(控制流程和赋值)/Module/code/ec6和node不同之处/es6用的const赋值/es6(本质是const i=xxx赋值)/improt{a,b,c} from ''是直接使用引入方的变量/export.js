let i = 1

function fn() {
    i++
    console.log(`输出方的全局变量i:${i}`)
}

export {i, fn}
