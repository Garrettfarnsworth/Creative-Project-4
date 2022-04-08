<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/form">Haiku</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/artwork">Art</router-link> 
    </nav>
    <router-view/>
    <footer>
      <div class="footericon">
        <img src="/images/SlothIcon.svg" alt="Sloth Footer Icon">
      </div>
      <div class="footer-wrapper">
        <a href="https://github.com/Garrettfarnsworth/Creative-Project-4" target="_blank">GitHub Repository</a><br><br>
        <p>&copy; Garrett Farnsworth 2022</p>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}

</style>
