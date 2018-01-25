import { Blog } from '../models/Models'

export interface IService {
  getStream(): Promise<Blog[]>
}