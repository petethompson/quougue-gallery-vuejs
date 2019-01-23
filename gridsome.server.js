const axios = require('axios')
const auth = "artcloud 53f022d2483ddaed76bd96c6fb1d9f621514b4c7"

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://artcloudgalleryapi.azurewebsites.net//Artist', {
      headers: {
        'Authorization': auth
      }
    })

    const contentType = store.addContentType({
      typeName: 'Artist',
      route: '/artists/:id/:slug'
    })

    for (const artist of data) {
      var firstname = artist.first_name,
       lastname = artist.last_name,
       slug = firstname.toLowerCase() + "-" + lastname.toLowerCase(),
       path = "http://localhost:/8080/artists/" + artist.artist_id + "/" + slug ,
       title = firstname + " " + lastname,
       mediaUrl = artist.artist_image,
       thumbnail = artist.artist_thumbnail_image;
      contentType.addNode({
        id: artist.artist_id,
        slug: slug,
        title: title,
        fields: {
          image: mediaUrl,
          thumbnail: thumbnail
        }
        // node: {
        //   path: "http://localhost:8080" + artist.artist_id
        // }
      })
    }
  })
}