export default function({ $axios, store }) {
  $axios.onRequest(config => {
    $axios.defaults.withCredentials = true;
    $axios.setHeader('Access-Control-Allow-Origin', 'https://wishhub-dev-api.azurewebsites.net');
    config.headers.common['Accept'] = "*/*";
    if (store.state.accessToken) {
      config.headers.common['Authorization'] = store.state.accessToken;
    }
  });

  /* インターセプターでrequet/responsのログを出力
  $axios.interceptors.request.use(request => {
    console.log('Starting Request: ', request)
    return request
  });
  $axios.interceptors.response.use(response => {
    console.log('Response: ', response)
    return response
  });*/
}