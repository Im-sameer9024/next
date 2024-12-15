import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  // log:["query"] //show the SQL query which is used in database
})


export default prisma