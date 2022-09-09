db.produtos.find({
  curtidas: {
     $gt: 10, $lt: 100 } }, { curtidas: 1, nome: 1, _id: 0 });