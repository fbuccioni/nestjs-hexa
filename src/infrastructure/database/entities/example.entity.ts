import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Example as DomainExample } from '../../../domain/models/example.model'


@Entity()
export class Example extends DomainExample {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    age: number;

    @Column({ length: 128 })
    email: string;
}
