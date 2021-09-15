import { v4 as uuidv4 } from "uuid";

let medicines = [];

export const getMedicines = (req, res) => {
console.log(medicines);
res.send(medicines);
}

export const addMedicine =  (req, res) => {
const medicine = req.body;

//const userId = uuidv4();

//const userWithId = {...user, id: uuidv4()}

medicines.push({ ...medicine, id: uuidv4() });

res.send(`User with the model-name ${medicine.brand_name} added to the database`);
}


export const deleteById = (req, res) => {
const { id } = req.params;

medicines = medicines.filter((medicine) => medicine.id !== id);

res.send(`Medicine with the id ${id} deleted from the database.`);
}

export const findById = (req, res) => {
const { id } = req.params;

const foundMedicine = medicines.find((medicine) => medicine.id === id);

res.send(foundMedicine);
}

export const updateQuantityById = (req, res) => {
const { id } = req.params;
const { quantity_available } = req.body;
const medicine = medicines.find((medicine) => medicine.id === id);

if (quantity_available) medicine.quantity_available = quantity_available;

res.send(`Medicine with the id ${id} has been updated with new quantity`);

}
