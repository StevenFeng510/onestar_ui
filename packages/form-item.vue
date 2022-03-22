<template>
    <div class="os-form-item">
        <label class="os-form-item__label" :style="{ width: this.Form.labelWidth }">
            {{ label }}
        </label>
        <div class="os-form-item__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OsFormItem',
    props: {
        label: String,
    },
    inject: ['Form'],
};
</script>

<style lang="scss">
.os-form-item {
    margin-bottom: 15px;
    .os-form-item__label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .os-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>
