import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js";


function _drawHouses(){
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}



export class HousesController{
  constructor(){
    ProxyState.on('houses', _drawHouses)
  }



  viewHouses(){
    _drawHouses()
    document.getElementById('form').classList.add('d-none')
    document.getElementById('house-form').classList.remove('d-none')
  }

  createHouse(){
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);

    let newHouse = {
      bedroom: form.bedroom.value,
      bathroom: form.bathroom.value,
      sqfoot: form.sqfoot.value,
      neighborhood: form.neighborhood.value,
      price: form.price.value,
      img: form.img.value
    }

    housesService.createHouse(newHouse)
    form.reset()
  }

  deleteHouse(id){
    console.log('delete', id);
    housesService.deleteHouse(id)
  }
}