const {Category} = require('./model')

Category.find({top:true})
    .populate('children')
    .exec(function (err, res) {
        if (err) {
            console.log(err)
        }
        console.log(JSON.stringify(res))
        // res.send('test')
        // res.send({
        //     msg: true,
        //     result: labels
        // })
    })
