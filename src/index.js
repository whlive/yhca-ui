import HelloWorld from './packages/hello-world/index.js';
import MoorButton from './packages/button/index.js';
import MoorSelect from './packages/select/index.js';
import MoorInput from './packages/input/index.js';
import MoorSwitch from './packages/switch/index.js';
import MoorButtons from './packages/buttons/index.js';
import MoorHeading from './packages/heading/index.js';
import MoorPagination from './packages/pagination/index.js';
import MoorSmallTitle from './packages/smallTitle/index.js';
import MoorTables from './packages/tables/index.js';

const components = [
  HelloWorld,
  MoorButton,
  MoorSelect,
  MoorInput,
  MoorSwitch,
  MoorButtons,
  MoorHeading,
  MoorPagination,
  MoorSmallTitle,
  MoorTables
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HelloWorld,
  MoorButton,
  MoorSelect,
  MoorInput,
  MoorSwitch,
  MoorButtons,
  MoorHeading,
  MoorPagination,
  MoorSmallTitle,
  MoorTables
}