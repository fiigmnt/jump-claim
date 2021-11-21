const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


export default function handler(req, res) {
  async function main() {
    const link = await prisma.link.findFirst();
    console.log(link);
    const result = await prisma.link.delete({ where: { id: link.id }});
    res.status(200).json({ link: link.link });
  }
  main()
    .catch((error) => {
      console.log(error);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
