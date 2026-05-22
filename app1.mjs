import { createApp } from "vue"

// 根组件配置对象（选项式API）
createApp({
    // 模板
    template: `
    <h1>App1</h1>
    <div v-highlight>{{ message }}</div>
    <button @click="increment">{{ count }}</button>
    `,

    // 数据
    data() {
        return {
            message: 'Hello vue!',
            count: 0
        }
    },

    // 计算属性
    computed: {
        countPlusFive() {
            return this.count + 5
        }
    },

    // 方法
    methods: {
        increment() {
            this.count++
        }
    },

    // 生命周期钩子
    created: () => console.log('app created'),
    mounted: () => console.log('app mounted'),

    // 侦听器
    watch: {
        count(newVal, oldVal) {
            console.log('count changed', newVal, oldVal)
            console.log('countPlusFive',this.countPlusFive)
        }
    },

    // 指令
    directives: {
        highlight(el) {
            el.style.backgroundColor = 'yellow'
        }
    }

    /**
     * 更多配置选项请参考 Vue 官方文档
     * https://cn.vuejs.org/api/options-state.html
     */
}).mount('#app')