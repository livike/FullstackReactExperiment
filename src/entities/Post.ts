import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType, Int } from "type-graphql";

// make it a graphql type
@ObjectType()
@Entity()
export class Post {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;
    
    @Field(() => String)
    @Property()
    createdAt: Date = new Date();
  
    @Field(() => String)
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();
  
    @Field()
    @Property({type: 'text'})
    title!: string;



}