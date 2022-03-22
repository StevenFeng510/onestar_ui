<template>
    <div class="radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'OsRadioGroup',
    provide() {
        return {
            RadioGroup: this,
        };
    },
    props: {
        // os-radio-group 接收到了 value值
        // 还需要触发 当前组件的input时间
        // provide 与 inject  provider/ consumer  祖孙之间的组件通信
        value: null,
    },
};
</script>

<style></style>
