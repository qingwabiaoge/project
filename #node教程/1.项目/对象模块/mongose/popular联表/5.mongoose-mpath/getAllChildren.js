

const {SiteNode}=require('./model')

async function fn(){
  const index=await SiteNode.findOne({name:'index'})

  const res=await index.getAllChildren({})
  console.log(res)

}

fn()
