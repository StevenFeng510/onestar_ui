<template>
    <div class="os-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'OsCheckboxGroup',
    props: {
        value: {
            type: Array,
        },
    },
    provide() {
        return {
            CheckboxGroup: this,
        };
    },
};
</script>

<style></style>
