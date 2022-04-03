import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const users: Prisma.UserCreateManyInput [] = [
    {
        id: 0,
        name: 'John',
    },
    {
        id: 1,
        name: 'Jane',
    },
    {
        id:2,
        name: 'Jack',
    }
]

const places: Prisma.UserPlaceCreateManyInput [] = [
    {
        userId: 0,
        x: 0,
        y: 0,
    },
    {
        userId: 1,
        x: 100,
        y: 200,
    },
    {
        userId: 2,
        x: 300,
        y: 400,
    }
]

const main = async () => {
    // 初期化処理
    await prisma.user.deleteMany({});
    await prisma.userPlace.deleteMany({});
    await prisma.user.createMany({ data: users });
    await prisma.userPlace.createMany({ data: places });
};

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });