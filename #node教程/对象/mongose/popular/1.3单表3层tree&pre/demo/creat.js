const {Category} = require('../model')

async function f() {
    const produce = new Category({title: 'produce'})
    const book = new Category({titel: 'book'})
    await produce.save()
    await book.save()
    await produce.children.push(book._id)
    await book.parent.push(produce._id)
    await produce.save()
    await book.save()
}

f()