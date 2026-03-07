using ProductCatalog.Api.DTO;
using ProductCatalog.Api.Models;
using ProductCatalog.Api.Repositories;

namespace ProductCatalog.Api.Services;

public class ProductService : IProductService
{
    private readonly IProductRepository _repository;

    public ProductService(IProductRepository repository)
    {
        _repository = repository;
    }

    public IEnumerable<Product> GetAll()
    {
        return _repository.GetAll();
    }

    public Product Add(ProductDto dto)
    {
        var product = new Product
        {
            Code = dto.Code,
            Name = dto.Name,
            Price = dto.Price
        };

        _repository.Add(product);

        return product;
    }
}