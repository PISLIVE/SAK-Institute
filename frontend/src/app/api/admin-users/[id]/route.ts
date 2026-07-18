import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const resolvedParams = await params;
    
    // Check if user is deleting themselves
    const currentAdminId = (session.user as any).id;
    if (resolvedParams.id === currentAdminId) {
       return NextResponse.json({ error: 'Cannot delete your own account while logged in.' }, { status: 400 });
    }

    // Optional: Prevent deleting the master admin
    const userToDelete = await prisma.adminUser.findUnique({
      where: { id: resolvedParams.id }
    });

    if (userToDelete?.email === 'admin@sakcollege.com') {
      return NextResponse.json({ error: 'Cannot delete the master admin account.' }, { status: 403 });
    }

    await prisma.adminUser.delete({
      where: { id: resolvedParams.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete admin user' }, { status: 500 });
  }
}
