<template>
  <Layout>
    <div>    
      <h1 class="uk-h1">News</h1>

      <Pager :info="$page.allWordPressPost.pageInfo"/>

      <div class="section">
        <div class="tile is-ancestor">
          <div class="tile is-8">
            <ul>
              <li class="post" v-for="{ node } in $page.allWordPressPost.edges" :key="node._id">
                <h2 class="uk-h2" v-html="node.title"/>
                <img v-if="node.featuredMedia" :src="node.featuredMedia.url.src" alt="" />
                <div v-html="node.fields.excerpt"/>
                <router-link :to="node.path">Read more</router-link>
              </li>
            </ul>
          </div>
          <div class="tile is-parent">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query News ($page: Int) {
  allWordPressPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        _id
        title
        path
        featuredMedia {
          url
        }
        fields {
          excerpt
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Sidebar,
    Pager
  }
}
</script>

<style>
  li.post {
    padding: 1em 0;
  }
</style>
