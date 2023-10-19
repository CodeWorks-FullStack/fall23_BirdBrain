import { AppState } from "../AppState.js";
import { birdsService } from "../services/BirdsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawBirds() {
  const birds = AppState.birds
  let content = ''
  birds.forEach(bird => content += bird.BirdCardTemplate)
  setHTML('birdCards', content)
}

function _drawActiveBird() {
  const bird = AppState.activeBird
  setHTML('birdDetails', bird.BirdDetailsTemplate)
  // @ts-ignore
  bootstrap.Modal.getOrCreateInstance('#birdDetailsModal').show()
}

export class BirdsController {
  constructor () {
    this.getBirds()

    AppState.on('birds', _drawBirds)
    AppState.on('activeBird', _drawActiveBird)
  }

  async getBirds() {
    try {
      await birdsService.getBirds()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

  async createBird(event) {
    try {
      event.preventDefault()
      const form = event.target
      const birdData = getFormData(form)
      birdData.canFly = birdData.canFly == 'on'
      console.log('Bird Data', birdData);
      await birdsService.createBird(birdData)
      form.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance('#birdFormModal').hide()
      Pop.success('New bird succesfully created!')
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

  setActiveBird(birdId) {
    try {
      birdsService.setActiveBird(birdId)
    } catch (error) {
      Pop.error(error)
    }
  }
}