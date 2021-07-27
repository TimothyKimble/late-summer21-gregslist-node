export default class House {
  constructor({ year, bed, bath, price, imgUrl, description, id, levels }) {
    this.id = id;
    this.year = year;
    this.bed = bed;
    this.bath = bath;
    this.price = price;
    this.imgUrl = imgUrl;
    this.description = description;
    this.levels = levels;
  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-12 my-3">
      <div class="house bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.year} ${this.bath} house image">
          <div class="p-3 text-center">
              <div class="text-center">
                  <p><b>Year: ${this.year} - Beds: ${this.bed} - Baths: ${this.bath} - Levels: ${this.levels}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>Price: $${this.price}</em></p>
              <button class="btn btn-warning my-3" onclick="app.housesController.deleteHouse('${this.id}')">Remove</button>
              <button class="btn btn-info my-3" onclick="app.housesController.bidHouse('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
  }
}