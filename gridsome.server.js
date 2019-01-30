const axios = require('axios')
const auth = process.env.ARTCLOUD_KEY

const slugify = function (str) {
  var name = str.toLowerCase();
  name = name.replace(/\s/g, '-')
  .replace(' ', '-')
  .replace('--', '-')
  .replace('ö', 'o')
  .replace('é', 'e');
  return name;
}

module.exports = function (api) {
  api.loadSource(async store => {
    const homeslides = await axios.get('https://artcloudgalleryapi.azurewebsites.net//Artwork?tag=homepage', {
      headers: {
        'Authorization': auth
      }
    })

    const contentTypeHome = store.addContentType({
      typeName: 'HomeSlide'
    })
    var homeslidesdata = homeslides.data
    Array.from(homeslidesdata)

    for (const slide of homeslidesdata) {
      let date = slide.date ? slide.date + ", " : ""
      let caption = slide.artist_name + `, "` + slide.artwork_name + `," ` + date + `, ` + slide.medium + `, ` + slide.height  + `", ` + slide.width  + `"`

      contentTypeHome.addNode({
        title: slide.artwork_name,
        fields: {
          id: slide.artwork_id,
          imageLarge: slide.artwork_image,
          imageThumb: slide.artwork_thumbnail_image,
          imageCaption: caption,
        }
      })
    }

  })

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

      const singleartist = await axios.get('https://artcloudgalleryapi.azurewebsites.net/artist?artistId='+artist.artist_id+'&includeInactive=FALSE', {
        headers: {
          'Authorization': auth
        }
      })
      var art = singleartist.data.artwork;
      Array.from(art)

      var fullname = artist.first_name + ' ' + artist.last_name,
       slug = slugify(fullname),
       title = fullname,
       mediaUrl = artist.artist_image,
       thumbnail = artist.artist_thumbnail_image;

      contentType.addNode({
        id: artist.artist_id,
        slug: slug,
        title: title, 
        fields: {
          image: mediaUrl,
          thumbnail: thumbnail,
          artwork: art
        }
      })
    }
  })
}
