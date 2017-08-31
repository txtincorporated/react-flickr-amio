const FLICKR_KEY = '49ab98f0131176cf7168bf57ca213ff9';
const FLICKR_SECRET = 'a475bf30b9544209';

const MBOX_TOKEN = 'pk.eyJ1IjoibmtlZW5lIiwiYSI6ImNqNnp4MnFmcjAxamkzM2wwZ2pmbm5mbmMifQ.ZYDaSF6qiHIy7hLUxLBU9w';

const FLICKR = 'https://api.flickr.com/services/rest';

export const photoReq = () => {
  let startDate = (Date.now() - 86400000)/1000 | 0;

  return fetch(
    `${FLICKR}/?method=flickr.photos.search&api_key=${FLICKR_KEY}&tags=landscape%2C+architecture&min_upload_date=${startDate}&sort=date-upload-asc&safe_search=1&content_type=1&media=photos&has_geo=1&extras=geo&per_page=250&format=json&nojsoncallback=1`
  )
    .then(res => res.json());

};