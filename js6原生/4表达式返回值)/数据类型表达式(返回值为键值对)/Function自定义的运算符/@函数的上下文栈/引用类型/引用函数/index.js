import f from './export'
//1
f()

//2
const f2 = f
f2()


//3
const obj = {}
obj.f = f
obj.f()




