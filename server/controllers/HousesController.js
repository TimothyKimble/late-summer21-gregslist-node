import { housesService } from '../services/HousesService'
import BaseController from '../utils/BaseController'

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .put('/:id/bid', this.bid)
      .delete('/:id', this.destroy)
  }

  /**
   * Get all houses
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const houses = await housesService.getAll(req.query)
      res.send(houses)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get house by id
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getById(req, res, next) {
    try {
      const house = await housesService.getById(req.params.id)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create house
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const house = await housesService.create(req.body)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Edit house
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      // remove the price from the edit
      delete req.body.price
      const house = await housesService.edit(req.body)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async bid(req, res, next) {
    try {
      const bid = { price: req.body.price, id: req.params.id }
      const house = await housesService.bid(bid)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Delete house
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async destroy(req, res, next) {
    try {
      await housesService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted House' })
    } catch (error) {
      next(error)
    }
  }
}
