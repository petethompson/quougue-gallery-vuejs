<template>
  <div class="">
    <div class="uk-card uk-card-default uk-card-small uk-card-body">
      <div class="uk-card-header">
        <h3 class="uk-card-title">Categories</h3>
      </div>    
      <div class="uk-card-body">
        <CategoriesList />
      </div>
    </div>
    <div class="uk-card uk-card-default uk-card-small uk-card-body">
      <div class="uk-card-header">
        <h3 class="uk-card-title">Recent Posts</h3>
      </div>
      <div class="uk-card-body">
        <RecentPosts />
      </div>
    </div>
  </div>
</template>


    



<script>
import CategoriesList from '@/components/CategoriesList'
import RecentPosts from '@/components/RecentPosts'

export default {
  name: 'Sidebar',
  components: {
    CategoriesList,
    RecentPosts
  }
}
</script>
