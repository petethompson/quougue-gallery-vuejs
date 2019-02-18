<template>
  <Layout>
    <div class="exhibition-single">
      <h1 v-html="$page.exhibition.title" />
      <img class="featuredImage" v-if="$page.exhibition.featuredImage" :src="$page.exhibition.featuredImage.src" alt="" />
      <h2>Start Date</h2>
      <p v-html="convertDate($page.exhibition.startDate)" />
      <h2>Opening Reception</h2>
      <p v-html="$page.exhibition.receptionDate" />
    </div>
  </Layout>
</template>

<page-query>
query Exhibition($path: String) {
  exhibition(path: $path) {
    title
    startDate
    endDate
    receptionDate
    featuredImage
  }
}
</page-query>

<script>
import moment from 'moment'

export default {
  
  methods: {
    convertDate: function (timestamp) {
      var theDate = moment(timestamp/1000).format('LL')
      return theDate;
    }
  }
}
</script>

<style>
  .featuredImage {
    max-width: 600px;
    margin: 0 auto;
  }
  .exhibition-single {
    text-align: center;
  }
</style>