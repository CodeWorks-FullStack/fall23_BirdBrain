import { AppState } from "../AppState.js"
import { Bird } from "../models/Bird.js"
import { api } from "./AxiosService.js"

class BirdsService {
  setActiveBird(birdId) {
    const foundBird = AppState.birds.find(bird => bird.id == birdId)
    console.log(foundBird);
    if (!foundBird) {
      throw new Error(`Bad bird id: ${birdId}`)
    }
    AppState.activeBird = foundBird
  }

  async getBirds() {
    const res = await api.get('api/birds')
    console.log('GOT BIRDS', res.data)
    const newBirds = res.data.map(birdPOJO => new Bird(birdPOJO))
    AppState.birds = newBirds
  }

  async createBird(birdData) {
    const res = await api.post('api/birds', birdData)
    console.log('CREATED BIRD', res.data);
    const newBird = new Bird(res.data)
    AppState.birds.push(newBird)
    AppState.emit('birds')
  }
}

export const birdsService = new BirdsService()