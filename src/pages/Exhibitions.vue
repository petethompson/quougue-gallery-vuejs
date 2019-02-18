<template>
  <Layout>
    <div>
      <h1 class="uk-h1">Exhibitions</h1>

      <div class="section">
        <div class="tile is-ancestor">
          <div class="tile">
            <div class="uk-grid" uk-grid="masonry: true">
              <div class="post uk-width-1-3 uk-card" v-for="{ node } in $page.allExhibition.edges" :key="node._id">
                <h2 class="uk-h2" v-html="node.title"/>
                <img v-if="node.featuredImage" :src="node.featuredImage.src" alt="" />
                <router-link :to="node.path">Read more</router-link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Exhibitions ($page: Int) {
  allExhibition (page: $page) {
    edges {
      node {
        _id
        path
        title
        startDate
        endDate
        receptionDate
        featuredImage
      }
    }
    
  }
}
</page-query>

<script>

export default {
  components: {
  }
}
</script>
