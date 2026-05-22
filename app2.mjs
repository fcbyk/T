import { createApp, defineComponent, ref, computed, watch, onMounted} from "vue"

/**
 * 在定义 Vue 组件时提供类型推导的辅助函数
 * https://cn.vuejs.org/api/general.html#definecomponent
 * 
 * 第一个参数是一个组件选项对象。返回值将是该选项对象本身
 * 该函数实际上在运行时没有任何操作，仅用于提供类型推导
 */
const App = defineComponent({
    // 使用组合式 API

    // 模板
    template: `
    <h1>App2</h1>
    <div v-highlight>{{ message }}</div>
    <button @click="increment">{{ count }}</button>
    `,

    // 自定义指令在组合式 API 中依然可以在 directives 选项中定义
    directives: {
        highlight(el) {
            el.style.backgroundColor = 'yellow'
        }
    },

    // setup 是组合式 API 的入口
    setup() {
        // 数据 (对应 data)
        const message = ref('Hello vue!')
        const count = ref(0)

        // 方法 (对应 methods)
        const increment = () => {
            count.value++
        }

        // 计算属性 (对应 computed)
        const countPlusFive = computed(() => {
            return count.value + 5
        })

        // 侦听器 (对应 watch)
        watch(count, (newVal, oldVal) => {
            console.log('count changed', newVal, oldVal)
            console.log('countPlusFive', countPlusFive.value)
        })

        // 生命周期钩子 (对应 created, mounted)
        // 注意：Vue 3 中 setup() 执行时机相当于 beforeCreate 和 created
        console.log('app created')
        
        onMounted(() => {
            console.log('app mounted')
        })

        // 必须返回要在模板中使用的变量和方法
        return {
            message,
            count,
            increment,
            countPlusFive
        }
    }
})

createApp(App).mount('#app')