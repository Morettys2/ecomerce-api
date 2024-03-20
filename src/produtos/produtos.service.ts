import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
  }

  findAll(): Produto[] {
    const produtos: Produto[] = [
      {
        id: 1,
        nome: 'Camiseta',
        preco: 15,
        marca: 'MarcaX',
        descricao: 'Camiseta básica de algodão',
      },
      {
        id: 2,
        nome: 'Calça jeans',
        preco: 30,
        marca: 'MarcaY',
        descricao: 'Calça jeans slim fit',
      },
      {
        id: 3,
        nome: 'Tênis',
        preco: 50,
        marca: 'MarcaZ',
        descricao: 'Tênis esportivo de alta performance',
      },
      {
        id: 4,
        nome: 'Relógio',
        preco: 25,
        marca: 'MarcaX',
        descricao: 'Relógio analógico elegante',
      },
      {
        id: 5,
        nome: 'Boné',
        preco: 10,
        marca: 'MarcaY',
        descricao: 'Boné de baseball ajustável',
      },
      {
        id: 6,
        nome: 'Óculos de sol',
        preco: 40,
        marca: 'MarcaZ',
        descricao: 'Óculos de sol polarizados',
      },
      {
        id: 7,
        nome: 'Mochila',
        preco: 35,
        marca: 'MarcaX',
        descricao: 'Mochila resistente à água',
      },
      {
        id: 8,
        nome: 'Jaqueta',
        preco: 60,
        marca: 'MarcaY',
        descricao: 'Jaqueta corta-vento',
      },
      {
        id: 9,
        nome: 'Bolsa',
        preco: 20,
        marca: 'MarcaZ',
        descricao: 'Bolsa feminina de couro sintético',
      },
      {
        id: 10,
        nome: 'Shorts',
        preco: 25,
        marca: 'MarcaX',
        descricao: 'Shorts esportivo de secagem rápida',
      },
    ];

    return produtos;
  }
  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
