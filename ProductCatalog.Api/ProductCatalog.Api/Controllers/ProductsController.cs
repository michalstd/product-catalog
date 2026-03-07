using Microsoft.AspNetCore.Mvc;
using ProductCatalog.Api.Services;
using ProductCatalog.Api.DTO;

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
        _service.Add(product);
        return Ok(product);
    }
}