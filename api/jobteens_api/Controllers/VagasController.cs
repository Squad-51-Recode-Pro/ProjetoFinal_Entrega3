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
    public class VagasController : ControllerBase
    {
        private readonly DataContext _context;

        public VagasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Vagas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vaga>>> GetVagas()
        {
            var vaga = await _context.Vagas
              .Include(e => e.Empresa)
              .ToListAsync();

            return vaga;
        }

        // GET: api/Vagas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vaga>> GetVaga(long id)
        {
            var vaga = await _context.Vagas
            .Include(e => e.Empresa)
            .FirstOrDefaultAsync(e => e.EmpresaId == id);

            if (vaga == null)
            {
                return NotFound();
            }

            return vaga;
        }

        // PUT: api/Vagas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVaga(long id, Vaga vaga)
        {
            if (id != vaga.VagaId)
            {
                return BadRequest();
            }

            _context.Entry(vaga).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VagaExists(id))
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

        // POST: api/Vagas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Vaga>> PostVaga(Vaga vaga)
        {
            _context.Vagas.Add(vaga);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVaga", new { id = vaga.VagaId }, vaga);
        }

        // DELETE: api/Vagas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVaga(long id)
        {
            var vaga = await _context.Vagas.FindAsync(id);
            if (vaga == null)
            {
                return NotFound();
            }

            _context.Vagas.Remove(vaga);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VagaExists(long id)
        {
            return _context.Vagas.Any(e => e.VagaId == id);
        }
    }
}
