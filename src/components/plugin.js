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
                //console.log("组件开始加载")
            },
            methods: {
                mixin(){
                    console.log('mixin')
                }
            },
            mounted(){
                //调用代码着色设置，每个页面加载完成调用一次
                this.$nextTick(function () {
                    SyntaxHighlighter.defaults['toolbar'] = false;
                    SyntaxHighlighter.defaults['gutter'] = false;
                    SyntaxHighlighter.highlight();
                })
            }
        });
        // 4. 添加实例方法
        //引用 this.$myMethod()
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log('methodOptions')
        }
    }
}
