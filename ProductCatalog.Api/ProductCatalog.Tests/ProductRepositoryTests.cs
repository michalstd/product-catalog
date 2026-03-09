using Xunit;
using ProductCatalog.Api.Repositories;
using ProductCatalog.Api.Models;

public class ProductRepositoryTests
{

    [Fact]
    public void Should_Add_Product_To_InMemory_List()
    {
        var repo = new InMemoryProductRepository();

        var product = new Product
        {
            Code = "P1",
            Name = "Laptop",
            Price = 2000
        };

        repo.Add(product);

        var products = repo.GetAll();

        Assert.Single(products);
        Assert.Equal("Laptop", products.First().Name);
    }

}