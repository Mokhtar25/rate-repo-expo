import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorageC {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`);
    console.log("called");
    return token;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
  }

  async removeAccessToken() {
    console.log("remove");
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

const AuthStorage = new AuthStorageC();

export default AuthStorage;
