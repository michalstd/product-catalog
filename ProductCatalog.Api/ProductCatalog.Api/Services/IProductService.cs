using ProductCatalog.Api.DTO;

public interface IProductService
{
    IEnumerable<ProductDto> GetAll();

    ProductDto Add(ProductDto dto);
}