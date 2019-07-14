
module.exports={

        a: 1,
        fn() {
            this.a += 1//#3 this=obj ,obj.a+=1
            console.log(`输出方的this.a:${this.a}`)

        }

}


