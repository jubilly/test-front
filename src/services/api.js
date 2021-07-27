import axios from 'axios'
const baseURL = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'
const service = () => {
  return axios.get(baseURL).then((response) => response.data)
}
export default service
