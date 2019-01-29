<template>
  <Layout>
    <div>
      <h2 v-html="$page.artist.title" />
      <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true" uk-lightbox="animation: slide">
        <div v-for="artwork in $page.artist.artwork" :key="artwork.artworkId" class="uk-card uk-card-body"> 
           <a :href="artwork.artworkMediumImage.src" :data-caption='artwork.artworkName'>
          <g-image
            :src="artwork.artworkMediumImage.src"
          />
          </a>
          <p>{{ artwork.artworkName }}</p>
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
