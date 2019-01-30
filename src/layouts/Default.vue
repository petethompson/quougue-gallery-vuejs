<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link :to="{ name: 'home' }">Gridsome</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
        <g-link class="nav__link" :to="{ name: 'artists' }">Artists</g-link>
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
@import './../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
@import './../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
@import './../../node_modules/uikit/dist/css/uikit.min.css';
@import './../../node_modules/bulma/css/bulma.css';

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
}
.layout {
  max-width: 600px;
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
</style>
