export default function () {
  console.log('head()-run')
  return {
    title: this.title,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: this.description
      }
    ],
  }
}


