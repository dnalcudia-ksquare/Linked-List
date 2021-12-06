import { Competition, CompetitionCreationAttributes, CompetitionAttributes } from '../models/Competition';

export class CompetitionService {
  async addCompetition(competitionInfo: CompetitionCreationAttributes): Promise<CompetitionAttributes> {
    try {
      const competition = await Competition.create(competitionInfo);
      return competition;
    } catch (error) {
      throw new Error('Error creating a competition');
    }
  }

  async getCompetitions(): Promise<Array<CompetitionCreationAttributes>> {
    try {
        return await Competition.findAll({
          attributes: ["id", "game","startDateTime","olympicEvent","medals"],
      });
    } catch (error) {
      throw new Error('Error getting competitions');
    }
  }
    
    async getCompetitionById(id: string): Promise<Array<Competition>> {
    try {
        return await Competition.findAll({
            attributes: ["id", "game","startDateTime","olympicEvent","medals"],
            where: { id: id },
            include: "athletes",
      });
    } catch (error) {
      throw new Error('Error getting that competition');
    }
  }
}