<template>
    <div>
        <h1>alert dialog</h1>
        <p>1、import进来，这个一般放在main.js里</p>
        <pre class="brush:js">
    import Vue from 'vue'
    import alert from '../components/alert.js'
    Vue.use(alert)
        </pre>
        <p>2、引用</p>
        <pre class="brush:js">
            this.$alert({
                propsName: '参数',
                confirm: function (a) {
                    console.log(`click ok ${a}`)
                }
            });
        </pre>
        <p>3、示例</p>
        <p><a @click="openAlert" href="javascript:;">click here open alert</a></p>
        <h2>实现代码：</h2>
        <p>1、components下新建alert.vue</p>
        <pre class="brush:html">
    &lt;div class="alert" v-if="isShow">
        &lt;p v-text="content">&lt;/p>
        &lt;button @click="click">confirm&lt;/button>
    &lt;/div>
</pre>
 <pre class="brush:js">
    export default {
        name: 'alert',
        data () {
            return {
                isShow: true
            }
        },
        props: ["confirm", 'content'],
        mounted () {
            //this.close()
        },
        methods: {
            click(){
                //this.$emit('click','a')
                this.isShow = false;
                this.confirm('callBack');
            }
        }
    }
        </pre>
        <p>2、components下新建alert.js</p>
        <pre class="brush:js">
import alert from '../components/alert.vue'
export default {
    install: function (Vue, options) {
        //注册全局组件(根据情况)
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
/*对于那些没有在应用中使用模块化系统的用户，他们往往将通过&lt;script>标签引用你的插件，并期待插件无需调用Vue.use()便会自动安装 。你可以在插件最后添加如下几行代码来实现自动安装：*/
//如果Vue是全局对象自动安装插件
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(alert)
}
        </pre>
        <p>实现了最基本的alert dialog</p>
    </div>
</template>
<script>
    import Vue from 'vue'
    import alert from '../components/alert.js'
    Vue.use(alert)
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {
            openAlert(){
                this.$alert({
                    content: 'this is alert content',
                    confirm: function (a) {
                        console.log(`click ok ${a}`)
                    }
                });
            }
        },
        mounted(){
        }
    }
</script>
<style>
    .alert{ position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 400px; box-shadow: 0 0 3px #ddd; border-radius: 5px; z-index: 10; background: #fff; text-align: center; padding: 10px 0 }
</style>