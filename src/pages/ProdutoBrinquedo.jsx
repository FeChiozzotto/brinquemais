import NavProjeto from "../components/NavProjeto";
import Cabecalho from "../components/Cabecalho";
import React from 'react'

const ProdutoBrinquedo = () => {
    return (
        <div>
            <Cabecalho/>
            <NavProjeto/>
            <div className="container mb-5">
                
                <div className="row">
                    
                    <div className="col-12 text-center py-4 my-4">
                        
                        <h1>Produto</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1">Descrição</label>
                        <input class="form-control" id="Desrição_ProdutoBrinquedo" ></input>
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1">Numero Matricula</label>
                        <input class="form-control" id="id_ProdutoBrinquedo" ></input>
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1">Marca</label>
                        <input class="form-control" id="Marca_ProdutoBrinquedo" ></input>
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1">Data de Fabricação</label>
                        <input class="form-control" id="Fabricação_ProdutoBrinquedo" ></input>
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1">Idade limite</label>
                        <input class="form-control" id="Idade_ProdutoBrinquedo" ></input>
                    </div>
                    <button type="submit" class="btn btn-outline-primary">Enviar</button>
                    </form>
                    </div>
                    
                    </div>
                </div>
                
            </div>
            
            )
}

     export default ProdutoBrinquedo;