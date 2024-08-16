using Irrtirer.Helpers;

var builder = WebApplication.CreateBuilder(args);

string irrtirerFrontend = "IrrtirerFrontend";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: irrtirerFrontend,
        policy =>
        {
            policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
        });
});

// Add services to the container.

builder.Services
    .AddControllers()
    .AddJsonOptions(c => 
    {
        c.JsonSerializerOptions.Converters.Add(new Vector2JsonConverter());
    });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
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

app.UseCors(irrtirerFrontend);

app.UseAuthorization();

app.MapControllers();

app.Run();