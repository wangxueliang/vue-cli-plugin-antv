import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import Antd from 'ant-design-vue'
<%_ if (options.customTheme) { _%>
import '../antd-variables.scss'
<%_ } else { _%>
import 'ant-design-vue/dist/antd.css'
<%_ } _%>
Vue.use(Antd)
<%_ } else { _%>
import { Pagination, LocaleProvider, Button } from 'ant-design-vue'
<%_ if (options.lang !== 'en_US') { _%>
import { LocaleProvider } from 'ant-design-vue'
<%_ } _%>
Vue.component(LocaleProvider.name, LocaleProvider)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
<%_ } _%>
