import { startApolloServe } from "./App.js";
import {typeDefs} from './graphql/typeDefs.js'
import { resolvers } from "./graphql/resolvers.js";


startApolloServe(typeDefs, resolvers)