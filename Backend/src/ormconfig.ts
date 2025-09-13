import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'dpg-d314p0vdiees73ahae8g-a.oregon-postgres.render.com', // host externo de Render
    port: 5432,
    username: 'club_remo_db_z8xc_user',
    password: 'ludC1IhMDLdYqjOu45Pto4Ac1abLQiPV',
    database: 'club_remo_db_z8xc',
    ssl: {
        rejectUnauthorized: false, // obligatorio para Render
    },
    synchronize: false, // ⚠️ cambia a true SOLO si querés que genere tablas automáticamente        logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // tu ruta de entidades
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'], // para migraciones si las usás
});// PARA POSTGRE SQL RENDER 

/* export const AppDataSource = new DataSource({
    type: 'mysql',
    url: process.env.DATABASE_URL, // Railway proporciona una URL completa
    entities: [__dirname + '/**//*.entity{.ts,.js}'],
    charset: 'utf8mb4',
    logging: true,
}); */// PARA MYSQL Railway

AppDataSource.initialize()
    .then(() => console.log("📦 Base de datos conectada"))
    .catch(err => console.error("❌ Error al conectar DB:", err));
