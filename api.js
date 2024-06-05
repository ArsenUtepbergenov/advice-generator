export default class Api {
  #url = null

  constructor(url) {
    this.#url = url
  }

  async get() {
    try {
      const response = await fetch(this.#url, {
        method: 'GET',
      })

      return response.json()
    } catch (error) {
      console.error('Error:', error)
      return error
    }
  }
}
