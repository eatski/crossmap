import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const users: Prisma.UserCreateManyInput [] = [
    {
        name: 'John',
    }
]

const main = async () => {
    // 初期化処理
    await prisma.user.deleteMany({});
    await prisma.user.createMany({ data: users });
};

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });