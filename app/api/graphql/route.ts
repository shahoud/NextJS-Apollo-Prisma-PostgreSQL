import "reflect-metadata";

import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { buildSchema } from "type-graphql";
import { resolvers } from "@/prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Build your GraphQL schema using TypeGraphQL
const schema = await buildSchema({
  resolvers,
  validate: false,
});

// Create an instance of Apollo Server with the TypeGraphQL schema
const apolloServer = new ApolloServer({
  schema,
  // Provide Prisma client in the context
});

// Start Apollo Server and create a handler for Next.js
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req, prisma }),
});

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  // Delegate the GET request to Apollo Server
  return handler(request, response);
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  // Delegate the POST request to Apollo Server
  return handler(request, response);
}
