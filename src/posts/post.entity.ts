import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { postType } from './enums/post-type.enum';
import { postStatus } from './enums/postStatus.enum';
import { CreatePostMeataOptionsDto } from '../metaoptions/dtos/create-post-meta-options.dto';
import { MetaOption } from '../metaoptions/meta-option.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: postType,
    nullable: false,
    default: postType.POST,
  })
  postType: postType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishOn?: Date;

  @ManyToMany(() => Tag, (tag) => tag.post, { onDelete: 'CASCADE' })
  @JoinTable()
  //Work on the relationship
  tags?: Tag[];

  @OneToOne(
    () => MetaOption,
    (metaOptions) => metaOptions.post,
    // { cascade: ['remove', 'insert'] })
    { cascade: true, eager: true },
  )
  @JoinColumn()
  metaOptions?: MetaOption;

  @ManyToMany(() => User, (user) => user.post, {
    eager: true,
  })
  author: User;
}
