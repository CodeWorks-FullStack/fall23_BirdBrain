import { api } from "./AxiosService.js"

class BirdsService {
  async getBirds() {
    const res = await api.get('api/birds')
    console.log('GOT BIRDS', res.data)
  }
}

export const birdsService = new BirdsService()