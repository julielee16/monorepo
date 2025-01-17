/* eslint-disable max-classes-per-file */
import { ChatContent } from '@team-10/lib';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  TableInheritance,
  OneToOne,
  ManyToOne,
  ChildEntity,
} from 'typeorm';

import { ChatHistoryEntity } from './history';
import UserEntity from './user';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export default class ChatEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  uuid: string;

  @ManyToOne(() => UserEntity, (user) => user.chats)
  author: UserEntity;

  @OneToOne(() => ChatHistoryEntity, (history) => history.chat)
  history: ChatHistoryEntity;
}

@ChildEntity()
export class TextChatEntity extends ChatEntity {
  @Column()
  sentAt: Date;

  @Column()
  text: string;
}

@ChildEntity()
export class PhotoChatEntity extends ChatEntity {
  @Column()
  sentAt: Date;

  @Column()
  photo: string;

  @Column()
  alt: string;
}
