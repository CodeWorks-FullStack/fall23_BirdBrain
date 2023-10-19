import { AppState } from "../AppState.js"
import { Watcher } from "../models/Watcher.js";
import { api } from "./AxiosService.js"

class WatchersService {
  async createWatcher() {
    const bird = AppState.activeBird
    const birdData = {
      birdId: bird.id
    }
    const res = await api.post('api/watchers', birdData)
    console.log('CREATED WATCHER', res.data);
    const newWatcher = new Watcher(res.data)
    AppState.watchers.push(newWatcher)
    AppState.emit('watchers')
  }
  async getWatchersByBirdId() {
    const bird = AppState.activeBird
    const res = await api.get(`api/birds/${bird.id}/watchers`)
    console.log('GOT WATCHERS', res.data);
    const newWatchers = res.data.map(pojo => new Watcher(pojo))

    AppState.watchers = newWatchers
  }
}

export const watchersService = new WatchersService()