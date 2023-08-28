import { db } from "@/prisma/client";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Session } from "../../_types/session";

const bodySchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function POST(request: NextRequest) {
  const bodyParse = bodySchema.safeParse(await request.json());
  if (!bodyParse.success) {
    return NextResponse.json(null, { status: 400 });
  }
  const body = bodyParse.data;

  const user = await db.user.findUnique({ where: { username: body.username } });
  if (!user) {
    return NextResponse.json(null, { status: 401 });
  }
  const passwordMatches = await argon2.verify(user.password, body.password);
  if (!passwordMatches) {
    return NextResponse.json(null, { status: 401 });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!);
  cookies().set("token", token, {
    httpOnly: true,
    sameSite: true,
    secure: true,
  });

  return NextResponse.json<Session>({ id: user.id, username: user.username });
}
