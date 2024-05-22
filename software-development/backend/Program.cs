using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure DbContext before building the app
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<StudentContext>(options =>
        options.UseInMemoryDatabase("Student"));
}
else
{
    builder.Services.AddDbContext<StudentContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("StudentContext") ?? throw new InvalidOperationException("Connection string 'StudentContext' not found.")));
}

builder.Services.AddScoped<IStudentRepository, StudentRepository>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
