using ProductCatalog.Api.Models;

namespace ProductCatalog.Api.Repositories;

public interface IProductRepository
{
    IEnumerable<Product> GetAll();
    void Add(Product product);
}