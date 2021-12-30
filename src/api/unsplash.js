import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID mGGgUggzeXA9YBJpEQPamUQpWcU2dbN0gB8o0GilBgQ',
  },
});
