// 整个包的入口
// 定义install方法, 接收 Vue 作为参数 , 如果使用use注册插件, 则所有的组件都将被注册
import Button from './button';
import Dialog from './dialog';
import Input from './input';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Radio from './radio';
import RadioGroup from './radio-group';
import Switch from './switch';
import Form from './form';
import FormItem from './form-item';
import './fonts/iconfont.css';

// 存储组件列表
const components = [
    Button,
    Dialog,
    Input,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Switch,
    Form,
    FormItem,
];

const install = function (Vue) {
    // 遍历  全局注册所有组件
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

// 判断是否是直接引入文件, 如果是, 就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
};
