<template>
  <Layout>
    <label for="search">Search Posts: <input v-model="searchText"></label>
    <div v-if="$page.allWordPressPost.edges" class="uk-grid-small uk-text-center uk-grid" uk-grid="masonry:true">
      <div v-for="item in itemsSearched" :key="item.id" class="uk-width-1-3">
        <g-link :to="item.node.path">
          <h3 v-html="item.node.title" />
          <g-image :src="item.node.featuredMedia.url.src" /> 
        </g-link>
      </div>
    </div>
  </Layout>  
</template>

<page-query>
query Posts ($page: Int) {
  allWordPressPost (page: $page) {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        _id
        title
        path
        excerpt
        content
        featuredMedia {
          url
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  data: function () {
    return {
      searchText: ''
    }
  },
  computed : {
    itemsSearched : function(){
      const self = this;
      if( this.searchText == ''){
        return this.$page.allWordPressPost.edges;
      }
      return this.$page.allWordPressPost.edges.filter(function(item){
        const searchterm = self.searchText.toLowerCase();
        return item.node.content.toLowerCase().includes(searchterm) || item.node.title.toLowerCase().includes(searchterm);
      });
    }
  }
}
</script>

<style>
  ul.post-list {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul.post-list li {
    margin: 0 3% 20px 0;
    width: 30%;
  }
  ul.post-list li h3 {
    font-size: 1em;
    font-weight: normal;
  }
  ul.post-list li img {
    max-width: 100%;
  }


</style>
