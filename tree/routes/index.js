var express = require('express');
var router = express.Router();
var  dbhelper = require('../modules/utils/dbHelper.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getTreeDate', function (req, res) {
  dbhelper.selectAll('test', function (err, result) {
    var tree = test(result, 0);
    res.json(tree);
  });
});
router.get('/getList', function (req, res) {
  dbhelper.selectAll('test', function (err, result) {
    res.json(result);
  });
});
router.post('/addTree', function (req, res) {
  var name=req.body.name;
  var pid=req.body.pid;
  dbhelper.add({name:name,pid:pid},'test', function (err, result) {
    if(!err){
      res.json({success:true})
    }else{
      res.json({success:false})
    }
  })
});
router.post('/del', function (req, res) {
  var id = req.body.id;
  dbhelper.del('where id=@id',{id:id},'test', function (err,result) {
    if(!err){
      res.json({success:true})
    }else{
      res.json({success:false})
    }
  })
});


function test(result, pid) {
  var rtn = [];
  for(var i in result) {
    result[i].text=result[i].name;
    if(result[i].pid == pid) {
      result[i].children = test(result, result[i].id);
      rtn.push(result[i]);
    }
  }
  return rtn;
}
module.exports = router;
