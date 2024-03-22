import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(private prismaService: PrismaService) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return await this.prismaService.produto.create({
      data: {
        nome: createProdutoDto.nome,
        preco: createProdutoDto.preco,
        descricao: createProdutoDto.descricao,
        marca: createProdutoDto.marca,
      },
    });
  }

  async findAll() {
    const produtos = await this.prismaService.produto.findMany();
    return produtos;
  }

  async findOneByName(nome: string) {
    const produtos = await this.prismaService.produto.findMany({
      where: {
        nome: {
          contains: nome,
        },
      },
    });
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
