import config from '../../config/url.json'
import request from 'supertest'
import expected from '../../testData/List/expectedData.json'
import urls from '../../config/endpoint.json'
import header from '../../config/header.json'

describe('GET /user', () => {
  it('should return code 200', async () => {
   
    const res = await request(config.dev)
    .get(urls.user.list + "user1")
    
      .set('accept', 'application/json')
      .send()
      .retry(3)
    expect(res.status).toBe(200)
    expect(JSON.parse(res.text)).toEqual(
      expected.normalParametersRequestReturnData,
    )
    console.log(res.body)
  }, 30000)

  it('should return code 404', async () => {
   
    const res = await request(config.dev)
    .get(urls.user.list + "user1!@#%^^")
    
      .set('accept', 'application/json')
      .send()
      .retry(3)
    expect(res.status).toBe(404)
    expect(JSON.parse(res.text)).toEqual(
      expected.notfoundParametersRequestReturnData,
    )
    console.log(res.body)
  }, 30000)
})