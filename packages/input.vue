<template>
    <div class="os-input" :class="{ 'os-input__suffix': showSuffix }">
        <!-- 如果传了show-password 判断是否 需要切换 密码的显示 -->
        <input
            class="os-input__inner"
            :class="{ 'is-disabled': disabled }"
            :disabled="disabled"
            :name="name"
            :placeholder="placeholder"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
            :value="value"
            @input="handleInput"
        />

        <span class="os-input__suffix" v-if="showSuffix">
            <i class="os-icon-delete" v-if="clearable && value" @click="clear"></i>
            <i
                class="os-icon-check-item"
                v-if="showPassword"
                @click="handlePassword"
                :class="{ 'os-icon-check-item-acitve': passwordVisible }"
            ></i>
        </span>
    </div>
</template>

<script>
export default {
    name: 'OsInput',
    data() {
        return {
            // 用于控制是否显示密码框
            passwordVisible: false,
        };
    },
    props: {
        placeholder: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        name: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String,
            default: '',
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        showPassword: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        showSuffix() {
            return this.clearable || this.showPassword;
        },
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        },
        clear() {
            // 清空输入框内的内容
            this.$emit('input', '');
        },
        handlePassword() {
            this.passwordVisible = !this.passwordVisible;
        },
    },
};
</script>

<style lang="scss" scoped>
.os-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .os-input__inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(cubic-bezier(0.645, 0.045, 0.355, 1));
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }

        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e8ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}

// 图标后缀样式
.os-input__suffix {
    .os-input__inner {
        padding-right: 30px;
    }
    .os-input__suffix {
        position: absolute;
        height: 100%;
        right: 10%;
        top: 0px;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all 0.3s;
        z-index: 900;
        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color 0.2s cubic-bezier(cubic-bezier(0.645, 0.045, 0.355, 1));
        }
        .os-icon-check-item-acitve {
            color: #409eff;
        }
    }
}
</style>
