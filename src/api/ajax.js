import axios from 'axios'
export default (url,data={},type='get')=>{
  return new Promise((resolve,reject)=>{
    let promise
    let query
    if(type==='get'){
      query = Object.keys(data).reduce(key=>{
        return key += key + '=' + data[key] + '&'
      },'')
      if(query){
        query = '?' + query.slice(0,-1)
      }
      url += query

      promise = axios.get(url)
    }
    else{
      promise = axios.post(url,data)
    }
    promise.then((response)=>{
      resolve(response.data)
    },(err)=>{
      reject(err)
    })
  })
}
