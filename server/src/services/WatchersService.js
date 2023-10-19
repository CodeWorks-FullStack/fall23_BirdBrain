import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class WatchersService {
  async destroyWatcher(watcherId, userId) {
    const watcher = await dbContext.Watchers.findById(watcherId).populate('creator bird')
    if(!watcher) {
      throw new BadRequest(`Could not find watcher id: ${watcherId}.`)
    }
    if(watcher.creatorId != userId) {
      throw new Forbidden(`Get off my lawn loser.`)
    }
    await watcher.remove()
    // @ts-ignore
    return `${watcher.creator.name} unwatched ${watcher.bird.name}`
  }
  async getWatchersByBirdId(birdId) {
    const watchers = await dbContext.Watchers.find({birdId: birdId}).populate('creator', '-email -subs')
    // const watchers = await dbContext.Watchers.find({birdId})
    return watchers
  }
  async createWatcher(watcherData) {
    const watcher = await dbContext.Watchers.create(watcherData)
    await watcher.populate('creator')
    await watcher.populate('bird')
    return watcher
  }

}

export const watchersService = new WatchersService()
