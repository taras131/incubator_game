class Game {
    #settings
    #status = "pending"

    set settings(newSettings) {
        this.#settings = newSettings
    }

    get settings() {
        return this.#settings
    }

    start() {
        this.#settings = "in-process"
    }
}

module.exports = {Game}