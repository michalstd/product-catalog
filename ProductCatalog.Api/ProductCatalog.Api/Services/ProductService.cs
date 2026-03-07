using ProductCatalog.Api.Repositories;
using ProductCatalog.Api.DTO;
using ProductCatalog.Api.Models;

namespace ProductCatalog.Api.Services;

public class ProductService : IProductService
{
    private readonly IProductRepository _repository;

    public ProductService(IProductRepository repository)
    {
        _repository = repository;
    }

    public IEnumerable<ProductDto> GetAll()
    {
        return _repository.GetAll()
            .Select(p => new ProductDto
            {
                Code = p.Code,
                Name = p.Name,
                Price = p.Price
            });
    }

    public void Add(ProductDto dto)
    {
        var product = new Product
        {
            Code = dto.Code,
            Name = dto.Name,
            Price = dto.Price
        };

        _repository.Add(product);
    }
}