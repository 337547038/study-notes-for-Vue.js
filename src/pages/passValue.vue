<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div style="border: 1px solid #ddd">
            <child content="内容" @toParent="toParent" :callBack="callBack"></child>
        </div>
        <p v-text="childText">this.$emit回传</p>
        <p v-text="callBackText">callBack回传</p>
        <h2>父组件传给子组件</h2>
        <p>1.子组件<br>
            <pre class="brush:js">
               onClick: function () {
                this.$emit('toParent','from child');
            }
            </pre>
        父组件监听toParent方法<br>
        <pre class="brush:html">
        &lt;child content="内容" @toParent="toParent">&lt;/child>
            </pre>
        </p>
        <p>2.通过回调，<span style="color:red">很奇怪没看到有在使用这种方法的</span><br>
            父组件绑定callBack<br>
            <pre class="brush:html">
            &lt;child content="内容" :callBack="callBack"&gt;&lt;/child&gt;</pre>
        子组件回调<br>
        <pre class="brush:js">
            this.callBack('callBck from child')
            </pre>
        </p>
        <p>&nbsp;</p>
        <p>使用方法1时，怎么判断参数toParent有没传了，遇到这情况还要多加一个参数用于告诉子组件是否绑定了toParent方法，方法2却不用。如
            <pre class="brush:js">
        if (true) {
            //逻辑,这里不能直接判断父组件有没绑定了toParent
            this.$emit('toParent')
        } else {
            this.$emit('toParent')
        }
</pre>

        </p>
        <h2>子组件修改props值</h2>
        <p>props是单向数据流的，有时候需要在子组件里修改，并要通知父组件更新状态，如弹窗组件，通过父组件传show来显示或隐藏</p>
        <pre class="brush:js">
            this.$emit('update:show', false);
        </pre>
    </div>
</template>

<script>
    import child from '../components/passValue'
    export default {
        data () {
            return {
                msg: '组件间传值',
                childText: '',
                callBackText: ''
            }
        },
        components: {child},
        events: {},
        methods: {
            //子组件事件
            toParent: function (txt) {
                //console.log('to parent,' + a);
                this.childText = txt;
            },
            callBack(txt){
                this.callBackText = txt
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
