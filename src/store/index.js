import themeModule from '@/store/themeModule'
import {createStore} from 'vuex'

export default createStore(
    {
        modules: {
            theme: themeModule,
        },
    },
)
