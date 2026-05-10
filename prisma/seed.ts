import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: '$2a$10$K7Z1Q9Q9Q9Q9Q9Q9Q9Q9O', // bcrypt hash placeholder
    },
  });

  await prisma.post.create({
    data: {
      title: 'Welcome to the platform',
      content: 'This is a sample post created during deployment.',
      published: true,
      authorId: user.id,
    },
  });

  console.log('✅ Database seeded');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
