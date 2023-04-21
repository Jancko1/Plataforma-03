import { ApolloServer } from "@apollo/server";
import  express  from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";
import { config } from "process";

export async function startApolloServe(typeDefs, resolvers) {
  const app = express();


  app.get('/', (req, res) => {
    res.send('Hola')
  })

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  await new Promise((resolver) =>
    httpServer.listen(
      {
        port: 4000,
      },
      resolver
    )
  );
  console.log("🚀  GraphQL on port: http://localhost:4000/graphql ✦");
  console.log(`🚀  Server ready at http://localhost:4000 ✦`);
}
