import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { api } from "../Services/AxiosService.js";


function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {

  constructor() {
    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => { console.log('new house') })

    _draw()
  }

  async addHouse() {
    try {
      event.preventDefault()
      let form = event.target
      let home = {
        year: form.year.value,
        bed: form.bed.value,
        bath: form.bath.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value,
        levels: form.levels.value
      }
      await housesService.createHouse(home)
      form.reset()
    } catch (error) {
      console.error(error)
      window.alert(error.message)
    }
  }

  deleteHouse(houseId) {
    console.log('You are trying to delete the house by the id of ' + houseId)
    housesService.deleteHouse(houseId)
  }

  async bidHouse(houseId) {
    console.log('you are biding on the house with the id of', houseId)
    housesService.bidHouse(houseId)
  }
}