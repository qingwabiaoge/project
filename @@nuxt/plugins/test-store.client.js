export default ({store}) => {
  if (process.client) {
    console.log(store)
  }
}
