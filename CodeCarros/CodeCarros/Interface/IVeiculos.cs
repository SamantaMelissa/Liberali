using CodeCarros.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeCarros.Interface
{
    public interface IVeiculos
    {
        List<Veiculos> Listar();
        Veiculos BuscarPorId(Guid id);
        void Editar(Veiculos veiculo);
        void Adicionar(Veiculos veiculo);
        void Remover(Guid id);

    }
}
