<template>
    <div class="homeView">
        <a-carousel arrows>
            <div
                slot="prevArrow"
                slot-scope="props"
                class="custom-slick-arrow"
                style="left: 10px;zIndex: 1">
                <a-icon type="left-circle" />
            </div>
            <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
                <a-icon type="right-circle" />
            </div>
            <div v-for="(item,index) in imgData" :key="index" class="homeImg">
                <img :src="item" />
            </div>
        </a-carousel>
        <a-row :gutter="20" class="contactUl" typr="flex" justify="center">
            <a-col
                v-for="(item, index) in iconData" 
                :key="index"
                :xs="12" 
                :sm="12" 
                :md="8" 
                :lg="8" 
                :xl="8"
                :xxl="8">
                <i class="iconfont" :class="item.icon"></i>
                <span>{{item.name}}</span>
            </a-col>
        </a-row>
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
            imgData: [
                pic1,
                pic2,
                pic3,
            ],
            iconData: [
                {
                    icon: 'icon-qq',
                    name: '524572319'
                },{
                    icon: 'icon-weixin',
                    name: 'a524572319'
                },{
                    icon: 'icon-fenxiang',
                    name: '18010617947'
                }
            ],
            col: 4,
            data: [],
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
    },
    computed:{
          itemWidth(){
                let width = document.documentElement.clientWidth - 80;
                let marginLeft = Math.floor(10 * 0.5 * (width / 375));
                return ((width / this.col) - marginLeft); //#rem布局 计算宽度
          },
          gutterWidth(){
                let width = document.documentElement.clientWidth - 80;
                let marginLeft = Math.floor(10 * 0.5 * (width / 375));
                return marginLeft;   //#rem布局 计算x轴方向margin
          }
        },
        methods:{
            scroll(scrollData){
                console.log(scroll)
            },
            switchCol(col){
                this.col = col
                console.log('switchCol');
            },
            loadmore(index){
                    this.data = this.data.concat(this.data);
                    console.log('loadmore');
            }
        }
}
</script>

<style lang="less" scoped>
</style>