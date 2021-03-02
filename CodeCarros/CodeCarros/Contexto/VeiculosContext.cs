using CodeCarros.Domains;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeCarros.Contexto
{
    public class VeiculosContext : DbContext
    {
        public DbSet<Veiculos> Veiculos{ get; set; }
      

        public VeiculosContext()
        {

        }

        public VeiculosContext(DbContextOptions<VeiculosContext> options) : base(options)
        {
            this.ChangeTracker.LazyLoadingEnabled = false;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-DNA4IPP;Initial Catalog=CodeCorres; user id=sa; password=sa132;");
            }

            base.OnConfiguring(optionsBuilder);
        }

       
        }
    }


