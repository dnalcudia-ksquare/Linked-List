import { DataTypes, Model, Sequelize, Optional } from 'sequelize'
import { ModelInitializer } from './ModelInitializer';

export interface CompetitionAttributes {
    id: number;
    game: number;
    startDateTime: Date
    olympicEvent: number
    //athleteIds: [],
    medals: number,
}

export interface CompetitionCreationAttributes extends Optional<CompetitionAttributes, "id"> {}

export class Competition extends Model<CompetitionAttributes, CompetitionCreationAttributes> {
  // Not nulleable attributtes
  public id!: number;
  public game!: number;
    public startDateTime!: Date;
    public olympicEvent!: number;
    //public athleteIds!: [];
    public medals!: number;
}

export class CompetitionModelInitializer implements ModelInitializer {

  constructor(private client: Sequelize) {};
  
  initialize(): void {
      Competition.init({
          id: {
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.NUMBER,
          },
          game: {
              allowNull: false,
              type: DataTypes.STRING,
        },
          startDateTime: {
              allowNull: false,
              type: DataTypes.DATE,
          },
          olympicEvent: {
                allowNull: false,
              type: DataTypes.INTEGER,
          },/*
            athleteIds: {
                allowNull: false,
              type: DataTypes.ARRAY,
          },*/
          medals: {
              allowNull: false,
              type: DataTypes.INTEGER
            }
    }, {
      // Other model options go here
      sequelize: this.client, // We need to pass the connection instance
      modelName: 'Competition' // We need to choose the model name
      });
  }
};

