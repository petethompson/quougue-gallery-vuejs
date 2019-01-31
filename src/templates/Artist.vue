<template>
  <Layout>
    <div>

      <div class="uk-grid uk-text-center" uk-grid="masonry: true" uk-lightbox="animation: slide">
        <div v-for="artwork in $page.artist.artwork" :key="artwork.artworkId" class="uk-width-1-3">
          <div class="uk-card-hover"> 
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
export default {
}
</script>

<style>
  
</style>