using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace jobteens_api.Models
{

    [Table("Candidaturas")]
    public class Candidatura
    {
        [Key]
        public long CandidaturaId { get; set; }

        [Required]
        public DateTime Data_Candidatura{ get; set; }

        public long UsuarioId { get; set; }

        public Usuario Usuario { get; set; }

        public long VagaId { get; set; }

        public Vaga Vaga { get; set; }
    }
}
