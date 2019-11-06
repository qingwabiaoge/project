import {injectGlobal} from 'vue-styled-components';

export default function ({$axios, store, redirect, env}) {
    injectGlobal`
  .vue-styled-components-cs{
  color:${store.state.primary}
  }
`;
}