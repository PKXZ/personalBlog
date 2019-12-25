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
export default {
    data(){
        return{
            
            waterfallUl:[
                {
                    id: 0,
                    icon: 'icon-tupian',
                    type: 'img',
                    imgSrc: 'http://pic1.win4000.com/wallpaper/4/59cde11154833.jpg',
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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
                    imgSrc: "http://pic1.win4000.com/wallpaper/d/5893e0a438d76.jpg",
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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
                    imgSrc: "http://photo.16pic.com/00/47/75/16pic_4775024_b.jpg",
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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
                    imgSrc: 'http://pic1.win4000.com/wallpaper/4/59cde11154833.jpg',
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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
                    imgSrc: "http://pic1.win4000.com/wallpaper/d/5893e0a438d76.jpg",
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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
                    imgSrc: "http://photo.16pic.com/00/47/75/16pic_4775024_b.jpg",
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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
                    imgSrc: 'http://pic1.win4000.com/wallpaper/4/59cde11154833.jpg',
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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
                    imgSrc: "http://pic1.win4000.com/wallpaper/d/5893e0a438d76.jpg",
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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
                    imgSrc: "http://photo.16pic.com/00/47/75/16pic_4775024_b.jpg",
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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
                    imgSrc: "http://photo.16pic.com/00/47/75/16pic_4775024_b.jpg",
                    title: '个人博客',
                    time: '2019.12.08',
                    dec: '采用BS架构，VueJs作为框架，ElementUI作为ui库的一款独立自主开发的个人博客项目',
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