using Microsoft.EntityFrameworkCore;
using Models;

namespace Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly StudentContext _context;

        public StudentRepository(StudentContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Student>> GetAllStudentsAsync()
        {
            return await _context.Student.ToListAsync();
        }

        public async Task<Student> GetStudentByIdAsync(long id)
        {
            return await _context.Student.FindAsync(id);
        }

        public async Task AddStudentAsync(Student student)
        {
            _context.Student.Add(student);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateStudentAsync(Student student)
        {
            _context.Entry(student).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteStudentAsync(long id)
        {
            var student = await _context.Student.FindAsync(id);
            if (student != null)
            {
                _context.Student.Remove(student);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> StudentExistsAsync(long id)
        {
            return await _context.Student.AnyAsync(e => e.Id == id);
        }

        public async Task BulkAddStudentsAsync(IEnumerable<Student> students)
        {
            await _context.Student.AddRangeAsync(students);
            await _context.SaveChangesAsync();
        }
    }
}
