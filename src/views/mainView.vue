<template>
    <a-layout class="mainContent mainDiv">
        <a-layout-header>
            <a-row type="flex" justify="space-between">
                <a-col :span="8">
                     <a href="#"><i class="iconfont icon-menu"></i></a>
                </a-col>
                <a-col :span="8" class="textAlignC">
                     <span>· P K X Z M ·</span>
                </a-col>
                <a-col :span="8" class="textAlignR">
                    <a href="#"><i class="iconfont icon-fenxiang"></i></a>
                    <a href="#"><i class="iconfont icon-fangdajing"></i></a>
                    <a href="#"><i class="iconfont icon-yonghu"></i></a>
                </a-col>
            </a-row>
            <!-- <div>
                <a href="#"><i class="iconfont icon-menu"></i></a>
            </div>
            <div>
               <span>· P K X Z M ·</span>
            </div>
            <div>
                <a href="#"><i class="iconfont icon-fenxiang"></i></a>
                <a href="#"><i class="iconfont icon-fangdajing"></i></a>
                <a href="#"><i class="iconfont icon-yonghu"></i></a>
            </div> -->
        </a-layout-header>
        <a-layout-content>
           <ul class="menuUl">
               <li 
                    v-for="item in menuLi" 
                    :key="item.id" 
                    :class="(item.path === $route.path) ? 'activedLi' : ''">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </li>
           </ul>
           <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>
            <span>蜀ICP备19037002号</span>
            <span>
                <p>PKXZM</p>
                <p>©2019</p>
                <p>Created by RL</p>
            </span>
        </a-layout-footer>
    </a-layout>
</template>

<script>
export default {
    data(){
        return{
            menuLi:[
                {
                    id: 0,
                    name: '网站首页',
                    path: '/homeView'
                },{
                    id: 1,
                    name: '作品分享',
                    path: '/projectView'
                },{
                    id: 2,
                    name: '网站留言',
                    path: '/messageView'
                }
            ]
        }
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>

</style>