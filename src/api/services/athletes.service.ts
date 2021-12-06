import { Athlete, AthleteCreationAttributes, AthleteAttributes } from '../models/Athlete';

export class AthletesService {
  async addAthlete(athleteInfo: AthleteCreationAttributes): Promise<AthleteAttributes> {
    try {
      const athlete = await Athlete.create(athleteInfo);
      return athlete;
    } catch (error) {
      throw new Error('Error creating an athlete');
    }
  }

  async getAthletes(): Promise<Array<AthleteCreationAttributes>> {
    try {
        return await Athlete.findAll({
          attributes: ["id", "text","userId","createdAt","updatedAt"],
      });
    } catch (error) {
      throw new Error('Error getting athletes');
    }
  }
    
    async getAthleteById(id: string): Promise<Array<Athlete>> {
    try {
        return await Athlete.findAll({
            attributes: ["id", "firstName","middleName","lastName"],
            where: { id: id },
            include: "games"
      });
    } catch (error) {
      throw new Error('Error getting that athlete');
    }
  }
}