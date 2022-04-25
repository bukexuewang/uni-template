<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @tap="click" class="test">测试按钮</button>
    <HelloWorldVue></HelloWorldVue>
    <view>看上去还可以</view>
  </view>
  <input v-model="text" type="text" class="input" />
  <div>电话号码是: {{ appStore.phone }}</div>
  <uni-rate :size="18" v-model="rateValue" />
  <uni-link>123</uni-link>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store'

const appStore = useAppStore()

const title = ref('Hello')

const text = ref('kkone')

const rateValue = ref(1)

const getPhone = () => {
  return [1, ...new Array(10).fill(0).map(() => Math.floor(Math.random() * 10))].join('')
}

const click = () => {
  appStore.setUser({ phone: getPhone() })
}

const skip = () => {
  uni.navigateTo({ url: '/pages/home/index' })
}
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid pink;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.test {
  color: green;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
