using Microsoft.AspNetCore.Mvc;
using ProductCatalog.Api.DTO;
using ProductCatalog.Api.Services;

namespace ProductCatalog.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _service;

    public ProductsController(IProductService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(_service.GetAll());
    }

    [HttpPost]
    public IActionResult AddProduct(ProductDto product)
    {
        var result = _service.Add(product);
        return Ok(result);
    }
}