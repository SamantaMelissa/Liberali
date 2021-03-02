using CodeCarros.Domains;
using CodeCarros.Interface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CodeCarros.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculosController : ControllerBase
    {
        private readonly IVeiculos _veiculo;

        public VeiculosController(IVeiculos veiculo)
        {
            _veiculo = veiculo;
        }

        [HttpPost]
        
        public IActionResult Cadastrar(Veiculos veiculos)
        {
            try
            {
                Veiculos evt = new Veiculos();
                evt.Marca = evt.Marca;
                evt.Modelo = evt.Modelo;
                evt.Cor = evt.Cor;
                evt.Tipo = evt.Tipo;
                evt.Status = evt.Status;

                _veiculo.Adicionar(evt);

                return Ok(new { data = evt });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
       
        public IActionResult Alterar(Guid id, Veiculos veiculos)
        {
            try
            {
                Veiculos evt = _veiculo.BuscarPorId(id);

                if (evt == null)
                {
                    return NotFound();
                }

                evt.Marca = veiculos.Marca;
                evt.Modelo = veiculos.Modelo;
                evt.Cor = veiculos.Cor;
                evt.Tipo = veiculos.Tipo;
                evt.Status = veiculos.Status;


                _veiculo.Editar(evt);

                return Ok(new { data = evt });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
      
        public IActionResult Remover(Guid id)
        {
            try
            {
                Veiculos cat = _veiculo.BuscarPorId(id);

                if (cat == null)
                {
                    return NotFound();
                }

                _veiculo.Remover(id);

                return Ok(new { data = cat });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                Veiculos cat = new Veiculos();
                _veiculo.Listar();

                if (cat == null)
                {
                    return NotFound();
                }


                return Ok(new { data = cat });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
       }
            
       
        

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(Guid id)
        {
            try
            {
                Veiculos cat = _veiculo.BuscarPorId(id);

                if (cat == null)
                {
                    return NotFound();
                }

                return Ok(new { data = cat });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
    
        }

    }
}