<template>
    <div class="projectView">
        <a-row :gutter="20" class="waterfall">
            <a-col
                v-for="(item, index) in waterfallUl" 
                :key="index" 
                :xs="24" 
                :sm="12" 
                :md="8" 
                :lg="6" 
                :xl="6"
                :xxl="4">
                <div class="cell-item">
                    <div class="iconDiv">
                        <i class="iconfont" :class="item.icon"></i>
                    </div>
                    <img v-if="item.imgSrc" :src="item.imgSrc" alt="加载错误"  /> 
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-time">{{item.time}}</div>
                    <div class="item-dec">{{item.dec}}</div>
                    <ul class="item-opt">
                        <li v-for="(op,opIndex) in item.operate" :key="opIndex">
                            <i class="iconfont" :class="op.icon"></i>
                            <span>{{op.numb}}</span>
                        </li>
                    </ul>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
const pic1 = require('./../assets/img/pic1.jpg');
const pic2 = require('./../assets/img/pic2.jpg');
const pic3 = require('./../assets/img/pic3.jpg');
export default {
    data(){
        return{
            waterfallUl:[
                {
                    id: 0,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic1,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                },{
                    id: 1,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic2,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                },{
                    id: 2,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic3,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                },{
                    id: 0,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic1,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                },{
                    id: 1,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic2,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                },{
                    id: 2,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic3,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                },{
                    id: 0,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic1,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                },{
                    id: 1,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic2,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                },{
                    id: 2,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic3,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                },{
                    id: 2,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: pic1,
                    title: '学习记录',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的学习记录项目',
                    operate:[
                        {
                            icon: 'icon-icon',
                            numb: 360
                        },{
                            icon: 'icon-youxiang',
                            numb: 360
                        },{
                            icon: 'icon-fenxiang',
                            numb: 360
                        },{
                            icon: 'icon-dianzan',
                            numb: 360
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>

</style>