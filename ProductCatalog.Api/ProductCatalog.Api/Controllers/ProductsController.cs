using Microsoft.AspNetCore.Mvc;
using ProductCatalog.Api.Models;
using ProductCatalog.Api.Repositories;

namespace ProductCatalog.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _repository;

    public ProductsController(IProductRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(_repository.GetAll());
    }

    [HttpPost]
    public IActionResult AddProduct([FromBody] Product product)
    {
        _repository.Add(product);
        return Ok(product);
    }
}