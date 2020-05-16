

const {SiteNode}=require('./model')

async function fn(){
  const col=await SiteNode.findOne({name:'col'})

  const res=await col.getAncestors()
  console.log(res)

}

fn()
