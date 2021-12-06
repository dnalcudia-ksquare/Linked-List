import { Games, GamesCreationAttributes, GamesAttributes } from '../models/Games';

export class GameService {
  async addGame(gameInfo: GamesCreationAttributes): Promise<GamesAttributes> {
    try {
      const game = await Games.create(gameInfo);
      return game;
    } catch (error) {
      throw new Error('Error creating a game');
    }
  }

  async getGames(): Promise<Array<GamesCreationAttributes>> {
    try {
        return await Games.findAll({
          attributes: ["id", "name"],
      });
    } catch (error) {
      throw new Error('Error getting games');
    }
  }
    
    async getGameById(id: string): Promise<Array<Games>> {
    try {
        return await Games.findAll({
            attributes: ["id", "name"],
            where: { id: id },
            include: "competitions",
      });
    } catch (error) {
      throw new Error('Error getting that game');
    }
  }
}