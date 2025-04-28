import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    // Create or ignore if already exists
    const signup = await prisma.emailSignup.upsert({
      where: { email },
      update: {},
      create: { email },
    });
    return NextResponse.json({ success: true, signup });
  } catch (error) {
    console.error('Email signup error:', error);
    return NextResponse.json({ error: 'Failed to sign up email' }, { status: 500 });
  }
}
