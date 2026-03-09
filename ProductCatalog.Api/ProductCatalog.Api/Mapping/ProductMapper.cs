using ProductCatalog.Api.Models;
using ProductCatalog.Api.DTO;

namespace ProductCatalog.Api.Mapping;

public static class ProductMapper
{
    public static Product ToModel(ProductDto dto)
    {
        return new Product
        {
            Code = dto.Code,
            Name = dto.Name,
            Price = dto.Price
        };
    }

    public static ProductDto ToDto(Product model)
    {
        return new ProductDto
        {
            Code = model.Code,
            Name = model.Name,
            Price = model.Price
        };
    }
}