import { IService } from './IService'
import { Blog } from '../models/Models'
import blogs from '../fixtures/blogs'

class MockService implements IService {
  getStream(): Promise<Blog[]> {
    return new Promise((resolve, _) => {
      let response: Blog[] = JSON.parse(JSON.stringify(blogs))
      return resolve(response)
    })
  }
}

const service: IService = new MockService
export default service