import cache from '~/libs/cache';

const getAllProdutos = async () => {

  const produtosString = await cache.get('produtos');
  const produtos = JSON.parse(produtosString) || [];

  produtos.forEach(produto => {
    let quantity = 0;
    produto.inventory.warehouses.forEach(cproduto => {
      quantity += cproduto.quantity;
    });
    produto.inventory.quantity = quantity;
    produto.isMarketable = (!quantity) ? false : true;
  });

  return produtos;

};

export default getAllProdutos;
