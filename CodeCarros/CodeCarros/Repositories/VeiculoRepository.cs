
using CodeCarros.Contexto;
using CodeCarros.Domains;
using CodeCarros.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeCarros.Repositories
{
    public class VeiculoRepository : IVeiculos
    {
        private readonly VeiculosContext _context;

        public VeiculoRepository()
        {
            _context = new VeiculosContext();
        }

        public void Adicionar(Veiculos veiculo)
        {
            try
            { 
                _context.Veiculos.Add(veiculo);

                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Veiculos BuscarPorId(Guid id)
        {
            try
            {
                return _context.Veiculos.FirstOrDefault(a => a.Id == id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void Editar(Veiculos veiculo)
        {
            try
            {
                Veiculos veiculoEdit = BuscarPorId(veiculo.Id);

                if (veiculoEdit == null)
                {
                    throw new Exception("Veículo nao encontrado");
                }

                veiculoEdit.Marca = veiculo.Marca;

                _context.Veiculos.Update(veiculoEdit);
                _context.SaveChanges();

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<Veiculos> Listar()
        {
            try
            {
                return _context.Veiculos.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void Remover(Guid id)
        {
            try
            {
                Veiculos veiculosEdit = BuscarPorId(id);

                if (veiculosEdit == null)
                {
                    throw new Exception("Veículo nao encontrado");
                }

                _context.Veiculos.Remove(veiculosEdit);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
    
}
