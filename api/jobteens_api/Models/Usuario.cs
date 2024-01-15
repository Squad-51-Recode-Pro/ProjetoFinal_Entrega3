using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace jobteens_api.Models
{
    [Table("Usuarios")]
    public class Usuario
    {
        [Key]
        public long UsuarioId { get; set; }

        [Required]
        [StringLength(128)]
        public string Nome { get; set; }

        [Required]
        [StringLength(128)]
        public string Email { get; set; }

        [Required]
        [StringLength(14)]
        public string Cpf { get; set; }

        [Required]
        [StringLength(15)]
        public string Telefone { get; set; }

        [Required]
        [StringLength(128)]
        public string Endereco { get; set; }

        [Required]
        [StringLength(128)]
        public string Senha { get; set; }

        [JsonIgnore]
        public List<Candidatura> Candidaturas { get; set; }

    }
}
