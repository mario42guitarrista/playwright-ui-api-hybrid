class HomePage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.button = page.locator('#show-button');
    this.result = page.locator('#result');
  }

  async open() {
    await this.page.goto('http://127.0.0.1:3000');
  }

  async fillUser(name) {
    await this.usernameInput.fill(name);
  }

  async submit() {
    await this.button.click();
  }

  getResult() {
    return this.result;
  }
}

module.exports = HomePage;