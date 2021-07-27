import { ProxyState } from "../AppState.js"
import { api } from "../Services/AxiosService.js"
import { carsService } from "../Services/CarsService.js"

function _draw() {
  let template = ''
  ProxyState.cars.forEach(car => {
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {
    // When 'cars' changes in the State run the _draw method
    ProxyState.on('cars', _draw)
    ProxyState.on('cars', () => { console.log('new car') })

    // This only runs when the app first loads because data is already in the state
    _draw()
  }

  async createCar() {
    try {
      event.preventDefault()
      let form = event.target
      let rawCar = {
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }
      await carsService.createCar(rawCar)
      form.reset()
    } catch (error) {
      console.error(error)
      window.alert(error.message)
    }
  }


  deleteCar(carId) {
    console.log('you are trying to delete the car by the id of ' + carId)
    carsService.deleteCar(carId)
  }

  async bidCar(carId) {
    console.log('you are biding on the car with the id of', carId)
    carsService.bidCar(carId)
  }
}