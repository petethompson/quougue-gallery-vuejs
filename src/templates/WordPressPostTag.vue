<template>
  <Layout>
    <h1>Tag: {{ $page.tag.title }} </h1>
    <ul class="post-list">
      <li v-for="post in postsInTag" :key="post.id">
        <h2 v-html="post.node.title"/>
        <p v-html="post.node.excerpt"/>
        <router-link :to="post.node.path">Read more</router-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query PostTag ($path: String, $page: Int) {
  tag: wordPressPostTag (path: $path) {
    title
    slug
  }
  posts: allWordPressPost (page: $page) {
    edges {
      node {
        id
        title
        excerpt
        path
        tags {
          slug
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    postsInTag: function () {
      const tag = this.$page.tag.slug;
      const postsArray = this.$page.posts.edges;
      const postsArrayInTag = postsArray.filter(function(post){
        var postTags = post.node.tags;
        for (var i = 0, len = postTags.length; i < len; i++) {
          return postTags[i].slug === tag
        }
      })
      return postsArrayInTag;
    }
  }
}
</script>
