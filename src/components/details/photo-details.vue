<template>
  <div class="photodet">
     <div v-for="item in list" :key="item.id">
        <div>{{ item.title }}</div>
        <img :src="item.img_url" />
    </div>
  </div>
</template>
<script>
export default {
  name:'photodet',
  props:{
    list:{
            type:Array,
            default:() => []
        }
  },
  data(){
      return {
      }
  }
};
</script>
<style lang="less">
.photodet{
  width :100%;
  height: 100vh;
}
</style>
