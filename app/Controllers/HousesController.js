import { ProxyState } from "../AppState.js"

function _drawHouses(){
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}



export class HousesController{



  viewHouses(){
    _drawHouses()
    // swap out car form with house form
  }
}