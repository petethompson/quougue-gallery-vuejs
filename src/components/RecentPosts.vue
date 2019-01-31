<template>
  <div>
    <ul>
      <li v-for="{ node } in $static.recentposts.edges" :key="node.id">
        <a :href="node.path"><span v-html="node.title"/></a>
      </li>
    </ul>
  </div>
</template>

<static-query>
  query Posts ($static: Int) {
    recentposts: allWordPressPost (page: $static, perPage: 10) {
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
  name: 'RecentPosts'
}
</script>