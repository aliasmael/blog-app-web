import { IService } from './IService'
import { Blog } from '../models/Models'
import blogs from '../fixtures/blogs'

class Mock implements IService {
  responseTime: number = 1000 //Response time in millisecond

  getStream(): Promise<Blog[]> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        let response: Blog[] = JSON.parse(JSON.stringify(blogs))
        return resolve(response)
      }, this.responseTime)
    })
  }
}

const service: IService = new Mock
export default service