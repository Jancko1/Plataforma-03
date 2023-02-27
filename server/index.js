import { startApolloServe } from "./App.js";
import {typeDefs} from './graphql/typeDefs.js'
import { resolvers } from "./graphql/resolvers.js";
import {conenctDB} from './DB/db.js'

conenctDB()

startApolloServe(typeDefs, resolvers)