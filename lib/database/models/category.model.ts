import { Schema, model, models } from "mongoose";

export interface ICategory extends Document{
    _id:String;
    name:String;
}

const categorySchema = new Schema({
    name : {type : String, require:true, unique:true},
})

const Category = models.Category || model('category', categorySchema);

export default Category;