import { db } from "@/prisma/client";
import argon2 from "argon2";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  username: z
    .string()
    .min(1)
    .max(12)
    .regex(/^[a-z0-9_]*/),
  password: z.string().min(8).max(256),
});

export async function POST(request: NextRequest) {
  const bodyParse = bodySchema.safeParse(await request.json());
  if (!bodyParse.success) {
    return NextResponse.json(null, { status: 400 });
  }
  const body = bodyParse.data;

  const usernameIsTaken = Boolean(
    await db.user.findUnique({ where: { username: body.username } }),
  );
  if (usernameIsTaken) {
    return NextResponse.json(null, { status: 409 });
  }
  const passwordHashAndSalt = await argon2.hash(body.password);
  await db.user.create({
    data: { username: body.username, password: passwordHashAndSalt },
  });

  return NextResponse.json(null);
}
