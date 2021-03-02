import React, { Component } from 'react';
import Menu from '../../components/menu';
import Jumbotron from '../../components/jumbotron';

import 'bootstrap/dist/css/bootstrap.min.css';




class Cadastro extends Component {

    constructor(){
        super();

      
       
        this.state = {
            url : 'http://localhost:5000/api/veiculos',
            method: 'POST',
            id : '',
            Marca : '',
            Modelo : '',
            Cor : '',
            Tipo: '',
            DataVenda: '',
         
            carros :[]
        }
    }
    componentDidMount(){
        this.listar();
    }

    listar(){
        fetch(this.state.url)
            .then(response => response.json())
            .then(dados => {
                
                
                this.setState({carros : dados});

                this.novoCarro();
                console.log(this.state.carros);

                
            })
            .catch(err => console.error(err));
    }

    remover(event){
        event.preventDefault();
        
        console.log(event.target.value);

        
            fetch(this.state.url + '/' + event.target.value,{
                method : 'DELETE'
            })
            .then(response => response.json())
            .then(dados => {
                alert('Veículo removido');
    
                this.listar();
            })
    }

    editar(event){
        event.preventDefault();

        fetch(this.state.url + '/' + event.target.value, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dado => {
            console.log(dado);
            this.setState({id : dado.id});
            this.setState({Modelo : dado.Modelo});
            this.setState({Cor : dado.cor});
            this.setState({Tipo : dado.Tipo});
            this.setState({DataVenda : dado.DataVenda});
           
        })
    }

    salvar(event) {
        event.preventDefault();

            const carro = {
                Marca : this.state.Marca,
                Modelo : this.state.Modelo,
                Cor : this.state.Cor,
                Tipo : this.state.Tipo,
                DataVenda : this.state.DataVenda,
            
            }

            //if ternário para saber se vai fazer um post ou put
            let method = (this.state.id === "" ? 'POST' : 'PUT');
            let urlRequest = (this.state.id === "" ? this.state.url :  this.state.url + '/' + this.state.id);

            fetch(urlRequest, {
                method : method,
                body : JSON.stringify(carro),
                headers : {
                    'content-type' : 'application/json'
                }
            })
            .then(response => response.json())
            .then(dados => {
                alert('Carro salvo');

                this.listar();
            })
            .catch(err => console.error(err))
    }

    setNome(event){
        console.log(event.target.value);
        this.setState({Marca : event.target.value});
    }

    novoCarro(){

        this.setState({id : '', Marca : '', Modelo : '', Cor : '',  Tipo : '', DataVenda: ''})
    }

    render() {
        return (
            <div>
                <Menu />
                <Jumbotron titulo='Vendas' descricao='Cadastre os veículos vendidos' />

                <div className="container">
                    <div className="bd-example">
                        <form id="formCarros" onSubmit={this.salvar.bind(this)}>

                        <div className="form-group">
                                <label htmlFor="Marca">Marca</label>
                                <input type="text" className="form-control" id="nome" value={this.state.Marca} onChange={this.setNome.bind(this)} aria-describedby="Marca" placeholder="Informe a marca do veículo" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Modelo">Modelo</label>
                                <input type="text" className="form-control" id="Modelo" value={this.state.Modelo} onChange={event => this.setState({Modelo : event.target.value})} placeholder="Informe o modelo do ceículo" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Modelo">Cor</label>
                                <input type="text" className="form-control" id="Cor" value={this.state.Cor} onChange={event => this.setState({Cor : event.target.value})} placeholder="Informe a cor do veículo" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Modelo">Tipo</label>
                                <input type="text" className="form-control" id="Tipo" value={this.state.Tipo} onChange={event => this.setState({Tipo : event.target.value})} placeholder="Informe o tipo do veículo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="DatavENDA">Data da venda</label>
                                <input type="text" className="form-control" id="DataVenda" value={this.state.DataVenda} onChange={event => this.setState({DataVenda : event.target.value})} placeholder="Informe a data da venda do veículo" />
                            </div>
                            
                          
 
                        
                            {/* btnCancelar.AddEventListener('click', this.limparcampos()) */}
                            <button type="button" onClick={this.remover.bind(this)} className="btn btn-secondary">Cancelar</button>
                            <button type="submit" className="btn btn-success">Salvar</button>
                        </form>
                            
                          
                        <table className="table" style={{marginTop : '40px'}}>
                            <thead>
                            <tr>
                               
                                <th scope="col">Marca</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Cor</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Data da venda</th>

                               
                                
                                
                                <th scope="col"><button type="reset" className="btn btn-primary" onClick={this.novoCarro.bind(this)}>Novo carro</button></th>
                            </tr>
                            </thead>
                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.carros.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.Marca}</td>
                                                <td>{item.Modelo}</td>
                                                <td>{item.Cor}</td>
                                                <td>{item.Tipo}</td>
                                             
                                                <td>
                                                    <button type='button' value={item.id} onClick={this.remover.bind(this)} className='btn btn-danger'>Remover</button>
                                                    <button type='button' value={item.id} onClick={this.editar.bind(this)} className='btn btn-warning'>Editar</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
                                        



        )
    }
}

export default Cadastro;