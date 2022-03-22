<template>
    <button
        class="os-button"
        :class="[
            `os-button--${type}`,
            {
                'is-circle': circle,
                'is-round': round,
                'is-plain': plain,
                'is-disabled': disabled,
            },
        ]"
        :disabled="disabled"
        @click="handleClick"
    >
        <i v-if="icon" :class="icon"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'OsButton',
    props: {
        type: {
            // props 校验  数据类型为字符串
            type: String,
            default: 'default',
        },
        plain: {
            type: Boolean,
            default: false,
        },
        round: {
            type: Boolean,
            default: false,
        },
        circle: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        },
    },
};
</script>

<style lang="scss" scoped>
// 初始样式
.os-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    -webkit-appearance: none;
    box-sizing: border-box;
    outline: none;

    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none; //禁止文字被选中
    -webkit-user-select: none; //禁止文字被选中
    -ms-user-select: none; //禁止文字被选中

    padding: 12px 20px;
    font-size: 14px;
    border-radius: 7px;
    &:hover,
    &:focus {
        background: #3498db;
        border-color: #3498db;
        color: #fff;
    }
}

.os-button--primary {
    color: #fff;
    border-color: #369bff;
    background-color: #369bff;

    &:hover,
    &:focus {
        background: #2172a8;
        border-color: #2172a8;
        color: #fff;
    }
}

.os-button--success {
    color: #fff;
    background-color: #2ecc71;
    border-color: #2ecc71;

    &:hover,
    &:focus {
        background: #27ae60;
        border-color: #27ae60;
        color: #fff;
    }
}

.os-button--info {
    color: #fff;
    background-color: #95a5a6;
    border-color: #95a5a6;

    &:hover,
    &:focus {
        background: #7f8c8d;
        border-color: #7f8c8d;
        color: #fff;
    }
}

.os-button--warning {
    color: #fff;
    background-color: #f1c40f;
    border-color: #f1c40f;

    &:hover,
    &:focus {
        background: #f39c12;
        border-color: #f39c12;
        color: #fff;
    }
}

.os-button--danger {
    color: #fff;
    background-color: #e74c3c;
    border-color: #e74c3c;

    &:hover,
    &:focus {
        background: #c0392b;
        border-color: #c0392b;
        color: #fff;
    }
}

// 半透明样式

.os-button--primary.is-plain {
    color: #3498db;
    background-color: #c6e2ff;
    border-color: #c6e2ff;

    &:hover,
    &:focus {
        background: #3498db;
        border-color: #3498db;
        color: #fff;
    }
}

.os-button--success.is-plain {
    color: #00b894;
    background-color: #55efc4;
    border-color: #55efc4;

    &:hover,
    &:focus {
        background: #00b894;
        border-color: #00b894;
        color: #fff;
    }
}

.os-button--info.is-plain {
    color: #636e72;
    background-color: #dfe6e9;
    border-color: #b2bec3;

    &:hover,
    &:focus {
        background: #b2bec3;
        border-color: #b2bec3;
        color: #fff;
    }
}

.os-button--warning.is-plain {
    color: #fdcb6e;
    background-color: #ffeaa7;
    border-color: #ffeaa7;

    &:hover,
    &:focus {
        background: #fdcb6e;
        border-color: #fdcb6e;
        color: #fff;
    }
}

.os-button--danger.is-plain {
    color: #e17055;
    background-color: #fab1a0;
    border-color: #fab1a0;

    &:hover,
    &:focus {
        background: #e17055;
        border-color: #e17055;
        color: #fff;
    }
}

// 圆角样式
.os-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

// 圆形样式
.os-button.is-circle {
    border-radius: 50%;
    padding: 10px;
}

.os-button [class*='os-icon-'] + span {
    margin-left: 5px;
}

.os-button.is-disabled {
    transition: 999999s;
    opacity: 0.5;
    cursor: not-allowed;
}
</style>
