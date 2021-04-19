<template>
  <div class="photo-list">
      <div class="nav-fa">
         <div class="nav">
            <span v-for="item in navlist" :key="item.id" @click="getSortPicture(item.id)">{{item.title}}</span>
          </div>
      </div>
    <photolist :list='sortList' class="zi"></photolist>
  </div>
</template>
<script>
import { listObj } from '../../server';
import photolist from '../details/photo-details'
// import { listObj } from '../../server'
export default {
  name:'photo-list',
  data(){
      return {
          navlist:[],
          sortList:[],
      }
  },
  methods:{
    //  getPhotolist(){
    //    listObj.getphoto().then(res =>{
    //      console.log(res)
    //    })
    //  }
    gettpnav(){
      listObj.getnav().then(res =>{
       res.message.unshift({title:'全部',id:0});
        this.navlist=res.message;
        this.sortList = res.message;
      })
    },
    getSortPicture(id){
      listObj.getphoto(id).then(res =>{
        this.sortList = res.message;
      })
    }
  },
  mounted(){
      // this.getPhotolist();
      this.gettpnav(),
      this.getSortPicture(0)
  },
  components:{
    photolist
  }
};
</script>
<style lang="less">
  .photo-list{
    padding:.1rem;
    width:100%;
    height: auto;
    font-size: .17rem;
    .nav-fa{
      width:100%;
      height:auto;
      overflow: hidden;
      .nav{
      width: auto;
      height: .3rem;
      white-space: nowrap;
      overflow-x:auto;
      // font-size: .15rem;
      span{
        color:pink;
        padding: .03rem;
      }
    }
    }
    
    .zi{
      padding-top:.1rem;
      padding:.05rem;
      font-size: .16rem;
      color:salmon;
      background-color: gray;
      overflow-y:auto;
    }
  }
</style>
