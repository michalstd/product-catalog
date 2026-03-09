using Microsoft.AspNetCore.Mvc;
using ProductCatalog.Api.DTO;

[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _service;

    public ProductsController(IProductService service)
    {
        _service = service;
    }

    [HttpGet]
    public ActionResult<IEnumerable<ProductDto>> GetProducts()
    {
        return Ok(_service.GetAll());
    }

    [HttpPost]
    public ActionResult<ProductDto> AddProduct(ProductDto dto)
    {
        var created = _service.Add(dto);

        return CreatedAtAction(
            nameof(GetProducts),
            new { code = created.Code },
            created
        );
    }
}