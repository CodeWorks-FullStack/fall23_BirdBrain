import { AppState } from "../AppState.js";
import { birdsService } from "../services/BirdsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawBirds() {
  const birds = AppState.birds
  let content = ''
  birds.forEach(bird => content += bird.BirdCardTemplate)
  setHTML('birdCards', content)
}


export class BirdsController {
  constructor () {
    this.getBirds()

    AppState.on('birds', _drawBirds)
  }

  async getBirds() {
    try {
      await birdsService.getBirds()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}