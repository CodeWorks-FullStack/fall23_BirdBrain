import { AppState } from "../AppState.js"
import { Bird } from "../models/Bird.js"
import { api } from "./AxiosService.js"

class BirdsService {
  async getBirds() {
    const res = await api.get('api/birds')
    console.log('GOT BIRDS', res.data)
    const newBirds = res.data.map(birdPOJO => new Bird(birdPOJO))
    AppState.birds = newBirds
  }
}

export const birdsService = new BirdsService()