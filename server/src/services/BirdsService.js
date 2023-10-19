import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class BirdsService {
  async destroyBird(birdId, userId) {
    const destroyedBird = await this.getBirdById(birdId)
    if(userId != destroyedBird.creatorId.toString()) {
      throw new Forbidden(`You do not have permission to destroy that bird!!!!!`)
    }
    await destroyedBird.remove()
    return `Successfully destroyed ${destroyedBird.name}.`
  }
  async getBirdById(birdId) {
    const bird = await dbContext.Birds.findById(birdId).populate('creator', '-email -subs')
    if(!bird) {
      throw new BadRequest(`Invalid Bird Id: ${birdId}.`)
    }
    return bird
  }

  async getBirds() {
    const birds = await dbContext.Birds.find().populate('creator watcherCount', '-email -subs')
    return birds
  }
  async createBird(birdData) {
    const newBird = await dbContext.Birds.create(birdData)
    await newBird.populate('creator', '-email -subs')
    return newBird
  }

}

export const birdsService = new BirdsService()
