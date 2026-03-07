using ProductCatalog.Api.DTO;

namespace ProductCatalog.Api.Services;

public interface IProductService
{
    IEnumerable<ProductDto> GetAll();
    void Add(ProductDto product);
}