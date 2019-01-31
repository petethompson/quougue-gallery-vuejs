<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="node in $static.allHomeSlide.edges" :key="node.id" class="glide__slide">
          <div>
            <img :src="node.node.imageLarge.src" alt="">
            <p class="caption">{{ node.node.imageCaption }}"</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
        </svg>
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<static-query>
query HomeSlides ($page: Int) {
   allHomeSlide(page: $page, perPage: 100) {
    edges {
      node {
        id
        imageLarge
        imageThumb
        imageCaption
      }
    }
  }
}
</static-query>

<script>
import Glide from '@glidejs/glide'

export default {
  name: "HomeSlides",
  mounted () {
    new Glide('.glide', {
      type: 'carousel',
      perView: 1
    }).mount()
  }
}
</script>

<style>
  @import './../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
  @import './../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
  .glide {
    width: 600px;
    margin: 0 auto;
  }
  .glide__slide {
    text-align: center;
    max-height: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .glide__slide img {
    max-height: 540px;
  }
  .glide__arrow {
    background: rgba(255,255,255,.5);
    border-radius: 50%;
    border: none;
    width: 48px;
    height: 48px;
  }
  .glide__arrow svg {
    fill: rgba(0,0,0,0.5)
  }
  .page-content {
    margin: 3em 0;
  }
</style>