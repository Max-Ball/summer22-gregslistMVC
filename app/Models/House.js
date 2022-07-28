import { generateId } from "../Utils/generateId.js"


export class House{
  constructor(data){
    this.id = generateId()
    this.img = data.img
    this.bedroom = data.bedroom
    this.bathroom = data.bathroom
    this.price = data.price
    this.sqfoot = data.sqfoot
    this.neighborhood = data.neighborhood
  }


  get Template(){
    return `
      <div class="col-4 p-3">
        <div class="bg-white elevation-2">
          <img class="img-fluid" src="${this.img}" alt="">
          <div class="p-2">
            <h4 class="text-center">${this.bedroom} bed | ${this.bedroom} bath | ${this.sqfoot} sqft</h4>
            <p>${this.neighborhood}</p>
            <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          </div>
          <button class="btn btn-danger m-3" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
        </div>
      </div>  
    `
  }
}
