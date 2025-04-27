import config from '../../config/url.json'
import request from 'supertest'
import expected from '../../testData/Create/expectedData.json'
import postData from '../../testData/Create/postData.json'
import urls from '../../config/endpoint.json'
import header from '../../config/header.json'

describe('POST /user', () => {
  it('should return code 200', async () => {
   

    const res = await request(config.dev)
      .put(urls.user.update + "user1")
      .set('Accept', 'application/json')
      .send(postData.NormalParametersRequestData)
      .retry(3)
    expect(res.status).toBe(200)
    
    console.log(res.body)
  }, 30000)

  it('should return code 404', async () => {
   

    const res = await request(config.dev)
      .put(urls.user.update + "user1@#$^%$^^*^&#$%#$%")
      .set('Accept', 'application/json')
      .send(postData.NormalParametersRequestData)
      .retry(3)
    expect(res.status).toBe(404)
    
    console.log(res.body)
  }, 30000)
})