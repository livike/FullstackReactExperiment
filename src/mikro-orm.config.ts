import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export default {
    migrations: {
        path: path.join(__dirname,'./migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: 'lireddit',
    user: 'liviadmin',
    password: 'admin123',
    type: 'postgresql',
    debug: true
} as Parameters<typeof MikroORM.init>[0];