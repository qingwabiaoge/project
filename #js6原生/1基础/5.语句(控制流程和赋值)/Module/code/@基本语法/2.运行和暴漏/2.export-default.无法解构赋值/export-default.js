export default {
    a: 1,
    fn() {
        console.log(this.a++)
    }
}


/*
*   module.exports={
*     default:{
*      a:1,
*      fn(){}
*             }
*                    }
*
* */