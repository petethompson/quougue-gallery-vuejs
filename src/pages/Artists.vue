<template>
  <Layout>
    <div>

      <div class="uk-grid-small uk-text-center uk-grid" uk-grid="masonry: true">
        
          <div v-for="{ node } in $page.allArtist.edges" :key="node.id" class="uk-width-1-3">
            <div class="uk-card  uk-card-hover uk-card-body ">
              <h2 v-html="node.title"/>
              <g-link :to="node.path">
                <g-image
                  :src="node.fields.image.src"
                />
              </g-link>
            </div>
          </div>

      </div>
    </div>
  </Layout>
</template>

<page-query>
query Artists ($page: Int ) {
  allArtist ( page: $page) {
   	totalCount
    edges {
      node {
        id
        slug
        title
        path
        fields {
          image
          thumbnail
        }
      }
    }
  }
}
</page-query>


<script>

export default {
  
}
</script>
