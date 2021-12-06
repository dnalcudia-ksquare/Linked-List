import { DataTypes, Model, Sequelize, Optional } from 'sequelize'
import { Competition } from './Competition';
import { ModelInitializer } from './ModelInitializer';

export interface GamesAttributes {
    id: number;
    name: string;
}

export interface GamesCreationAttributes extends Optional<GamesAttributes, "id"> {}

export class Games extends Model<GamesAttributes, GamesCreationAttributes> {
  // Not nulleable attributtes
  public id!: number;
  public name!: string;
}

export class GamesModelInitializer implements ModelInitializer {

  constructor(private client: Sequelize) {};
  
  initialize(): void {
      Games.init({
          id: {
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.NUMBER,
          },
          name: {
              allowNull: false,
              type: DataTypes.STRING,
          },
      },{
      // Other model options go here
      sequelize: this.client, // We need to pass the connection instance
      modelName: 'Games' // We need to choose the model name
      });
    Games.hasMany(Competition, { as: 'competitions' })
    Competition.belongsTo(Games, {
    foreignKey: "competitions",
    as: "competitions",
    });
  }
};

