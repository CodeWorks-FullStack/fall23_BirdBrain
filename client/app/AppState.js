import { Bird } from './models/Bird.js'
import { Value } from './models/Value.js'
import { Watcher } from './models/Watcher.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {
  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []


  /** @type {Bird[]} */
  birds = []

  /** @type {Bird | null} */
  activeBird = null

  /** @type {Watcher[]} */
  watchers = []

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})