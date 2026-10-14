# Aplicação RID-UFFS

Aplicação estática para auxiliar o docente no preenchimento do Relatório Individual Docente (RID), com base no Anexo II da Resolução nº 49/CONSUNI/UFFS/2020, com redação dada pela Resolução nº 239/CONSUNI/UFFS/2026.

## Arquivos
- `index.html`: interface e formulários.
- `app.js`: catálogo, regras de pontuação, validações e geração do PDF.
- `tabela_rid.js`: arquivo legado mantido no pacote; o catálogo ativo está em `app.js`.
- `logo-uffs.png` e `brasaodarepublica.png`: imagens incluídas no projeto.

## Melhorias implementadas
- Inclusão de descrição individual para cada ocorrência de atividade, permitindo vários projetos/atividades no mesmo código.
- Catálogo atualizado para os itens do Anexo II da Resolução nº 239/2026, incluindo a dimensão 6 — Desempenho Didático.
- Validação de quantidades e dos limites expressos na resolução.
- Limite de até quatro semestres por ocorrência em atividades aferidas por semestre ou projeto-semestre, correspondente ao período de 24 meses informado pelo usuário.
- Referências de página dos comprovantes recalculadas com base no número real de páginas do RID.
- Numeração no rodapé em todas as páginas do PDF final (RID e comprovantes).
- Identificação de comprovantes e tratamento de erros de leitura de PDF.

## Como utilizar
Abra `index.html` em navegador atualizado com conexão à internet, necessária para carregar as bibliotecas externas de PDF e Bootstrap. Informe os dados do docente, a data da última progressão, o período avaliado, selecione a atividade, informe quantidade/horas/semestres, descreva aquela ocorrência e clique em Incluir. Anexe os comprovantes PDF e gere o arquivo consolidado.

## Observações importantes
- A ferramenta é de apoio e não substitui a análise da CAD nem a conferência institucional dos comprovantes.
- O período de quatro semestres é aplicado como orientação/validação para quantidades de atividades semestrais; o usuário deve conferir as datas efetivas de cada atividade.
- A resolução não explicita em todos os casos a forma de arredondamento nem regras para fracionamento de semestre; a aplicação não cria regras adicionais além dos limites acima.
- Os documentos e informações inseridos permanecem no navegador durante a sessão; não há envio automático a servidor.
