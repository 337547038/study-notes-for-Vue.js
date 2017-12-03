import alert from '../components/alert.vue'
export default {
    install: function (Vue, options) {
        //注册全局组件
        Vue.component(alert.name, alert);
        //添加全局API
        Vue.prototype.$alert = function (options) {
            var message = Vue.extend(alert);
            const propsData = Object.assign({}, options);
            var component = new message({
                propsData
            }).$mount();
            /*var component = new message({
             data:options
             }).$mount()*/
            document.body.appendChild(component.$el)
        }
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(alert)
}