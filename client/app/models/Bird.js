export class Bird {
  constructor (data) {
    this.id = data.id || data._id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.location = data.location
    this.canFly = data.canFly
    this.isBird = data.isBird
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }

  get BirdCardTemplate() {
    return `
    <div class="col-12 col-md-3 p-4">
      <div class="bird-card rounded">
        <img class="bird-card-img rounded-top" src="${this.imgUrl}"
          alt="${this.name}">
        <div class="d-flex justify-content-between p-3">
          <div>
            <p class="fs-3">${this.name}</p>
            <p class="fs-4">👀 3</p>
          </div>
          <img class="rounded-circle"
            src="${this.creator.picture}"
            alt="${this.creator.name}">
        </div>
      </div>
    </div>
    `
  }
}

const birdData = {
  "_id": "65316776caa8ef4c6e1b3a04",
  "name": "Gary",
  "imgUrl": "https://www.mvnews.org/wp-content/uploads/2020/01/drird.jpg",
  "location": "My backyard.",
  "canFly": true,
  "isBird": true,
  "creatorId": "65301af36ccaa872fc2069bc",
  "createdAt": "2023-10-19T17:29:27.014Z",
  "updatedAt": "2023-10-19T17:29:27.014Z",
  "__v": 0,
  "creator": {
    "_id": "65301af36ccaa872fc2069bc",
    "name": "samurmairu",
    "picture": "https://s.gravatar.com/avatar/9ba60ff35c57c19c35bf572402b3ace8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fsa.png",
    "createdAt": "2023-10-19T15:30:56.848Z",
    "updatedAt": "2023-10-19T15:30:56.848Z",
    "__v": 0,
    "id": "65301af36ccaa872fc2069bc"
  },
  "id": "65316776caa8ef4c6e1b3a04"
}