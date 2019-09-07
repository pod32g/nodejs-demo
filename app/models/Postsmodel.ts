import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { User } from './Usersmodel';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    title: string;

    @Column("text")
    content: string;

    @Column()
    image: string;

    @Column()
    timestamp: Date;

    @Column()
    likes: number;

    @ManyToMany(type => User, {
        cascade: true
    })
    @JoinColumn()
    user: User | undefined;
    post: Promise<User | undefined>;
}