export default function createMarkup(arr) {
  return arr
    .map(
      ({
        tags,
        largeImageURL,
        webformatURL,
        likes,
        views,
        comments,
        downloads,
      }) => `
        
        <div class="photo-card">
        <a class="gallery__link" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
        </a>
  
        <div class="info">
          <p class="info-item">
            <b class="info-desc"><span class = "info-name" >Likes</span> <span class="info-item__value">${likes}</span></b>
          </p>
          <p class="info-item">
            <b class="info-desc"><span class = "info-name" >Views</span> <span class="info-item__value" >${views}</span></b>
          </p>
          <p class="info-item">
            <b class="info-desc"><span class = "info-name" >Comments</span> <span  class="info-item__value">${comments}</span></b>
          </p>
          <p class="info-item">
            <b class="info-desc"><span class = "info-name" >Downloads</span> <span  class="info-item__value">${downloads}</span></b>
          </p>
        </div>
       
      </div>`
    )
    .join('');
}