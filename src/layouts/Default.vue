<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link :to="{ name: 'home' }">Quogue Gallery Vuejs Example</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
        <g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
        <g-link class="nav__link" :to="{ name: 'artists' }">Artists</g-link>
        <g-link class="nav__link" :to="{ name: 'news' }">News</g-link>
      </nav>
    </header>
    <slot/>
    <footer>
      <span class="copyright">&copy;2019 Quogue Gallery. All rights reserved.</span>
    </footer>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
}
a {
  color:#ef4136;
}
a:hover {
  color:#ef4136;
  text-decoration: none;
}
.layout {
  max-width: 1280px;
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
.uk-lightbox {
  background: #fff;
}
.uk-lightbox-button {
  color: #333;
  background: transparent;
}
.uk-lightbox-toolbar {
  background: transparent;
  color: #333;
}
.uk-lightbox-toolbar.uk-lightbox-caption {
  background: rgba(255,255,255,0.5);
  color: #333;
}
.uk-lightbox-caption,
.uk-lightbox-toolbar-icon {
  color: #333;
}
span.copyright {
  font-size: 13px;
  color: #999;
}
</style>
