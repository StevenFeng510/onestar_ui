<template>
    <div class="os-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'OsForm',
    props: {
        model: {
            type: Object,
            // 意思是使用form组件 必须传model
            required: true,
        },
        labelWidth: {
            type: String,
            default: '80px',
        },
    },
    provide() {
        return {
            Form: this,
        };
    },
};
</script>

<style></style>
