import Vue from 'vue'

import DateTextField from '@/components/extension/DateTextField.vue'
import UserBlock from '@/components/extension/UserBlock.vue'
import MenuBlock from '@/components/extension/MenuBlock.vue'
import BirthdayBlock from '@/components/extension/BirthdayBlock.vue'
import ContentBlock from '@/components/extension/ContentBlock.vue'

Vue.component('dateTextField', DateTextField)
Vue.component('userBlock', UserBlock)
Vue.component('menuBlock', MenuBlock)
Vue.component('birthdayBlock', BirthdayBlock)
Vue.component('contentBlock', ContentBlock)

import DateConverter from './DateConverter.js'

Vue.prototype.dateConverter = DateConverter