<template>
	<view>
		<!-- 帖子详情页详细信息 -->
		<common-list :item="info" isdetail @follow="follow" @doSupport="doSupport" @doComment="doComment" @doShare="doShare">
			<view>{{info.content}}</view>
			<view>
				<image v-for="(item,index) in images" @click="preview(index)" :src="item.url" class="w-100" mode="widthFix"></image>
			</view>
		</common-list>

		<divider></divider>
		<view class="p-2 font-md font-weight-bold">
			最新评论 3
		</view>
		<view class="px-2">
			<view class="uni-comment-list">
				<view class="uni-comment-face">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
				</view>
				<view class="uni-comment-body">
					<view class="uni-comment-top">
						<text>小猫咪</text>
					</view>
					<view class="uni-comment-content">支持国产，支持DCloud!</view>
					<view class="uni-comment-date">
						<view>2天前</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 占位 -->
		<view style="height: 100rpx;"></view>
		<bottom-input :focus="focus" @blur="blur" @submit="submit"></bottom-input>
		
		<more-share ref="share"></more-share>

	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	import bottomInput from '@/components/common/bottom-input.vue';
	import moreShare from '@/components/common/more-share.vue';
	import $T from '@/common/time.js';
	export default {
		components: {
			commonList,
			bottomInput,
			moreShare
		},
		data() {
			return {
				// 当前帖子信息
				info: {
					id: 0,
					user_id: 0,
					username: "昵称",
					userpic: "",
					newstime: 0,
					isFollow: false,
					title: "",
					titlepic: "",
					support: {
						type: "support", // 顶
						support_count: 0,
						unsupport_count: 0
					},
					comment_count: 0,
					share_num: 0,
					content: ""
				},
				images: [],
				comments: [],
				focus: false,
				reply_id: 0
			}
		},
		onLoad(e) {
			// 初始化
			if (e.detail) {
				this.__init(JSON.parse(e.detail))
			}
		},
		computed: {
			imagesList() {
				return this.images.map(item=>item.url) 
			}
		},
		onNavigationBarButtonTap() {
			this.$refs.share.open({
				title: this.info.title,
				shareText: this.info.title,
				href:"http://www.dishaxy.com",
				image: this.info.titlepic
			})
		},
		onBackPress() {
			this.$refs.share.close()
		},
		// #ifndef APP-PLUS
		// 微信小程序分享
		onShareAppMessage(res) {
			return {
			  title: this.info.title,
			  path: '/pages/detail/detail?detail='+JSON.stringify(this.info)
			}
		 },
		// #endif
		methods: {
			__init(data) {
				// 修改标题
				uni.setNavigationBarTitle({
					title: data.title
				})
				this.info = data
				this.info.content = ''
				// 请求api
				this.$H.get('/post/' + this.info.id).then(res => {
					this.info.content = res.detail.content
					this.images = res.detail.images

				})
				this.getComments()
			},
			// 点击评论
			doComment() {

			},
			// 点击分享
			doShare() {

			},
			// 关注
			follow() {
				this.info.isFollow = true
				uni.showToast({
					title: '关注成功'
				});
			},
			// 顶踩操作
			doSupport(e) {
				// 之前操作过
				if (this.info.support.type === e.type) {
					return uni.showToast({
						title: '你已经操作过了',
						icon: 'none'
					});
				}
				let msg = e.type === 'support' ? '顶' : '踩'
				// 之前没有操作过
				if (this.info.support.type === '') {
					this.info.support[e.type + '_count']++
				} else if (this.info.support.type === 'support' && e.type === 'unsupport') {
					// 顶 - 1
					this.info.support.support_count--;
					// 踩 + 1
					this.info.support.unsupport_count++;
				} else if (this.info.support.type === 'unsupport' && e.type === 'support') {
					// 顶 + 1
					this.info.support.support_count++;
					// 踩 - 1
					this.info.support.unsupport_count--;
				}
				this.info.support.type = e.type
				uni.showToast({
					title: msg
				});
			},
			// 预览图片
			preview(index) {
				// 预览图片
				uni.previewImage({
					current: index,
					urls: this.imagesList
				});
			},
			getComments() {
				this.$H.get('/post/' + this.info.id + '/comment')
					.then(res => {
						console.log(res);
						this.comments = this.__ArrSort(res.list)
						this.info.comment_count = this.comments.length
						uni.$emit('updateCommentsCount', {
							id: this.info.id,
							count: this.info.comment_count
						})
					})
			},
			// 提交评论
			submit(data) {
				console.log(data);
			},
			// 重新整理评论格式
			__ArrSort(arr, id = 0) {
				var temp = [],
					lev = 0;
				var forFn = function(arr, id, lev) {
					for (var i = 0; i < arr.length; i++) {
						var item = arr[i];
						if (item.fid == id) {
							item.lev = lev;
							temp.push({
								id: item.id,
								fid: item.fid,
								userid: item.user.id,
								userpic: item.user.userpic,
								username: item.user.username,
								time: $T.gettime(item.create_time),
								data: item.data,
							});
							forFn(arr, item.id, lev + 1);
						}
					}
				};
				forFn(arr, id, lev);
				return temp;
			},
			// 回复评论
			reply(id) {
				this.reply_id = id
				this.focus = true
			},
			// 输入框失去焦点
			blur() {
				this.reply_id = 0
				this.focus = false
			}
		}
	}
</script>

<style>

</style>
