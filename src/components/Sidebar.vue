<template>
  <div class="tile is-parent is-vertical">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Categories</p>
      </header>
      <div class="card-content">
        <div class="content">
          <CategoriesList />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">Recent Posts</p>
      </div>
      <div class="card-content">
        <div class="content">
          <RecentPosts />
        </div>
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
<style>
  .content ul {
    padding: 0;
    margin: 0;
  }
  ul li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>