<template>
	<view>
		<!-- 导航 -->
		<uni-nav-bar :border="false" :fixed="true" :statusBar="true" @click-right="openAddInput">
			<view class="flex align-center justify-center font-weight-bold w-100">
				<view class="mx-1" @click="changeTab(index)"
				v-for="(item,index) in tabBars" :key="index"
				:class="tabIndex === index ? 'font-lg text-main' : 'font-md text-light-muted'">
					{{item.name}}
				</view>
			</view>
			<text slot="right" class="iconfont icon-fatie_icon"></text>
		</uni-nav-bar>
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[{
					name:"关注"
				},{
					name:"话题"
				}]
			}
		},
		methods: {
			// 打开发布页
			openAddInput(){
				uni.navigateTo({
					url: '../add-input/add-input',
				});
			},
			// 切换选项卡
			changeTab(index){
				this.tabIndex = index
			}
		}
	}
</script>

<style>

</style>
