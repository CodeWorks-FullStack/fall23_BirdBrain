import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { birdsService } from "../services/BirdsService.js";
import { watchersService } from "../services/WatchersService.js";

export class BirdsController extends BaseController{
  constructor() {
    super('api/birds')
    this.router
    .get('', this.getBirds)
    .get("/:birdId", this.getBirdById)
    .get("/:birdId/watchers", this.getWatchersByBirdId)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createBird )
    .delete('/:birdId', this.destroyBird)
  }

  // GETTING ALL THE BIRDS
  async getBirds(req, res, next) {
    try {
      const birds = await birdsService.getBirds()
      return res.send(birds)
    } catch (error) {
      next(error)
    }
  }

  async getBirdById(req, res, next) {
    try {
      const birdId = req.params.birdId
      const bird = await birdsService.getBirdById(birdId)
      return res.send(bird)
    } catch (error) {
      next(error)
    }
  }

  async createBird(req, res,  next) {
    try {
      const birdData = req.body
      birdData.creatorId = req.userInfo.id
      const bird = await birdsService.createBird(birdData)
      return res.send(bird)
    } catch (error) {
      next(error)
    }
  }

  async destroyBird(req, res, next) {
    try {
      const birdId = req.params.birdId
      const userId = req.userInfo.id
      const message = await birdsService.destroyBird(birdId, userId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }

  // SECTION WATCHERS

  async getWatchersByBirdId(req, res, next) {
    try {
      const birdId = req.params.birdId
      const watchers = await watchersService.getWatchersByBirdId(birdId)
      return res.send(watchers)
    } catch (error) {
      next(error)
    }
  }


}
