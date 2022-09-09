db.produtos.find({
    $and: [{ 
        vendidos: { $ne: 10 } }, { tags: { $exists: false } }] }, { vendidos: 1, nome: 1, _id: 0 });