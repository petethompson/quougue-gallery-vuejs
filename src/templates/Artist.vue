<template>
  <Layout>
    <h1 v-html="$page.artist.title"/>
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true" uk-lightbox="animation: slide">
      <div v-for="artwork in artworks" class="uk-card uk-card-body">
        <a :href="artwork.images[0].large_url" :data-caption='makeCaption(artwork)'>
        <img
          :src="artwork.images[0].medium_url"
        />
        </a>
        <p class="caption">{{ makeCaption(artwork) }}</p>
      </div>
    </div>
  </Layout>
  
</template>

<page-query>
query Artist ($path: String!) {
  artist (path: $path) {
    title
    id    
  }
}
</page-query>

<script>
import Vue from 'vue'
import ArtCloudService from '@/services/ArtCloudService'
import Glide from '@glidejs/glide'


export default {
  data () {
    return {
      artworks: [],
      isModalVisible: false
    }
  },
  mounted () {
    this.getArt()
  },
  methods: {
    getArt () { 
      var artistid = this.$page.artist.id;
      return ArtCloudService.fetchArtist(artistid).then(response => {
        this.artworks = response.data.artwork
      }).then(function(){
        new Glide('.glide', {
          perView: 1
        }).mount()
      })
    },
    makeCaption (artwork) {
      return artwork.artwork_name + ', ' + artwork.date + ', ' + artwork.medium + ', ' + artwork.height + '", ' + artwork.width + '"'
    }
  }
}
</script>
