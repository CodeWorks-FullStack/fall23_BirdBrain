import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { watchersService } from "../services/WatchersService.js";

export class WatchersController extends BaseController{
  constructor() {
    super('api/watchers')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createWatcher)
    .delete('/:watcherId', this.unwatchBird)
  }

  async createWatcher(req, res, next) {
    try {
      const watcherData = req.body
      watcherData.creatorId = req.userInfo.id
      const watcher = await watchersService.createWatcher(watcherData)
      return res.send(watcher)
    } catch (error) {
      next(error)
    }
  }

  async unwatchBird(req, res, next) {
    try {
      const watcherId = req.params.watcherId
      const userId = req.userInfo.id
      const message = await watchersService.destroyWatcher(watcherId, userId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
