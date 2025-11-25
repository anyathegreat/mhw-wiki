import { AxiosClient } from "./axiosClient";

class MonstersService extends AxiosClient {
  constructor() {
    super("https://mhw-db.com");
  }

  async getAllMonsters() {
    const response = await this.client.get("/monsters");
    return response;
  }

  async getMonster(id) {
    const response = await this.client.get(`/monsters/${id}`);
    return response;
  }
}

export const monstersService = new MonstersService();
