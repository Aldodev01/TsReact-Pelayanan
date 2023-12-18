import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUlasan = async (req, res) => {
  try {
    const response = await prisma.ulasan.findMany();
    res.status(200).json({
      message: "Success getting Data Ulasans",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUlasanById = async (req, res) => {
  try {
    const response = await prisma.ulasan.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (response) {
      res.status(200).json({
        message: `Success getting Data Ulasan ${req?.params?.id}`,
        data: response,
      });
    } else {
      res.status(404).json({
        message: `Not Found getting Data Ulasan ${req?.params?.id}`,
        data: response,
      });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createUlasan = async (req, res) => {
  const { rate, pelayananId } = req.body;
  try {
    const ulasan = await prisma.ulasan.create({
      data: {
        pelayanan: {
          connect: {
            id: pelayananId,
          },
        },
        rate: rate,
        category: getCategory(rate),
      },
    });
    res.status(201).json({
      message: "Successfully create this Ulasan",
      data: ulasan,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUlasan = async (req, res) => {
  const { rate } = req.body;
  try {
    const ulasan = await prisma.ulasan.update({
      where: {
        id: req.params.id,
      },
      data: {
        rate: rate,
        category: getCategory(rate),
      },
    });
    res.status(200).json({
      message: `Success Update Data Ulasan ${req?.params?.id}`,
      data: ulasan,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUlasan = async (req, res) => {
  try {
    const ulasan = await prisma.ulasan.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(ulasan);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

function getCategory(rate) {
  if (rate > 80) {
    return "SangatSuka";
  } else if (rate > 60) {
    return "Suka";
  } else if (rate > 40) {
    return "Biasa";
  } else {
    return "TidakSuka";
  }
}
