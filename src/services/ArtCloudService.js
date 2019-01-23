import Api from '@/services/Api'
import Vue from 'vue'

const auth = "artcloud 53f022d2483ddaed76bd96c6fb1d9f621514b4c7"

export default {
  fetchHomepageImages () {
    return Api().get('https://artcloudgalleryapi.azurewebsites.net//Artwork?tag=homepage', {
      headers: {
        'Authorization': auth
      }
    })
      .catch((err) => {
        Vue.toasted.error(TAG + ' fetch failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  },
  fetchArtist (id) {
    return Api().get('https://artcloudgalleryapi.azurewebsites.net/artist?artistId='+id+'&includeInactive=FALSE', {
      headers: {
        'Authorization': auth
      }
    })
    .catch((err) => {
      Vue.toasted.error(TAG + ' fetch failed: ' + err.response.data.message, {
        duration: 5000
      })
    })
  }
} 
