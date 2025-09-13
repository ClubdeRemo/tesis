import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsNumber, IsPositive, IsBoolean } from 'class-validator';
import { Column } from 'typeorm';

export class CreateBoteDto {
    @IsInt()
    IdBote: number;

    @IsInt()
    Capacidad: number;

    NombreBote: string;

    DescripcionBote: string;

    @IsBoolean()
    Disponibilidad: boolean;
}
