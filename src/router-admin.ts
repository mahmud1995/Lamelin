import express from "express";
import storeController from "./controllers/store.controller";
import productController from "./controllers/product.controller";
import eventController from "./controllers/event.controller";
import makeUploader from "./libs/utils/uploader";

const routerAdmin = express.Router();

/** Restaurant */
routerAdmin.get("/", storeController.goHome);
routerAdmin
  .get("/login", storeController.getLogin)
  .post("/login", storeController.processLogin);

routerAdmin
  .get("/signup", storeController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    storeController.processSignup
  );

routerAdmin.get("/logout", storeController.logout);
routerAdmin.get("/check-me", storeController.checkAuthSession);

/** Product */
routerAdmin.get(
  "/product/all",
  storeController.verifyStore,
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  storeController.verifyStore,
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  storeController.verifyStore,
  productController.updateChosenProduct
);

/** User */
routerAdmin.get(
  "/user/all",
  storeController.verifyStore,
  storeController.getUsers
);

routerAdmin.post(
  "/user/edit",
  storeController.verifyStore,
  storeController.updateChosenUser
);

// Events
routerAdmin.get(
  "/event/all",
  storeController.verifyStore,
  eventController.getAllEvents
);
routerAdmin.post(
  "/event/create",
  storeController.verifyStore,
  makeUploader("events").single("eventImage"),
  eventController.createNewEvent
);
routerAdmin.post(
  "/event/:id",
  storeController.verifyStore,
  eventController.updateChosenEvent
);

export default routerAdmin;
