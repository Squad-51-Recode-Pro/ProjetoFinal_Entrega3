using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace jobteens_api.Models
{
    [Table("Empresas")]
    public class Empresa
    {
        [Key]
        public long EmpresaId { get; set; }

        [Required]
        [StringLength(128)]
        public string Nome_Empresa { get; set; }

        [Required]
        [StringLength(128)]
        public string Email_Coorporativo { get; set; }

        [Required]
        [StringLength(14)]
        public string Cnpj { get; set; }

        [Required]
        [StringLength(128)]
        public string Area_Atuacao { get; set; }

        [Required]
        [StringLength(128)]
        public string Endereco { get; set; }

        [Required]
        [StringLength(128)]
        public string Senha { get; set; }

        [JsonIgnore]
        public List<Vaga> Vagas { get; set; }
    }
}
