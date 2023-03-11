import mongoose from "mongoose"

mongoose.connect("mongodb+srv://HadeSatanist:123@cursoalura.bey8pbl.mongodb.net/livraria");

let db = mongoose.connection;

export default db;