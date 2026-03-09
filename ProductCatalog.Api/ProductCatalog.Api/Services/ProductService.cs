using ProductCatalog.Api.Repositories;
using ProductCatalog.Api.DTO;
using ProductCatalog.Api.Mapping;

public class ProductService : IProductService
{
    private readonly IProductRepository _repository;

    public ProductService(IProductRepository repository)
    {
        _repository = repository;
    }

    public IEnumerable<ProductDto> GetAll()
    {
        return _repository
            .GetAll()
            .Select(ProductMapper.ToDto);
    }

    public ProductDto Add(ProductDto dto)
    {
        var model = ProductMapper.ToModel(dto);

        _repository.Add(model);

        return ProductMapper.ToDto(model);
    }
}