module.exports = (err, res) => {
    if (err) {
        console.log(err)
    } else if(res) {
        console.log(res)
    }
    else {
        console.log('success')
    }

}