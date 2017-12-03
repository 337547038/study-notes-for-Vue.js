<template>
    <transition name="fade">
        <div class="kiko-message" v-if="isShow">
            {{message}}
            <p>props:{{propsName}}</p>
            213123131
            <p @click="click">click</p>
        </div>
    </transition>
</template>

<script type="text/javascript">

    export default {
        name: 'kiko-message',
        data () {
            return {
                message: '',
                time: 3000,
                isShow: true
            }
        },
        props:["propsName",'callBack'],
        mounted () {
            //this.close()
        },
        methods: {
            close () {
                var that = this
                window.setTimeout(function() {
                    that.isShow = false
                }, this.time);
            },
            click(){
                //this.$emit('click','a')
                this.callBack('a')
            }
        }
    }
</script>