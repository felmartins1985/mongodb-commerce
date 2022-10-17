db.produtos.find({
  ingredientes: {
    $all: ["picles"],
  },
}, { _id: 0, ingredientes: 1, valoresNutricionais: { $slice: 3 }, nome: 1 });