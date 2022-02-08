const houses = require('./db.json');
const globalId = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  createHouse: (req, res) => {
    const {address, price, imageURL} = req.body;
    let newHouse = {
      id: globalId,
      address,
      price,
      imageURL
    }
    houses.push(newHouse);
    res.status(200).send(houses);
    globalId++;
  },
  updateHouse: (req, res) => {
    let {id} = req.params;
    let {type} = req.body;
    let index = houses.findIndex(ele => ele.id === +id);

    if (type === "plus") {
      houses[index].price += 10000;
      res.status(200).send(houses);
    } else if (type === "minus" && houses[index].price >= 10000) {
      houses[index].price -= 10000;
      res.status(200).send(houses);
    } else {
      res.status(400).send('error');
    }
  },
  deleteHouse: (req, res) => {
    let { id } = req.params
    let index = houses.findIndex(elem => elem.id === +id);
    houses.splice(index, 1);
    res.status(200).send(houses);
  }
}