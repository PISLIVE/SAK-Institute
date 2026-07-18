import { prisma } from '../src/lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {
  const email = 'admin@sakcollege.com';
  const password = 'AdminPassword123!';

  const existingUser = await prisma.adminUser.findUnique({
    where: { email }
  });

  if (existingUser) {
    console.log('Admin user already exists!');
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.adminUser.create({
    data: {
      email,
      password: hashedPassword,
      name: 'Super Admin',
    }
  });

  console.log(`Admin user created: ${email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
