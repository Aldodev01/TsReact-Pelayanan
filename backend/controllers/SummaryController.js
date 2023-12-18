import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getSummaries = async (req, res) => {
  try {
    const totalRate = await prisma.ulasan.aggregate({
      _sum: {
        rate: true,
      },
    });

    const ulasanCount = await prisma.ulasan.count();
    const averageRate = ulasanCount > 0 ? totalRate._sum.rate / ulasanCount : 0;
    const totalSuka = await prisma.ulasan.count({
      where: { category: "Suka" },
    });
    const totalSangatSuka = await prisma.ulasan.count({
      where: { category: "SangatSuka" },
    });
    const totalTidakSuka = await prisma.ulasan.count({
      where: { category: "TidakSuka" },
    });
    const totalBiasa = await prisma.ulasan.count({
      where: { category: "Biasa" },
    });
    res.status(200).json({
      message: `Success getting Data Summariess`,
      averageRate: averageRate,
      totalRate,
      totalBiasa,
      totalSuka,
      totalSangatSuka,
      totalTidakSuka,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
