import { DataTypes, Model, Sequelize, Optional } from 'sequelize'
import { Competition } from './Competition';
import { Games } from './Games';
import { ModelInitializer } from './ModelInitializer';

export interface AthleteAttributes {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string
    country: string
    dob: Date,
}

export interface AthleteCreationAttributes extends Optional<AthleteAttributes, "id"> {}

export class Athlete extends Model<AthleteAttributes, AthleteCreationAttributes> {
  // Not nulleable attributtes
  public id!: number;
  public firstName!: string;
  public middleName!: string;
  public lastName!: string;
    public country!: string;
    public dob!: Date;
}

export class AthleteModelInitializer implements ModelInitializer {

  constructor(private client: Sequelize) {};
  
  initialize(): void {
      Athlete.init({
          id: {
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.NUMBER,
          },
          firstName: {
              allowNull: false,
              type: DataTypes.STRING,
          },
          middleName: {
              allowNull: false,
              type: DataTypes.STRING,
          },
          lastName: {
              allowNull: false,
              type: DataTypes.STRING,
          },
          country: {
              allowNull: false,
              type: DataTypes.STRING,
          },
          dob: {
              allowNull: false,
              type: DataTypes.DATE,
          },
      },{
      // Other model options go here
      sequelize: this.client, // We need to pass the connection instance
      modelName: 'Athlete' // We need to choose the model name
      });
    Athlete.hasMany(Competition, { as: 'competitions' })
      Competition.belongsToMany(Athlete, {
        through: "CompetitionAthlete"
      });
      Athlete.hasMany(Games, { as: 'games' })
      Games.belongsToMany(Athlete, {
          through: "AthleteGames"
      })
  }
};

