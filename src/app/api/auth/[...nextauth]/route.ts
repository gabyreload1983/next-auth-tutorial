import NextAuth from "next-auth";
import { options } from "./options";
import { optionsGoogle } from "./optionsGoogle";

const handler = NextAuth(optionsGoogle);

export { handler as GET, handler as POST };
