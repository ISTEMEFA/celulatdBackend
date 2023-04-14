import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Clickcount {
  [x: string]: any;
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  number_click: number;  
  
  @ManyToOne(() => User, user => user.id)
  user: User;


}