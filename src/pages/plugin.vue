<template>
    <div>
        <h1>{{msg}}</h1>
        <p>首先要引入，一般放在main.js里，其他页面直接使用<br>
            <pre class="brush:js">
            import Vue from 'vue'
            Vue.use(plugin)
        </pre>
        </p>
        <p>在控制台输出结果</p>
        <p @click="method1">1.点击执行添加全局方法或属性，引用 Vue.myGlobalMethod()</p>
        <p>2.添加全局资源,全局过滤器 {{test | format}}</p>
        <p @click="method4">4.点击执行添加实例方法，使用 this.$myMethod();</p>
   <pre class="brush:js">
export default {
    install: function (Vue, options) {
        // 1. 添加全局方法或属性
        //引用时首先要导入Vue，如（四种方法都是一样）
        // import plugin from './plugin'
        //Vue.use(plugin)
        //引用 Vue.myGlobalMethod()
        Vue.myGlobalMethod = function () {
            console.log('myGlobalMethod')
        };
        // 2. 添加全局资源
        //这里定义全局过滤器，引用{{msg | format}}
        Vue.filter('format', function (value) {
            return value + '.00'
        });
        //3.注入组件 然后这里的代码会在每个组件（包括根组件）的created执行之前执行。
        Vue.mixin({
            created: function () {
                console.log("组件开始加载")
            }
        });
        // 4. 添加实例方法
        //引用 this.$myMethod()
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log('methodOptions')
        }
    }
}

   </pre>
    </div>
</template>
<script>
    import Vue from 'vue'
    import plugin from '../components/plugin'
    Vue.use(plugin)
    export default {
        data(){
            return {
                msg: "Vue.js plugin",
                test: '100'
            }
        },
        mounted(){

        },
        methods: {
            method1()
            {
                Vue.myGlobalMethod()
            },
            method4(){
                this.$myMethod();
            }
        }
    }
</script>