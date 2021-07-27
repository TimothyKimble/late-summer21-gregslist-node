import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class HousesService {
  async getAll(query = {}) {
    const houses = await dbContext.Houses.find(query)
    return houses
  }

  async getById(id) {
    const house = await dbContext.Houses.findById(id)
    if (!house) {
      throw new BadRequest('Invalid Id')
    }
    return house
  }

  async create(body) {
    const house = await dbContext.Houses.create(body)
    return house
  }

  async edit(body) {
    const house = await dbContext.Houses.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!house) {
      throw new BadRequest('Invalid Id')
    }
    return house
  }

  async bid(body) {
    let house = await this.getById(body.id)
    if (house.price > body.price) {
      throw new BadRequest('houses can only be bid up')
    }
    house = await dbContext.Houses.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return house
  }

  async destroy(id) {
    const house = await dbContext.Houses.findByIdAndDelete(id)
    if (!house) {
      throw new BadRequest('Invalid Id')
    }
    return house
  }
}

export const housesService = new HousesService()