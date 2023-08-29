import { db } from "@/prisma/client";
import { getSession } from "@/utils/get-session";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  userId: z.string(),
});

export async function POST(request: NextRequest) {
  const session = getSession();
  if (!session) {
    return NextResponse.json(null, { status: 401 });
  }

  const bodyParse = bodySchema.safeParse(await request.json());
  if (!bodyParse.success) {
    return NextResponse.json(null, { status: 400 });
  }
  const body = bodyParse.data;

  await db.user.update({
    data: { followers: { disconnect: { id: session.id } } },
    where: { id: body.userId },
  });
}
