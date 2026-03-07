using ProductCatalog.Api.DTO;
using ProductCatalog.Api.Models;

namespace ProductCatalog.Api.Services;

public interface IProductService
{
    IEnumerable<Product> GetAll();
    Product Add(ProductDto productDto);
}