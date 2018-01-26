import { IService } from './IService'
import { Blog } from '../models/Models'

class Service implements IService {
  getStream(): Promise<Blog[]> {
    throw new Error("Method not implemented.");
  }

}

const service: IService = new Service
export default service