module.exports = (err, res) => {
  if (err) {
    console.log(err)
  } else if (res) {
    //打印普通对象
    console.log(`res:${JSON.stringify(res)}`)

  } else {
    console.log('成功')
  }
}
