using ProductCatalog.Api.Services;
using ProductCatalog.Api.Models;
using Xunit;

public class ProductServiceTests
{

    [Fact]
    public void Should_Add_Product()
    {

        var service = new ProductService();

        var product = new Product
        {
            Code = "P1",
            Name = "Laptop",
            Price = 2000
        };

        service.Add(product);

        var products = service.GetAll();

        Assert.Single(products);

    }

}