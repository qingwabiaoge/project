
export default {
    a: 1,
    fn() {
        this.a++//#3 this=obj ,obj.a+=1
        console.log(`导出方的this.a:${this.a}`)
    }

}



