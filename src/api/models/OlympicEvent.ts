import { DataTypes, Model, Sequelize, Optional } from 'sequelize'
import { Competition } from './Competition';
import { ModelInitializer } from './ModelInitializer';

export interface OlympicEventAttributes {
    id: number;
    year: number;
    startDateTime: number
    endDateTime: number
    country: string;
}

export interface OlympicEventCreationAttributes extends Optional<OlympicEventAttributes, "id"> {}

export class OlympicEvent extends Model<OlympicEventAttributes, OlympicEventCreationAttributes> {
  // Not nulleable attributtes
  public id!: number;
  public year!: string;
  public startDateTime!: Date;
  public endDateTime!: Date;
  public country!: number;
}

export class OlympicEventModelInitializer implements ModelInitializer {

  constructor(private client: Sequelize) {};
  
  initialize(): void {
      OlympicEvent.init({
          id: {
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.INTEGER,
          },
          year: {
              allowNull: false,
              type: DataTypes.INTEGER,
        },
          startDateTime: {
              allowNull: false,
              type: DataTypes.DATE,
          },
            endDateTime: {
              type: DataTypes.DATE,
          },
              country: {
              allowNull: false,
              type: new DataTypes.STRING(128),
          },
    }, {
      // Other model options go here
      sequelize: this.client, // We need to pass the connection instance
      modelName: 'OlympicEvent' // We need to choose the model name
      });
    OlympicEvent.hasMany(Competition, { as: 'competitions' })
    Competition.belongsTo(OlympicEvent, {
    foreignKey: "olympicEvent",
    as: "olympicEvent",
    });
  }
};

