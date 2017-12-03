<template>
    <div>
        <p>子组件定义props接收即可</p>
        <p>接收到的参数title：{{title}}</p>
        <p>接收到的参数content：{{content}}</p>
        <p>
            <button @click="onClick">点击回值给父组件</button>
            <button @click="onClick2">直接通过回调</button>
        </p>
       
    </div>
</template>
<script>
    export default {
        name: 'passValue',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        props: ['title', 'content','callBack'],
        methods: {
            onClick: function () {
                this.$emit('toParent','from child');
            },
            onClick2() {
                this.callBack('callBck from child');
            }
        },
        mounted(){

        }
    }
</script>