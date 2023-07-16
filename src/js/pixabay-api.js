import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '38183067-20cd9da803a0e7530f454b294';
  #BASE_SEARCH_PARAMS = {
    key: this.#API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  page = 1;
  q = null;
  per_page = 40;

  async fetchImgs() {
    const searchParams = new URLSearchParams({
      ...this.#BASE_SEARCH_PARAMS,
      page: this.page,
      q: this.q,
      per_page: this.per_page,
    });
    return await axios.get(`${this.#BASE_URL}?${searchParams}`);
  }
}