import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { Job } from "../Models/Job.js";



export function saveState(){
  let carData = JSON.stringify(ProxyState.cars)
  localStorage.setItem('cars', carData)
  console.log('saving', carData);
  
  let jobData = JSON.stringify(ProxyState.jobs)
  localStorage.setItem('jobs', jobData)
  console.log('saving', jobData);
}

export function loadState(){
  console.log('loading')
  let rawCars = localStorage.getItem('cars')
  if(rawCars){
    let carData = JSON.parse(rawCars)
    ProxyState.cars = carData.map(c => new Car(c))
    console.log(ProxyState.cars);
  }

  let rawJobs = localStorage.getItem('jobs')
  if(rawJobs){
    let jobData = JSON.parse(rawJobs)
    ProxyState.jobs = jobData.map(j => new Job(j))
    console.log(ProxyState.jobs);
  }
}