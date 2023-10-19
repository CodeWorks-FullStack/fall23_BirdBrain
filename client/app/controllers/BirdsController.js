import { birdsService } from "../services/BirdsService.js";
import { Pop } from "../utils/Pop.js";

export class BirdsController {
  constructor () {
    this.getBirds()
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