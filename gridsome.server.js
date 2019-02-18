const axios = require('axios')
const auth = "artcloud 53f022d2483ddaed76bd96c6fb1d9f621514b4c7"
const moment = require('moment')

const slugify = function (str) {
  var name = str.toLowerCase();
  name = name.replace(/\s/g, '-')
  .replace(' ', '-')
  .replace('--', '-')
  .replace('ö', 'o')
  .replace('é', 'e');
  return name;
}
const convertDate = function (timestamp) {
  var theDate = moment(timestamp).format('LL')  
}

module.exports = function (api) {
  api.loadSource(async store => {
    const exhibitions = await axios.get('https://quoguegallery.com/wp-json/wp/v2/exhibition')
    .catch(function(err){
      console.log(err)
    })

    const contentTypeHome = store.addContentType({
      typeName: 'Exhibition',
      route: '/exhibitions/:slug'
    })

    var exhibitionsdata = Array.from(exhibitions.data)

    for (const exhibition of exhibitionsdata) {
      let feat_image = await axios.get(exhibition._links['wp:featuredmedia'][0].href)
      let startDate = exhibition.acf.exhibition_start_date
      let endDate = exhibition.acf.exhibition_end_date
     
      
      contentTypeHome.addNode({
        title: exhibition.title.rendered,
        fields: {
          start_date: startDate,
          end_date: endDate,
          reception_date: exhibition.acf.artist_reception_date,
          featured_image: feat_image.data.source_url
        }
      })
    }
    

  })


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
