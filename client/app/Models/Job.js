import { generateId } from "../Utils/generateId.js";

export default class Job {

  constructor({ company, name, time, pay, imgUrl, description, id }) {
    this.id = id;
    this.company = company;
    this.name = name;
    this.time = time;
    this.pay = pay;
    this.imgUrl = imgUrl;
    this.description = description;
  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-12 my-3 ">
      <div class="job shadow w-100 stickynote ">
      <img src="${this.imgUrl}" class="w-100" alt="${this.name} ${this.pay} house image">
          <div class="p-3 text-center">
              <div class="text-center">
                  <p class="m-0"><b>Title: ${this.name}</b></p>
              </div>
              <div class="text-center">
                  <p class="m-0"><b>Company: ${this.company}</b></p>
              </div>
              <div class="text-center">
                  <p class="m-0"><b>Hours Per Week: ${this.time}</b></p>
              </div>
              <div class="text-center">
                  <p class="m-0"><b>Salary: $${this.pay}</b></p>
              </div>
              <p>${this.description}</p>
              
              <button class="btn btn-warning my-3" onclick="app.jobsController.deleteJob('${this.id}')">Remove</button>
              <button class="btn btn-info my-3" onclick="app.jobsController.bidJob('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
  }
}