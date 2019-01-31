<template>
  <div>
    <ul>
      <li v-for="{ node } in $static.categories.edges" :key="node.id">
        <a :href="node.path"><span v-html="node.title"/></a>
      </li>
    </ul>
  </div>
</template>

<static-query>
  query Categories ($static: Int) {
    categories: allWordPressCategory (page: $static, perPage: 100) {
      edges {
        node {
          id
          title
          slug
          path
        }
      }
    }
  }
</static-query>

<script>
export default {
  name: 'CategoriesList'
}
</script>