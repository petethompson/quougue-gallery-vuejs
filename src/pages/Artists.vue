<template>
  <Layout>
    <div>

      <div class="uk-child-width-1-3@s uk-child-width-1-4@m uk-text-center" uk-grid="masonry: true">
      <div v-for="{ node } in $page.allArtist.edges" :key="node.id" class="uk-card uk-card-body">
        <h2 v-html="node.title"/>
        <g-link :to="node.path">
          <g-image
            :src="node.fields.image.src"
          />
        </g-link>
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
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)
export default {
  
}
</script>
