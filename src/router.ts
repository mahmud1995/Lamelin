import express from 'express';
const router = express.Router();
import memberController from './controllers/member.controller';
// import restaurantController from './controllers/restaurant.controller';
import uploader from "./libs/utils/uploader";
import productController from './controllers/product.controller';
import orderController from './controllers/order.controller';
import eventController from './controllers/event.controller';

/** Member **/
router.get("/member/restaurant", 
    memberController.getRestaurant,
)
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post("/member/logout", memberController.verifyAuth, memberController.logout);
router.get("/member/detail", memberController.verifyAuth, memberController.getMemberDetail);
router.post(
    "/member/update", 
    memberController.verifyAuth, // 1st: check Credentials
    uploader("members").single("memberImage"), // req ichida memberImage bulsa > uploads/member folderiga yuklanadi
    memberController.updateMember) // 

router.get("/member/top-users", memberController.getTopUsers);

/** Product **/
router.get("/product/all", productController.getProducts);
router.get("/product/:id", memberController.retrieveAuth, productController.getProduct);

/** Orders **/
router.post(
    "/order/create",
    memberController.verifyAuth, 
    orderController.createOrder);

router.get("/order/all", 
    memberController.verifyAuth,
    orderController.getMyOrders,
);

router.post("/order/update",
    memberController.verifyAuth,
    orderController.updateOrder,
);

/* Events */
router.get("/event/all", eventController.getEvents);


export default router;
