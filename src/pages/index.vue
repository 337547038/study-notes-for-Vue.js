<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ul>
            <li>
                <router-link to="/plugin">plugin</router-link>
            </li>
            <li>
                <router-link to="/passValue">组件间传参</router-link>
            </li>
            <li>
                <router-link to="/alert">alert dialog</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Study notes for Vue.js'
            }
        }, mounted(){
           // this.mixin();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .hello{ margin: 50px }
    .hello ul{ margin: 30px }
    .hello li{ list-style: circle; line-height: 30px; }
    .hello li a{ font-size: 18px; }
     pre{padding: 10px; background: #f8f8f8;}
</style>
