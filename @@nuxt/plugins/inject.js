//注入到了 app  vm vm.store
import tool from '@/tool'
export default ({ app }, inject) => {
  //inject('myCombinedInjectedFunction', (string) => console.log('app联合注入', string))
  inject('tool',tool)
}
