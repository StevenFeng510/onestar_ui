<template>
    <label class="os-radio" :class="{ 'is-checked': label === model }">
        <span class="os-radio__input">
            <span class="os-radio__inner"></span>
            <input
                type="radio"
                class="os-radio__original"
                :value="label"
                :name="name"
                v-model="model"
            />
        </span>
        <span class="os-radio__label">
            <slot>
                <template>
                    {{ label }}
                </template>
            </slot>

            <!-- v-if="!$slots.default" -->
        </span>
    </label>
</template>

<script>
export default {
    name: 'OsRadio',
    inject: {
        RadioGroup: {
            default: '',
        },
    },
    props: {
        label: {
            type: [String, Number, Boolean],
            default: '',
        },
        value: null,
        name: {
            type: String,
            default: '',
        },
    },
    computed: {
        model: {
            get() {
                // 还要从this.RadioGroup.value中拿值
                return this.isGroup ? this.RadioGroup.value : this.value;
            },
            set(value) {
                //  触发父组件给当前组件注册的input事件
                this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value);
            },
        },
        isGroup() {
            // 用于判断radio是否被radioGroup所包裹
            // !! 变为布尔值
            return !!this.RadioGroup;
        },
    },
};
</script>
<style lang="scss">
.os-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .os-radio__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .os-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transfrom 0.15s ease-in;
            }
        }

        .os-radio__original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    .os-radio__label {
        font-size: 14px;
        padding-left: 10px;
    }
}

.os-radio.is-checked {
    .os-radio__input {
        .os-radio__inner {
            border-color: #74b9ff;
            background: #74b9ff;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
    .os-radio__label {
        color: #74b9ff;
    }
}
</style>
