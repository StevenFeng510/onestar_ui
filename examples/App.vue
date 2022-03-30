<template>
    <div id="app">
        <!-- 按钮测试 -->
        <os-button type="primary">按钮</os-button>
        <!-- 输入框测试 -->
        <os-input placeholder="请输入用户名" v-model="username" clearable></os-input>

        <!-- 开关测试 -->
        <os-switch
            v-model="active"
            name="username"
            active-color="#00b894"
            inactive-color="#ff7675"
        ></os-switch>

        <!-- 单选框测试 -->
        <os-radio-group v-model="gender">
            <os-radio label="1">男</os-radio>
            <os-radio label="2">女</os-radio>
            <os-radio label="3">体育</os-radio>
            <os-radio label="4">吃饭</os-radio>
        </os-radio-group>

        <!-- 复选框测试 -->
        <!-- <os-checkbox v-model="active" :color="color">是否选中</os-checkbox>

        <os-checkbox-group v-model="hobby">
            <os-checkbox label="篮球"></os-checkbox>
            <os-checkbox label="足球"></os-checkbox>
            <os-checkbox label="体育"></os-checkbox>
        </os-checkbox-group> -->
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            username: '',
            active: false,
            gender: '1',
        };
    },
};
</script>

<style lang="scss">
#app {
    .os-input {
        width: 180px;
    }
}
</style>
