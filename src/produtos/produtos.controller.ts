import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { get } from 'http';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @ApiBody({ type: CreateProdutoDto })
  @ApiResponse({
    status: 201,
    description: 'O produto foi criado com sucesso.',
  })
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get('/:nome')
  @ApiParam({ name: 'nome', description: 'Nome do produto a ser pesquisado.' })
  @ApiResponse({ status: 200, description: 'Retorna o produto encontrado.' })
  findAllByNome(@Param('nome') nome) {
    return this.produtosService.findOneByName(nome);
  }
}
