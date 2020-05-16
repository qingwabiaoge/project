const mongoose = require('mongoose');
const MpathPlugin = require('mongoose-mpath');

var options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  user: 'demo',
  pass: 'demo'
}

mongoose.connect('mongodb://localhost:27017/demo', options, function (err) {
  if (err) {
    console.log('Connection Error:' + err)
  } else {
    console.log('Connection success!')
  }
})

const LocationSchema = new mongoose.Schema({name: String});
LocationSchema.plugin(MpathPlugin);

const LocationModel = mongoose.model('Location', LocationSchema);

const africa = new LocationModel({name: 'africa'});
const europe = new LocationModel({name: 'europe'});
const sweden = new LocationModel({name: 'sweden', parent: europe});
const norway = new LocationModel({name: 'norway', parent: europe});
const stockholm = new LocationModel({name: 'stockholm', parent: sweden});
const skansen = new LocationModel({name: 'skansen', parent: stockholm});

async function create() {
  await africa.save();
  await europe.save();
  await sweden.save();
  await norway.save();
  await stockholm.save();
  await skansen.save();
}

// create()
// Once called, the database already exists，like README demo

async function fn() {
  const tree = await LocationModel.getChildrenTree({

    options: {
      lean: true,

    },
    minLevel:1,
  })
  console.log(tree)
}

fn()



