using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentRepository _repository;

        public StudentsController(IStudentRepository repository)
        {
            _repository = repository;
        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            var students = await _repository.GetAllStudentsAsync();
            return Ok(students);
        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(long id)
        {
            var student = await _repository.GetStudentByIdAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        // PUT: api/Students/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent(long id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }

            try
            {
                await _repository.UpdateStudentAsync(student);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _repository.StudentExistsAsync(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Students
        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
            await _repository.AddStudentAsync(student);
            return CreatedAtAction("GetStudent", new { id = student.Id }, student);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(long id)
        {
            var student = await _repository.GetStudentByIdAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            await _repository.DeleteStudentAsync(id);

            return NoContent();
        }

        // POST: api/Students/bulk
        [HttpPost("bulk")]
        public async Task<ActionResult<IEnumerable<Student>>> BulkCreateStudents(IEnumerable<Student> students)
        {
            if (students == null || !students.Any())
            {
                return BadRequest("Student data is required.");
            }

            await _repository.BulkAddStudentsAsync(students);

            return Ok(students);
        }
    }
}