<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
            <!-- 写在插槽上的属性会作为插槽的 props -->
            <slot name="t" text="Hello, World!"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    background-color: #42b983;
    color: white;
    padding: 20px;
    text-align: center;
}

main {
    flex: 1;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

footer {
    background-color: #f5f5f5;
    padding: 15px;
    text-align: center;
    color: #666;
}
</style>