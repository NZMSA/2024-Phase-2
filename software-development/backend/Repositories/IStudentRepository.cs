using Models;

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
