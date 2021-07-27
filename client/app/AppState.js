import Job from "./Models/Job.js"
import House from "./Models/House.js"
import Car from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /**@type {Job[]} */
  jobs = []

  /** @type {House[]} */

  houses = []

  /** @type {Car[]} */
  cars = []
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
