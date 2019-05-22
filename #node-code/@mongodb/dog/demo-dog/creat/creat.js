const Dog=require('../../model/Dog')

try {
    Dog.create({name:'小花',age:1,type:'雌',id:1})
    Dog.create({name:'小黑',age:2,type:'雌',id:1})
    Dog.create({name:'小白',age:3,type:'雌',comments:[{body:'....body',foor:'2019-3-1'},{body:'....body',foor:'2019-3-1'}]})
}
catch (e) {
    console.log(e)
}


