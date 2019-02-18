<template>
  <Layout>
    <h1 v-html="$page.wordPressPost.title"/>
    <span>Categories: </span>
    <ul>
      <li v-for="category in $page.wordPressPost.categories" :key="category.id" >
        <router-link :to="category.path">
          {{ category.slug }}
        </router-link>
      </li>
    </ul>
    <div v-html="$page.wordPressPost.content"/>
    <span>Tags: </span>
    <ul class="tag-list">
      <li v-for="tag in $page.wordPressPost.tags" :key="tag.id" >
        <g-link :to="tag.path">{{ tag.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Post ($path: String) {
  wordPressPost (path: $path) {
    title
    content
    tags {
      id
      slug
      path
      title
    }
    categories {
      id
      slug
      path
    }
  }
}
</page-query>

<script>
export default {}
</script>

<style>
  ul.tag-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  ul.tag-list li a {
    padding: 0 1em;
    display: inline-block;
  }
  ul.tag-list li:first-child a {
    padding-left: 0;
  }
  ul.tag-list li:after {
    content: '|';
    display: inline-block;
  }
  ul.tag-list li:last-child:after {
    content: '';
  }
</style>