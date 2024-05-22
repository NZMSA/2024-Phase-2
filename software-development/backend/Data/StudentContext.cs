using Microsoft.EntityFrameworkCore;

public class StudentContext : DbContext
{
    public StudentContext(DbContextOptions<StudentContext> options)
        : base(options)
    {
    }

    public DbSet<Models.Student> Student { get; set; } = default!;
}
