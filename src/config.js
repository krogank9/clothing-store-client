export default {
  //API_ENDPOINT: 'http://localhost:8000/api',
  //API_ENDPOINT: 'https://boiling-chamber-32694.herokuapp.com/api',
  API_ENDPOINT: window.location.hostname === "localhost"? 'http://localhost:8000/api' : 'https://peaceful-caverns-70329.herokuapp.com/',
  TOKEN_KEY: 'clothing-store-client-auth-token',
}
