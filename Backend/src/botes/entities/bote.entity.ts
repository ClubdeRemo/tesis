import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('bote')
export class Bote {
    @PrimaryGeneratedColumn('increment')
    IdBote: number;

    @Column({ type: 'int', nullable: false })
    Capacidad: number; 

    @Column({ type: 'varchar', nullable: false })
    NombreBote: string; 

    @Column({ type: 'varchar' })
    DescripcionBote: string; 

    @Column({ default: 'Disponible' })
    Disponibilidad: string; 
}
