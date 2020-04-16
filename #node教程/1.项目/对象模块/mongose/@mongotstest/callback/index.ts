const callback=(err, res) => {
  if (err) {
    console.log(err)
  } else if (res) {
    console.log(res || `success`)
  }
}

export default callback
