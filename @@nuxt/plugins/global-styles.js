import {injectGlobal} from 'vue-styled-components';

export default function ({$axios, store, redirect, env}) {
    //此处无法响应式因为不在vue对象里
    injectGlobal`
  .vue-styled-components-global{
  color:${store.state.global.primary}
  }
`;
}
