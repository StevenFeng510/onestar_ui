<template>
    <label for="core" class="os-switch" @click="handleClick" :class="{ 'is-checked': value }">
        <span class="os-switch__core" ref="core" id="core">
            <span class="os-switch__button"></span>
        </span>
        <input type="checkbox" class="os-switch__input" :name="name" ref="input" />
    </label>
</template>

<script>
export default {
    name: 'OsSwitch',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        activeColor: {
            type: String,
            default: '',
        },
        inactiveColor: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
    },
    methods: {
        async handleClick() {
            this.$emit('input', !this.value);
            /*
             * 点击的时候还需要修改背景色
             * PS: 需要等待value发生了改变, 在setColor
             * 数据修改后, 等待DOM更新, 在修改按钮的颜色
             */
            await this.$nextTick();
            this.setColor();
            this.$refs.input.checked = this.value;
        },
        setColor() {
            if (this.activeColor || this.inactiveColor) {
                let color = this.value ? this.activeColor : this.inactiveColor;
                this.$refs.core.style.borderColor = color;
                this.$refs.core.style.backgroundColor = color;
            }
        },
    },
    mounted() {
        // 修改开关颜色
        this.setColor();
        // 控制checkbox
        this.$refs.input.checked = this.value;
    },
};
</script>

<style lang="scss" scoped>
.os-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20%;
    vertical-align: middle;
    .os-switch__input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }
    .os-switch__core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color 0.3s, background 0.3s;
        vertical-align: middle;
        .os-switch__button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all 0.3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}
.os-switch.is-checked {
    .os-switch__core {
        border-color: #409eff;
        background-color: #409eff;
        .os-switch__button {
            transform: translateX(20px);
        }
    }
}
</style>
