import { AppState } from "../AppState.js";
import { watchersService } from "../services/WatchersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
function _drawWatchers() {
  const watchers = AppState.watchers
  let content = ''
  watchers.forEach(watcher => content += watcher.WatcherPictureTemplate)
  setHTML('birdWatchers', content)
}


export class WatchersController {
  constructor () {
    AppState.on('activeBird', this.getWatchersByBirdId)
    AppState.on('watchers', _drawWatchers)
  }
  async getWatchersByBirdId() {
    try {
      await watchersService.getWatchersByBirdId()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

  async createWatcher() {
    try {
      await watchersService.createWatcher()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}