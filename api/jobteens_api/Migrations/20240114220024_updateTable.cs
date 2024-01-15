using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace jobteens_api.Migrations
{
    public partial class updateTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Data_Publicacao",
                table: "Candidaturas",
                newName: "Data_Candidatura");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Data_Candidatura",
                table: "Candidaturas",
                newName: "Data_Publicacao");
        }
    }
}
