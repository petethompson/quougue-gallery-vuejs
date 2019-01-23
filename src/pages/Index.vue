<template>
  <Layout>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="slide in slides" class="glide__slide">
            <img :src="slide.images[0].large_url" alt="">
            <p class="caption">{{ slide.artist_name }}, {{ slide.artwork_name }}, {{ slide.date }}, {{slide.medium}}, {{slide.height}}" x {{slide.width}}"</p>
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
    

    <div class="page-content" v-html="$page.wordPressPage.content" />

  </Layout>
</template>

<page-query>
query Page ($id: String = "/pages/home") {
  wordPressPage (path: $id) {
    title
    featuredMedia {
      url
    }
    content
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import ArtCloudService from '@/services/ArtCloudService'
import Glide from '@glidejs/glide'
export default {
  components: {
    Pager
  },
  data () {
    return {
      slides: []
    }
  },
  mounted () {
    this.getCarouselData()
  },
  methods: {
    getCarouselData () {
      return ArtCloudService.fetchHomepageImages().then(response => {
        this.slides = response.data
      })
      .then( () => {
        new Glide('.glide', {
          type: 'carousel',
          perView: 1
        }).mount()
      })
    }
  }
}
</script>

<style>
  .glide {
    width: 600px;
    margin: 0 auto;
  }
  .glide__slide {
    text-align: center;
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