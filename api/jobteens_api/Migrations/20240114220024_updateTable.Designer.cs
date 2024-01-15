﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using jobteens_api.Context;

#nullable disable

namespace jobteens_api.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20240114220024_updateTable")]
    partial class updateTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.26")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("jobteens_api.Models.Candidatura", b =>
                {
                    b.Property<long>("CandidaturaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("CandidaturaId"), 1L, 1);

                    b.Property<DateTime>("Data_Candidatura")
                        .HasColumnType("datetime2");

                    b.Property<long>("UsuarioId")
                        .HasColumnType("bigint");

                    b.Property<long>("VagaId")
                        .HasColumnType("bigint");

                    b.HasKey("CandidaturaId");

                    b.HasIndex("UsuarioId");

                    b.HasIndex("VagaId");

                    b.ToTable("Candidaturas");
                });

            modelBuilder.Entity("jobteens_api.Models.Empresa", b =>
                {
                    b.Property<long>("EmpresaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("EmpresaId"), 1L, 1);

                    b.Property<string>("Area_Atuacao")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Cnpj")
                        .IsRequired()
                        .HasMaxLength(14)
                        .HasColumnType("nvarchar(14)");

                    b.Property<string>("Email_Coorporativo")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Endereco")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Nome_Empresa")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.HasKey("EmpresaId");

                    b.ToTable("Empresas");
                });

            modelBuilder.Entity("jobteens_api.Models.Usuario", b =>
                {
                    b.Property<long>("UsuarioId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("UsuarioId"), 1L, 1);

                    b.Property<string>("Cpf")
                        .IsRequired()
                        .HasMaxLength(14)
                        .HasColumnType("nvarchar(14)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Endereco")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.HasKey("UsuarioId");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("jobteens_api.Models.Vaga", b =>
                {
                    b.Property<long>("VagaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("VagaId"), 1L, 1);

                    b.Property<string>("Cargo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Data_Publicacao")
                        .HasColumnType("datetime2");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("EmpresaId")
                        .HasColumnType("bigint");

                    b.Property<string>("Localidade")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Requisitos")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Salario")
                        .HasColumnType("decimal(10,2)");

                    b.HasKey("VagaId");

                    b.HasIndex("EmpresaId");

                    b.ToTable("Vagas");
                });

            modelBuilder.Entity("jobteens_api.Models.Candidatura", b =>
                {
                    b.HasOne("jobteens_api.Models.Usuario", "Usuario")
                        .WithMany("Candidaturas")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("jobteens_api.Models.Vaga", "Vaga")
                        .WithMany("Candidaturas")
                        .HasForeignKey("VagaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Usuario");

                    b.Navigation("Vaga");
                });

            modelBuilder.Entity("jobteens_api.Models.Vaga", b =>
                {
                    b.HasOne("jobteens_api.Models.Empresa", "Empresa")
                        .WithMany("Vagas")
                        .HasForeignKey("EmpresaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Empresa");
                });

            modelBuilder.Entity("jobteens_api.Models.Empresa", b =>
                {
                    b.Navigation("Vagas");
                });

            modelBuilder.Entity("jobteens_api.Models.Usuario", b =>
                {
                    b.Navigation("Candidaturas");
                });

            modelBuilder.Entity("jobteens_api.Models.Vaga", b =>
                {
                    b.Navigation("Candidaturas");
                });
#pragma warning restore 612, 618
        }
    }
}
