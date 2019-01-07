<template>
    <div id="index">
        <div class="show">
         <h2>欢迎来到vue.js的世界</h2>
        </div>
    </div>
</template>
<script>
export default {
    name:'index',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
#index{
    background:url(../assets/2013032913283560.jpg) no-repeat;
    background-size: contain;
    position: relative;
    width: 800px;
    height: 800px;
    margin-top: 50px;
    margin-left: 250px;
}
.show{
    width: 500px;
    height: 300px;
    position: absolute;
    background: rgba(255,255,255,0.2);
    top: 50%;
    left:39%;
    margin-top:-250px;
    margin-left: -150px;
    text-align: center;
    line-height: 300px;
    color: #fff;

}

</style>
