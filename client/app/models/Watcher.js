export class Watcher {
  constructor (data) {
    this.id = data.id || data._id
    this.creator = data.creator
  }

  get WatcherPictureTemplate() {
    return `
    <div class="col">
      <img class="rounded-circle creator-picture"
        src="${this.creator.picture}"
        alt="${this.creator.name}"
        title="${this.creator.name}"
        >
    </div>
    `
  }
}

const watcherData = {
  "_id": "6531a42daa51804feb501dae",
  "birdId": "65316776caa8ef4c6e1b3a04",
  "creatorId": "65301af36ccaa872fc2069bc",
  "createdAt": "2023-10-19T21:48:29.023Z",
  "updatedAt": "2023-10-19T21:48:29.023Z",
  "__v": 0,
  "creator": {
    "_id": "65301af36ccaa872fc2069bc",
    "name": "Miles",
    "picture": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/0ca73a162713337.63da2b48d1ba0.gif",
    "createdAt": "2023-10-19T15:30:56.848Z",
    "updatedAt": "2023-10-19T21:54:42.155Z",
    "__v": 0,
    "id": "65301af36ccaa872fc2069bc"
  },
  "id": "6531a42daa51804feb501dae"
}