using jobteens_api.Models;
using Microsoft.EntityFrameworkCore;

namespace jobteens_api.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Empresa> Empresas { get; set; }
        public DbSet<Vaga> Vagas { get; set; }
        public DbSet<Candidatura> Candidaturas { get; set; }
    }
}
