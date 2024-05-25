import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const prisma = new PrismaClient();

const server = new ApolloServer<MyContext>({
  schema, // from previous step
});
const { url } = await startStandaloneServer(server, {
  context: () => ({ prisma }),
  listen: { port: 4000 },
});
