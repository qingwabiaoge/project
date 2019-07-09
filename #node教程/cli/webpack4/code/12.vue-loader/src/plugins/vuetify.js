// main.js
import Vue from 'vue'
import Vuetify, {
    VApp, // required
    VNavigationDrawer,
    VFooter,
    VToolbar,
    transitions,
    VBtn
} from 'vuetify/lib'
import {Ripple} from 'vuetify/lib/directives'

export default () => {
    Vue.use(Vuetify, {
        components: {
            VApp,
            VNavigationDrawer,
            VFooter,
            VToolbar,
            transitions,
            VBtn
        },
        directives: {
            Ripple
        }
    })
}