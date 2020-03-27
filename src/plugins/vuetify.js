import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#8E24AA",
                secondary: "#607D8B",
                accent: "#4FC3F7",
                error: "#B71C1C",
                warning: "#FF9800",
                info: "#00E5FF",
                sucess: "#8BC34A",
            },
        },
    },
})