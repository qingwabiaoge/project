module.exports = (err, res) => {
  if (err) {
    console.log(err)
  } else if (res) {
    console.log(`res:${JSON.stringify(res)}`)
  } else {
    console.log('成功')
  }
}
