<template>
  <Layout>
    <HomeSlides/>
    <div class="content" v-html="$page.wordPressPage.content"/>
  </Layout>
</template>

<page-query>
query Page ($id: String = "/pages/home") {
  wordPressPage (path: $id) {
    title
    featuredMedia {
      url
    }
    content
  }
}
</page-query>

<script>
import HomeSlides from "~/components/HomeSlides"
export default {
  components: {
    HomeSlides
  }
}
</script>
<style>
  .content {
    margin-top: 3em
  }
</style>