import { Request } from 'express';
import { Response } from 'express';

export class ProdutoController{
    create(request: Request, response: Response) {
        response.
            status(201).
            json({ message: "Produto cadastrado!" }) 
    }
    list(request: Request, response: Response) {
        
    }
    update(request: Request, response: Response) {
        
    }
    remove(request: Request, response: Response) {
        
    }

}