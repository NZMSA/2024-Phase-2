# MSA 2024 Phase 2   - Software Stream
Welcome to software stream section.

The assessment brief is located int the SoftwareAssessment.pdf file.
[Click here to open it](https://github.com/NZMSA/2024-Phase-2/blob/main/software-development/SoftwareAssessment.pdf)


## Getting Started Exemplar

In this exemplar we will be developing a very simple  app that contains CRUD functionality for a student.
Note: This is a very simple exemplar to show how you can get started. **Submitting this will not meet the requirements of the assessment.**


`Tip: Dont understand a specific step or unsure? ChatGPT is your best friend 😉`

### 1. Planning
Before starting a project it is always a great idea to plan your project. This includes

- Research the technologies you are going to use
- Create UI mockups/prototypes using tools such as Figma
- Think of data models you are planning to store
- Think about the architecture and how you are going to lay out your project


### 2. Developing the backend
It is up to you whether you wish to start developing the backend, frontend or both first. The Microsoft documentation provides very good guides for getting started. I encourage you read these.

#### 2.1 Initiate a new .NET project
We can use a template starter with visual studio. 
1) Open Visual Studio and create a new project. 
2) Select ASP.NET Core Web Application and click next. 
3) In the Additional information dialog:
   Confirm the Framework is .NET 8.0 (Long Term Support).
   Confirm the checkbox for Use controllers is checked.
   Confirm the checkbox for Enable OpenAPI support is checked.
   Select Create.

Next lets create our project structure. There are many minor variations. Here is an example
```
project_name/
├── README.md                        # Project overview and instructions
├── Program.cs                       # Main entry point for the application
├── appsettings.cs                   # Configuration settings for the application
├── .env                             # Environment variables
├── App_start/                       # Optional: Startup-related files
│   └── [Startup files]              # Files like Startup.cs or other initialization scripts
├── Controllers/                     # Controllers handle incoming HTTP requests and return responses
│   └── [Controller files]           # e.g., HomeController.cs, AccountController.cs
├── Context/                         # Database context files
│   └── [DB context files]           # e.g., ApplicationDbContext.cs
├── Models/                          # Data models
│   └── [Model files]                # e.g., User.cs, Product.cs
├── Repositories/                    # Repositories for data access
│   ├── Abstract/                    # Interfaces for repositories (for Dependency Injection)
│   │   └── [Interface files]        # e.g., IUserRepository.cs, IProductRepository.cs
│   └── Concrete/                    # Concrete implementations of the repositories
│       └── [Repository files]       # e.g., UserRepository.cs, ProductRepository.cs
├── Services/ (Optional)             # Services for business logic
│   └── [Service files]              # e.g., UserService.cs, EmailService.cs
└──
```

#### 2.2 Create data models
Data models represent the entities in your application. Let's create some example models.
They are just a plain old C# object (POCO) classes that represent the data in your application. 

Here is an example of a student model

```csharp
namespace Models
{
    public class Student
    {
        public long Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? University { get; set; }
    }
}
```

#### 2.3 Create Database Context 

A database context in an ASP.NET Core application using Entity Framework Core (EF Core) is a central class that manages the connection to the database and handles data operations like querying, inserting, updating, and deleting records. It serves as a bridge between your application and the database, allowing you to work with data in an object-oriented manner.

The first step is to create the database context and the DBSets. Include DbSet<TEntity> properties for each entity you want to map to a database table. 
```chsarp
public class StudentContext : DbContext
{
    public StudentContext(DbContextOptions<StudentContext> options)
        : base(options)
    {
    }

    public DbSet<Models.Student> Student { get; set; } = default!;
}
```

Next we need to register the DBContext in the Startup.cs file. 
For development we are using a in-memory database. In your assessment you will need a persistent database such
as the SQL Server.

For the SQL server this line `builder.Configuration.GetConnectionString("StudentContext")`
will get the connection string from the appsettings.json file.
Ideally this should be stored in a .env file for security reasons. 

```csharp
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
```

#### 2.4 Create Repositories 
Repositories are a crucial part of the application's data access layer. They provide an abstraction over the data layer, allowing the rest of the application to interact with data sources in a more decoupled manner. This approach makes it easier to manage and maintain the data access code and supports better unit testing by allowing dependency injection of mock repositories.

First, define the repository interfaces. These are important for Dependency Injection. 
```csharp
namespace Repositories
{
    public interface IStudentRepository
    {
        Task<IEnumerable<Student>> GetAllStudentsAsync();
        Task<Student> GetStudentByIdAsync(long id);
        Task AddStudentAsync(Student student);
        Task UpdateStudentAsync(Student student);
        Task DeleteStudentAsync(long id);
        Task<bool> StudentExistsAsync(long id);
        Task BulkAddStudentsAsync(IEnumerable<Student> students);
    }
}
```

Next, implement the repository interfaces. Have a look at `StudentRepository.cs` in the Repositories folder :)

Finally, we need to register the repositories in the Startup.cs file or a file dedicated for registering repositories. This is done with Dependency Injection. 
If you dont know what this is, I recommend you read up on it. It is a very important concept in software development. 
```csharp
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
```

#### 2.5 Does it work?
Run the application and see if it works. 
You can run this with `dotnet run` or use your IDE to start the application.

Hopefully your endpoints are working. You can test this with Postman or with swagger.
`http://localhost:5006/swagger/index.html`. 


### 3. Developing the frontend

There are many ways to create a react app. Here we will be using Vite
`npm create vite@latest`. Choose React and Typescript. 

Next create the project structure. Here is an example one

```
my-react-app/
│
├── node_modules/       # Dependencies installed via npm or yarn
│
├── public/             # Static files like index.html
│   ├── index.html      # Main HTML file
│   └── favicon.ico     # Favicon
│
├── src/                # Source code
│   ├── components/     # Folder for React components
│   │   ├── Header/     # Folder for Header component
│   │   │   ├── Header.tsx        # Header component
│   │   │   ├── HeaderStyles.tsx  # Styles for Header component
│   │   │   └── HeaderProps.ts    # Props type definitions for Header component
│   │   │
│   │   ├── Footer/     # Folder for Footer component
│   │   │   ├── Footer.tsx        # Footer component
│   │   │   ├── FooterStyles.tsx  # Styles for Footer component
│   │   │   └── FooterProps.ts    # Props type definitions for Footer component
│   │   │
│   │   └── ...         # Other components in separate folders
│   │
│   ├── pages/          # Top-level pages or route components
│   │   ├── Home.tsx    # Example page component
│   │   └── ...
│   │
│   ├── styles/         # Global styles or utilities
│   │   ├── main.css    # Example global stylesheet
│   │   └── ...
│   │
│   ├── utils/          # Utility functions or helper classes
│   │   └── ...
│   │
│   ├── models/         # Folder for type definitions or models
│   │   ├── User.ts     # Example type definition for User
│   │   └── ...
│   │
│   ├── api/            # Folder for API-related files
│   │   ├── userService.ts   # Example service for user-related API calls
│   │   └── ...
│   │
│   ├── App.tsx         # Main application component
│   ├── index.tsx       # Entry point of the application
│   └── ...
│
├── .gitignore          # Git ignore file
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation

```

#### 3.2 Setup React Router
Next lets set up React Router. This library handles routing for us.
The [React Router documentation](https://reactrouter.com/en/main/start/tutorial) is very helpful and detailed.
To get React Router to work, the root of your project must be surrounded by the React Router component.

#### 3.3 Create pages/components and styling
Next step is to create your pages and React components! 
This one is up to your imagination. If you're unsure/forgot how React works, a great place
to look is the [React documentation](https://react.dev/learn).

#### 3.4 Connecting to the backend
To connect to the backend, you will need to make API calls. To assist you, you may use fetching
libraries such Axios or Fetch API. As an example have a look at `StudentService.ts`. These are example
CRUD operations to our backend. 

#### 3.4.1 Cors
Important Note: For your backend you will need to configure CORS to allow your frontend.
CORS (Cross-Origin Resource Sharing) is a security feature that allows web browsers to make requests to a different origin domain than the one from which the current page was served.

In your backend you will need to add the following to your `program.cs` file. This snipplet
will allow requests from `localhost`, allowing your frontend to talk to your backend. For more
information about CORS, [click here.](https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-8.0)
```csharp
// Allow CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
            .AllowAnyHeader()
            .AllowAnyOrigin(); // For localhost only. Allow all
    });
});
```

### 4.0 Your turn!
Hopefully this exemplar has given you a good starting point on how you can approach and start your project!
Be creative! Remember you have the internet on your side as well as tools like ChatGPT. I encourage you to use them,
but remember **do understand the code they are producing!** 
