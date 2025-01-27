import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from "./AxiosService.js"


class CarsService {
  constructor() {
    this.getAllCars()
  }
  async createCar(rawCar) {
    console.log('creating car step 2')
    const res = await api.post('cars', rawCar)
    console.log('your new car sir', res.data)
    console.log('creating car step 3')
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]

  }

  async getAllCars() {
    try {
      const res = await api.get('cars')
      console.log(res.data)
      ProxyState.cars = res.data.map(c => new Car(c))// Grabs the data and makes a new array, but makes that array into a car with map
    } catch (error) {
      console.error(error)
    }
  }

  //NOTE delete request you can send data through the url itself. Anytime you do a slash, and the data of that option it will go to that usually with api's 
  async deleteCar(carId) {
    try {
      // Deletes from the database
      const res = await api.delete('cars/' + carId)
      // This filter will delete the object from your DOM as well
      ProxyState.cars = ProxyState.cars.filter(c => c.id != carId)
    }
    catch (error) {
      console.error(error)
    }
  }
  async bidCar(carId) {
    try {
      let foundCar = ProxyState.cars.find(c => c.id == carId)
      foundCar.price += 100
      const res = await api.put('cars/' + carId, foundCar)
      console.log('updated car', res.data)

      ProxyState.cars = ProxyState.cars
    }
    catch (error) {
      console.error(error)
    }
  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()