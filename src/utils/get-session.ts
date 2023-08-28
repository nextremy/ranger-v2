import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { z } from "zod";

export function getSession() {
  const token = cookies().get("token");
  if (!token) {
    return null;
  }

  const decodedTokenParse = z
    .object({ id: z.string() })
    .safeParse(jwt.verify(token.value, process.env.JWT_SECRET!));
  if (!decodedTokenParse.success) {
    return null;
  }

  const decodedToken = decodedTokenParse.data;
  return { id: decodedToken.id };
}
