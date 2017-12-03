<template>
    <div class="alert" v-if="isShow">
        <p>{{content}}</p>
        <button @click="click">confirm</button>
    </div>
</template>

<script>
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
</script>
