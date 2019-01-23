<template>
  <div>
    <Layout>

      <div class="uk-child-width-1-3@s uk-child-width-1-4@m uk-text-center" uk-grid="masonry: true">
      <div v-for="{ node } in $page.allArtist.edges" :key="node.id" class="uk-card uk-card-body">
        <h2 v-html="node.title"/>
        <router-link :to="node.path">
          <img
            :src="node.fields.image.src"
          />
          </router-link>
      </div>

      </div>
    </Layout>
  </div>
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
  
};
</script>
