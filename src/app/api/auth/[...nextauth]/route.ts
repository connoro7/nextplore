import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../mongoClientPromise"


const handler = NextAuth({
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  adapter: MongoDBAdapter(clientPromise)
})

export { handler as GET, handler as POST }
