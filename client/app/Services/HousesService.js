import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";


class HousesService {
  constructor() {
    this.getAllHouses()
  }
  async createHouse(home) {
    console.log('creating house step 2', home)
    const res = await api.post('houses', home)
    console.log('your new house', res.data)
    console.log('creating house step 3')
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }

  async getAllHouses() {
    try {
      const res = await api.get('houses')
      console.log(res.data)
      ProxyState.houses = res.data.map(h => new House(h))

    } catch (error) {
      console.error(error)
    }
  }

  async deleteHouse(houseId) {
    try {
      const res = await api.delete('houses/' + houseId)

      ProxyState.houses = ProxyState.houses.filter(h => h.id != houseId)
    } catch (error) {
      console.error(error)
    }
  }

  async bidHouse(houseId) {
    try {
      let foundHouse = ProxyState.houses.find(h => h.id == houseId)
      foundHouse.price += 5000
      const res = await api.put('houses/' + houseId, foundHouse)
      console.log('updated House', res.data)

      ProxyState.houses = ProxyState.houses
    } catch (error) {
      console.error(error)
    }
  }
}

export const housesService = new HousesService()