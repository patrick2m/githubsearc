import axios from 'axios';

const access_token = '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'

export const api = axios.create(
  {
    baseURL: 'http://localhost:5173',
    headers: {
      'Authorization': `token ${access_token}`,
    }
  }
)