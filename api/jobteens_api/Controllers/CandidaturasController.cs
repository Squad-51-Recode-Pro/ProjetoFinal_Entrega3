using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using jobteens_api.Context;
using jobteens_api.Models;

namespace jobteens_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidaturasController : ControllerBase
    {
        private readonly DataContext _context;

        public CandidaturasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Candidaturas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidatura>>> GetCandidaturas()
        {
            var candidatura = await _context.Candidaturas
               .Include(u => u.Usuario)
               .Include(v => v.Vaga)
               .Include(v => v.Vaga.Empresa)
               .ToListAsync();

            return candidatura;
        }

        // GET: api/Candidaturas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Candidatura>> GetCandidatura(long id)
        {
            var candidatura = await _context.Candidaturas
                 .Include(u => u.Usuario)
                 .Include(v => v.Vaga)
                 .Include(v => v.Vaga.Empresa)
                 .FirstOrDefaultAsync(c => c.CandidaturaId == id);


            if (candidatura == null)
            {
                return NotFound();
            }

            return candidatura;
        }

        // PUT: api/Candidaturas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidatura(long id, Candidatura candidatura)
        {
            if (id != candidatura.CandidaturaId)
            {
                return BadRequest();
            }

            _context.Entry(candidatura).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidaturaExists(id))
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

        // POST: api/Candidaturas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Candidatura>> PostCandidatura(Candidatura candidatura)
        {
            _context.Candidaturas.Add(candidatura);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCandidatura", new { id = candidatura.CandidaturaId }, candidatura);
        }

        // DELETE: api/Candidaturas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCandidatura(long id)
        {
            var candidatura = await _context.Candidaturas.FindAsync(id);
            if (candidatura == null)
            {
                return NotFound();
            }

            _context.Candidaturas.Remove(candidatura);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CandidaturaExists(long id)
        {
            return _context.Candidaturas.Any(e => e.CandidaturaId == id);
        }
    }
}
