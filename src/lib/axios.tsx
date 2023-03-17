import axios from 'axios';

const access_token = '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';

export const api = axios.create(
  {
    baseURL: 'https://api.github.com',
    headers: {
      'Authorization': `${access_token}`,
    }
  }
)