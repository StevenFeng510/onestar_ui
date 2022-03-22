<template>
    <transition name="dialog-fade">
        <!-- 对话框的遮罩  self表示只有点击自己才触发-->
        <div class="os-dialog__wrapper" v-show="visible" @click.self="handleClose">
            <!-- 对话框 -->
            <div class="os-dialog" :style="{ width: width, marginTop: top }">
                <!-- 对话框头部 -->
                <div class="os-dialog__header">
                    <slot name="title">
                        <span class="os-dialog__title">{{ title }}</span>
                    </slot>
                    <button class="os-dialog__headerbtn" @click="handleClose">
                        <i class="os-icon-close"></i>
                    </button>
                </div>
                <!-- 对话框主体内容 -->
                <div class="os-dialog__body">
                    <slot></slot>
                </div>
                <!-- 对话框底部 -->
                <div class="os-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'OsDialog',
    props: {
        title: {
            type: String,
            default: '提示',
        },
        width: {
            type: String,
            default: '50%',
        },
        top: {
            type: String,
            default: '15vh',
        },
        visible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClose() {
            this.$emit('update:visible', false);
        },
    },
};
</script>

<style lang="scss" scoped>
// scoped会给当前组件的模版中的所有的元素都添加一个随机的属性
// 给当前的组件中所有的样式也添加一个对应的属性选择器
.os-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    .os-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;

        &__header {
            padding: 20px 20px 10px;
            .os-dialog__title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .os-dialog__headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .os-icon-close {
                    color: #909399;
                }
            }
        }

        &__body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            // 深度选择器 scss ::v-deep  less /deep/  css >>>
            // 想让选择的作用程度更深
            ::v-deep .os-button:first-child {
                margin-right: 20px;
            }
        }
    }
}

.os-button:first-child {
    margin-right: 15px;
}
.dialog-fade-enter-active {
    animation: fade 0.3s;
}

.dialog-fade-leave-active {
    animation: fade 0.3s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 100%;
        transform: translateY(0px);
    }
}
</style>
