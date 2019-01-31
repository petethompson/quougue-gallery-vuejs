<template>
  <Layout>
    <div>
      <h1 v-html="$page.artist.title" />
      <div class="uk-grid uk-text-center boom" uk-grid="masonry: true" uk-lightbox>
        <div v-for="artwork in $page.artist.artwork" :key="artwork.artworkId" class="uk-width-1-4">
          <div class="uk-card-hover uk-card-body uk-card"> 
            <g-link class="uk-inline" :href="artwork.artworkMediumImage.src" :data-caption='artwork.artworkName'>
              <g-image
                :src="artwork.artworkMediumImage.src"
              />
            </g-link>
            <p>{{ artwork.artworkName }}</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  
</template>

<page-query>
query Artist($path: String) {
  artist(path: $path) {
    title
    artwork {
      artworkName
      artworkId
      artworkMediumImage
    }
  }
}
</page-query>

<script>
import UIkit from 'uikit'
export default {
  mounted() {
    UIkit.lightbox('.boom');
  }
}
</script>

<style>
  
</style>