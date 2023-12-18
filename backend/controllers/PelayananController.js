import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const prisma = new PrismaClient();
// 'photo' adalah nama field dalam formulir

export const getPelayanans = async (req, res) => {
  try {
    const response = await prisma.pelayanan.findMany();
    res.status(200).json({
      message: "Success getting Data Pelayanans",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getPelayananById = async (req, res) => {
  try {
    const response = await prisma.pelayanan.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        Ulasan: true,
      },
    });
    if (response) {
      res.status(200).json({
        message: `Success getting Data Pelayanan ${req.params.id}`,
        data: response,
      });
    } else {
      res.status(404).json({
        message: `Not Found getting Data Pelayanan ${req.params.id}`,
        data: response,
      });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// export const createPelayananImage = async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: "pelayanan",
//       resource_type: "image",
//     });
//     console.log(result);
//     res.status(201).json({
//       message: `Success Creating Data Pelayanan`,
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// };

export const createPelayanan = async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "pelayanan",
      resource_type: "image",
    });

    const pelayanan = await prisma.pelayanan.create({
      data: {
        title: title,
        description: description,
        photo: result.url,
      },
    });

    res.status(201).json({
      message: `Success Creating Data Pelayanan ${req?.body?.title}`,
      data: pelayanan,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updatePelayanan = async (req, res) => {
  const { title, description } = req.body;
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "pelayanan",
    resource_type: "image",
  });
  try {
    const pelayanan = await prisma.pelayanan.update({
      where: {
        id: req.params.id,
      },
      data: {
        title: title,
        description: description,
        photo: result.url,
      },
    });
    res.status(200).json({
      message: `Success Updating Data Pelayanan ${req?.params.id}`,
      data: pelayanan,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deletePelayanan = async (req, res) => {
  try {
    const response = await prisma.pelayanan.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (response) {
      const regex = /pelayanan\/(.*?)\.jpg/;
      const match = response.photo.match(regex);
      if (match) {
        const pelayananPath = match[1];
        const result = await cloudinary.uploader.destroy(
          `pelayanan/${match[1]}`,
          {
            folder: "pelayanan",
            resource_type: "image",
          }
        );
        const pelayanan = await prisma.pelayanan.delete({
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json({
          message: `Successfully Delete Data Pelayana ${req?.params?.id}`,
          data: pelayanan,
          photo: result,
        });
        console.log(pelayananPath);
      } else {
        const pelayanan = await prisma.pelayanan.delete({
          where: {
            id: req.params.id,
          },
        });

        res.status(200).json({
          message: `Successfully Delete Data Pelayana ${req?.params?.id}`,
          data: pelayanan,
          photo: "Tidak berhasil mengapus photo",
        });
      }
    } else {
      const pelayanan = await prisma.pelayanan.delete({
        where: {
          id: req.params.id,
        },
      });

      res.status(200).json({
        message: `Successfully Delete Data Pelayana ${req?.params?.id}`,
        data: pelayanan,
      });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
