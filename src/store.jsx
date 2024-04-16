import { makeAutoObservable } from "mobx";

class AuthStore {
  isLoggedIn = false;
  email = "";

  constructor() {
    makeAutoObservable(this);
  }

  login(email) {
    this.isLoggedIn = true;
    this.email = email;
  }

  logout() {
    this.isLoggedIn = false;
    this.email = "";
  }
}

const authStore = new AuthStore();

export default authStore;
