using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace jobteens_api.Models
{
    [Table("Vagas")]
    public class Vaga
    {
        [Key]
        public long VagaId { get; set; }

        [Required]
        public DateTime Data_Publicacao { get; set; }

        [Required]
        public string Cargo { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public string Requisitos { get; set; }

        [Required]
        public string Localidade { get; set; }

        [Required]
        [Column (TypeName = "decimal(10,2)")]
        public decimal Salario { get; set; }

        public long EmpresaId { get; set; }

        public Empresa Empresa { get; set; }

        [JsonIgnore]
        public List<Candidatura> Candidaturas { get; set; }

    }
}
