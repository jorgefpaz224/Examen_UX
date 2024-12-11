import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: false,
        dialectOptions: process.env.NODE_ENV === 'production' ? {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        } : {},
    })
    : new Sequelize(
        process.env.PGDATABASE || '',
        process.env.PGUSER || '',
        process.env.PGPASSWORD || '',
        {
            host: process.env.PGHOST || 'localhost',
            dialect: 'postgres',
            port: parseInt(process.env.PGPORT || '5433', 10),
            dialectOptions: process.env.NODE_ENV === 'production' ? {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            } : {},
        }
    );

export const restaurantes = sequelize.define('restaurantes', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})

export const restaurant_availability = sequelize.define('restaurant_availability', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,  
    },

    restaurant_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: restaurantes,
            key: 'id',
        },
    },

    schedule_time:{
        type: DataTypes.DATE,
        allowNull: false,
    },

    reserved:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
    },

    reserved_by:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    }
});

restaurantes.hasMany(restaurant_availability, { foreignKey: 'restaurant_id' });
restaurant_availability.belongsTo(restaurantes, { foreignKey: 'restaurant_id' });