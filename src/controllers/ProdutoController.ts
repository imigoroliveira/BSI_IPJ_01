import { Produto } from './../models/Produto';
import { Request } from 'express';
import { Response } from 'express';

const produtos : Produto[] = [];

export class ProdutoController{
    create(request: Request, response: Response) {
        produtos.push(request.body);
        response.
            status(201).
            json({ message: "Produto cadastrado!", data: produtos }) 
    }
    list(request: Request, response: Response) {
        
    }
    update(request: Request, response: Response) {
        
    }
    remove(request: Request, response: Response) {
        
    }

}