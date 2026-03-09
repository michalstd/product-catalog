using Xunit;
using Moq;
using ProductCatalog.Api.Services;
using ProductCatalog.Api.Repositories;
using ProductCatalog.Api.Models;
using ProductCatalog.Api.DTO;
using System.Collections.Generic;

public class ProductServiceTests
{

    [Fact]
    public void Add_Should_Map_Dto_To_Model_And_Call_Repository()
    {
        var mockRepo = new Mock<IProductRepository>();

        var service = new ProductService(mockRepo.Object);

        var dto = new ProductDto
        {
            Code = "P1",
            Name = "Laptop",
            Price = 2000
        };

        service.Add(dto);

        mockRepo.Verify(r =>
            r.Add(It.Is<Product>(p =>
                p.Code == dto.Code &&
                p.Name == dto.Name &&
                p.Price == dto.Price)),
            Times.Once);
    }

    [Fact]
    public void GetAll_Should_Map_Model_To_Dto()
    {
        var mockRepo = new Mock<IProductRepository>();

        mockRepo.Setup(r => r.GetAll())
            .Returns(new List<Product>
            {
                new Product
                {
                    Code = "P1",
                    Name = "Laptop",
                    Price = 2000
                }
            });

        var service = new ProductService(mockRepo.Object);

        var result = service.GetAll();

        Assert.Single(result);
        Assert.Equal("Laptop", result.First().Name);
    }

}