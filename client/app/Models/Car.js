export default class Car {
  // OBJECT DESCONSCTRUCTION
  // using the {} you can pull only the properties you care about off the incoming object
  // the '=' allows setting default values incase that property was not provided
  constructor({ make, model, year, price, description, imgUrl, id }) {
    this.id = id
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description || "no car description"
    this.imgUrl = imgUrl || '//placehold.it/200x200'
  }
  // constructor(data) {
  //   this.make = data.make
  //   this.model = data.model
  //   this.year = data.year
  //   this.price = data.price
  //   this.description = data.description || "no description provided"
  //   this.imgUrl = data.imgUrl
  // }

  get Template() {
    return `
    <div class="col-md-3 col-sm-12 my-3">
      <div class="car bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.make} ${this.model} car image">
          <div class="p-3 text-center">
              <div class="text-center">
                  <p><b>${this.year} - ${this.make} - ${this.model}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>Price: $${this.price}</em></p>
              <button class="btn btn-warning my-3" onclick="app.carsController.deleteCar('${this.id}')">Remove</button>
              <button class="btn btn-info my-3" onclick="app.carsController.bidCar('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
  }

}