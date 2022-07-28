import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({make:'Honda', model:'CRV3-XL PLUS', year:2023, price:100000, img:'https://static01.nyt.com/images/2020/05/22/business/21wheels3-print/merlin_9261190_cdd1e166-951d-4bd4-b4be-26f41a5dcd96-articleLarge.jpg?quality=75&auto=webp&disable=upscale', description: 'driven only once, car of the future'}),
    new Car({make:'Tesla', model:'Cyber truck', year:3000, price:5, img:'https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/1975/09/22153103/al-yandacropped.jpg', description:'state of the art, nothing like it, this is also technically just a pre-order, you\'ll get it in the year 3056.'})
  ]

  /** @type {import('./Models/House').House[]} */
  houses = [
    new House ({img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', bedroom: 3, bathroom: 1.5, price: 500000, sqfoot: 3200, neighborhood: 'Kuna'}),

    new House ({img: 'https://images.unsplash.com/photo-1598901940872-9300c497a1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNtYWxsJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', bedroom: 1, bathroom: 0, price: 460000, sqfoot: 700, neighborhood: 'North End'})
  ]
  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job ({company: 'Flying M', title: 'Barista', salary:11, location: 'Boise', fulltime: false, experience: 1, img: 'https://images.unsplash.com/photo-1507226983735-a838615193b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyaXN0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}),

    new Job ({company: 'Chandler\'s', title: 'Sous Chef', salary: 22, location: 'Downtown', fulltime: true, experience: 3, img: 'https://images.unsplash.com/photo-1575000977355-8b2a719926c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'})

  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
