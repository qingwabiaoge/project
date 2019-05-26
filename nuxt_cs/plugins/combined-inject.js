export default ({ app }, inject) => {
  inject('myCombinedInjectedFunction', (string) => console.log('app联合注入', string))
  //注入到了 app  vm vm.store
}
