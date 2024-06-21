import File from "../models/file.js";

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };

  //trick:  console.log(req); //req is a bhot bara sa object

  try {
    const file = await File.create(fileObj); //db m entry                    //file._id => from db and is unique identifier for each file uploaded
    res.status(200).json({ path: `http://localhost:8000/file/${file._id}` }); //now FE m url link send krna h as response....[url = backendLink/file/fileId]
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId); //gives fileId
    file.downloadCount++; //locally
    await file.save(); //saves changes in DB

    res.download(file.path, file.name); //use download func of response to download
  } catch (error) {}
};
