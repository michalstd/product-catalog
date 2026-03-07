using ProductCatalog.Api.Models;

namespace ProductCatalog.Api.Repositories;

public class InMemoryProductRepository : IProductRepository
{
    private readonly List<Product> _products = new();

    public IEnumerable<Product> GetAll()
    {
        return _products;
    }

    public void Add(Product product)
    {
        product.Id = Guid.NewGuid();
        _products.Add(product);
    }
}