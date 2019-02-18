<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link :to="{ name: 'home' }">Quogue Gallery</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
        <g-link class="nav__link" :to="{ name: 'artists' }">Artists</g-link>
        <g-link class="nav__link" :to="{ name: 'news' }">News</g-link>
        <g-link class="nav__link" :to="{ name: 'exhibitions' }">Exhibitions</g-link>
        <g-link class="nav__link" :to="{ name: 'search' }">Search</g-link>
      </nav>
    </header>
    <slot/>
  </div>

</template>

<script>
export default {
  
}
</script>

<style>

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
}
p {
  margin: 1em 0 !important;
}
.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav__link {
  margin-left: 20px;
}

  .content ul {
    padding: 0;
    margin: 0;
  }
  ul li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>