const Dog = require('../../../model/Dog')

try {
    async function fn() {
        var dogs = new Dog()
        for (i = 1; i < 200; i++) {
            const dog = await Dog.create({name: '小花', image: '/images' + i + '.jpg', type: '雌', id: i})
        }
    }

    fn()
} catch (e) {
    console.log(e)
}


