//* Importing Packages
const express = require("express");
const cors = require("cors");
const app = express();

//? Creating Express router
const router = express.Router();

//* Importing the User model
const OccasionCategory = require('../../Models/OccasionCategoryModel')

//? Middlewares
app.use(express.json());
app.use(cors());

//? Importing Constants Regester Messages
const {
    CATEGORY_NAME_REQUIRED,
    CATEGORY_NAME_TOO_SHORT,
    CATEGORY_NAME_TOO_LONG,
    CATEGORY_NAME_EXISTS,
    CREATED_SUCCESSFUL,
    SERVER_ERROR
} = require("../../Constants/OccasionCategory/CreateCategoryMessages");

//? Importing Regester Verification Functions
const {
    checkCategoryExists,
    createCategory
} = require("../../Controllers/OccasionCategoryControllers/CreateCategoryController");




//? Register Route
router.post("/createCategory", async (req, res) => {
    try {
        const { name, imageUrl } = req.body;

        //? Validate request body
        if (!name) {
            return res.status(400).json({ message: CATEGORY_NAME_REQUIRED });
        }
        await checkCategoryExists(name);

        //? Create new OccasionCategory
        const newCategory = await createCategory(name, imageUrl);

        ;
        //? Sending success response
        res.status(201).json({ message: CREATED_SUCCESSFUL });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//? Exporting the router
module.exports = router;
