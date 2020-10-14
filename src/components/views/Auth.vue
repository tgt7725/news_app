<template>
    <Center>
         <h1>登录验证中……</h1>
    </Center>

 
</template>

<script>
import Center from "../Center"
import {mapState} from "vuex"
export default {
    components: {
        Center
    },
    computed: {
        ...mapState("loginUser", ["data","isLoading"])
    },
    methods:{
        handleLogin(){
            if(this.isLoading){
                return;
            }
            if(this.data){
                // console.log(this.data);
                if(this.$route.query.returnUrl){
                    this.$router.push(this.$route.query.returnUrl)
                }else{
                    this.$router.push({name: "Personal"});
                }
            }
            else {
                this.$router.push({name: "Login"})
            }
        }
    },
    watch: {
        isLoading: {
            immediate: true,
            handler(){
                this.handleLogin();
                // console.log("isloading");
            }
        },
        data: {
            immediate: true,
            handler(){
                this.handleLogin();
                // console.log("data");
            }
        }
    }
}
</script>

<style>

</style>