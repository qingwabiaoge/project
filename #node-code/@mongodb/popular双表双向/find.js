
const Story=require('./model/Story')
Story.find({ _id: "5be44ade8b24051c80672307" })
    .populate("author") //显示stories 不加就是
    .exec(function(err, res) {
        if (err) return handleError(err);
        console.log(res);
        console.log(res[0].author[0])

    });
