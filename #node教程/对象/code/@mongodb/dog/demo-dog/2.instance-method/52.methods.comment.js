//寻找一个标题是哈哈哈的博客，然后发表评论
const Dog=require('../../model/Dog')
Dog.findOne({"name":"小黑"},function(err,dog){
    if(!dog){
        return;
    }
    dog.comment({"body":"再来一个评论","date" : new Date()});
});