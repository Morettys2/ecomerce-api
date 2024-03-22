import { ApiProperty } from '@nestjs/swagger'; // Importa o decorador ApiProperty

export class CreateProdutoDto {
  @ApiProperty({ description: 'Nome do produto', example: 'Camisa' })
  nome: string;

  @ApiProperty({ description: 'Preço do produto', example: 20 })
  preco: number;

  @ApiProperty({ description: 'Descrição do produto', example: 'Camisa preta' })
  descricao: string;

  @ApiProperty({ description: 'Marca do produto', example: 'Moretty' })
  marca: string;
}
