class Hello {
  static getWorld() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(' world'), 500);
    });
  }

  static hello() {
    return new Promise((resolve) => {
      this.getWorld().then(result => {
        resolve('hello' + result);
      });
    });
  }
}

export default Hello;
