<template>
  <div class="app-container">
    <h1>Hello App!</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #42b983;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #f0f0f0;
}

nav a.router-link-active {
  color: #42b983;
  font-weight: bold;
}

main {
  margin-top: 30px;
}
</style>
