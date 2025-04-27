import config from '../../config/url.json'
import request from 'supertest'
import expected from '../../testData/Create/expectedData.json'
import postData from '../../testData/Create/postData.json'
import urls from '../../config/endpoint.json'
import header from '../../config/header.json'

describe('POST /user', () => {
  it('should return code 200', async () => {
   

    const res = await request(config.dev)
      .post(urls.user.create)
      .set('Accept', 'application/json')
      .send(postData.NormalParametersRequestData)
      .retry(3)
    expect(res.status).toBe(200)
    
    console.log(res.body)
  }, 30000)
})