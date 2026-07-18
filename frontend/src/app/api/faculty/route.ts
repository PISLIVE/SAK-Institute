import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function GET() {
  try {
    const faculty = await prisma.faculty.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(faculty);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch faculty' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const data = await req.json();
    const faculty = await prisma.faculty.create({ data });
    return NextResponse.json(faculty);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create faculty' }, { status: 500 });
  }
}
