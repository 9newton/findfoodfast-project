//  assert { type: "json" };
import admin from "firebase-admin";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// import restaurantModel from "../models/RestaurantModel";
const serviceAccount = require("../serviceAccount.json");

const FirebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://fff-project-95ee1.appspot.com",
});
const storage = FirebaseApp.storage();
const bucket = storage.bucket();

export const uploadImage = async (id, alley, name, file, type = "coverImg") => {
  const folder = `${alley}/${id}`;
  const fileName = `${folder}/${type === "coverImg" ? `coverImg/${name}` : `menus/${Date.now()}_${name}`
    }`;

  const fileUpload = bucket.file(fileName);
  const imageStream = fileUpload.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  imageStream.on("error", (err) => {
    throw { message: err.message, statusCode: 500 };
  });
  imageStream.on("finish", async () => { });
  imageStream.end(file.buffer);

  return await getUrlImage(fileName);
};

const getUrlImage = async (fileName) => {
  const file = storage.bucket().file(fileName);
  const [url] = await file.getSignedUrl({
    action: "read",
    expires: "03-09-2491",
  });

  return url;
};
