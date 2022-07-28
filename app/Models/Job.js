import { generateId } from "../Utils/generateId.js"


export class Job{
  constructor(data){
    this.id = generateId()
    this.company = data.company
    this.title = data.title
    this.salary = data.salary
    this.location = data.location
    this.fulltime = data.fulltime
    this.experience = data.experience
    this.img = data.img
  }

  get Template(){
    return `
      <div class="col-4 p-3">
        <div class="bg-white elevation-2">
          <img class="img-fluid" src="${this.img}" alt="">
          <div class="p-2">
            <h4 class="text-center">${this.company} | ${this.title} </h4>
            <p>Location: ${this.location}</p>
            <p class="text-end m-0">$<b>${this.salary} | ${this.experience} yrs. | ${this.fulltime ? 'full-time' : 'part-time'}</b></p>
          </div>
          <button class="btn btn-danger m-3" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        </div>
      </div>  
    `
  }
}

