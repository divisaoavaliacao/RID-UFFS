// RID-UFFS — catálogo transcrito do Anexo II da Resolução nº 49/CONSUNI/UFFS/2020,
// com redação dada pela Resolução nº 239/CONSUNI/UFFS/2026.
const categoriasRID = [
  { id: "ensino", nome: "1. ATIVIDADES DE ENSINO" },
  { id: "pesquisa", nome: "2. ATIVIDADES DE PESQUISA" },
  { id: "extensao", nome: "3. ATIVIDADES DE EXTENSÃO E CULTURA" },
  { id: "formacao", nome: "4. ATIVIDADES DE FORMAÇÃO" },
  { id: "gestao", nome: "5. ATIVIDADES DE ADMINISTRAÇÃO E GESTÃO UNIVERSITÁRIA" }
];

const catalogoRID = [
  { id: "1_1_1", cod: "1.1.1", desc: "Ministração de Componente Curricular na Graduação", fator: 2.5, unit: "pontos/15 horas-aula", cat: "ensino", calc: "hours" },
  { id: "1_1_2", cod: "1.1.2", desc: "Ministração de Componente Curricular na Pós-Graduação", fator: 2.5, unit: "pontos/15 horas-aula", cat: "ensino", calc: "hours" },
  { id: "1_2_1", cod: "1.2.1", desc: "Membro titular de colegiado de curso", fator: 2, unit: "pontos/semestre", cat: "ensino", calc: "semester" },
  { id: "1_2_2", cod: "1.2.2", desc: "Membro suplente de colegiado de curso", fator: 1, unit: "ponto/semestre", cat: "ensino", calc: "semester" },
  { id: "1_2_3", cod: "1.2.3", desc: "Membro do Núcleo Docente Estruturante (NDE)", fator: 2, unit: "pontos/semestre", cat: "ensino", calc: "semester" },
  { id: "1_2_4", cod: "1.2.4", desc: "Membro de fóruns de ensino", fator: 1, unit: "ponto/semestre", cat: "ensino", calc: "semester" },
  { id: "1_2_5", cod: "1.2.5", desc: "Membro de outras comissões ligadas ao ensino", fator: 0.5, unit: "ponto/semestre", cat: "ensino", calc: "semester" },
  { id: "1_2_6", cod: "1.2.6", desc: "Coordenação de estágios", fator: 5, unit: "pontos/semestre", cat: "ensino", calc: "semester" },
  { id: "1_3_1", cod: "1.3.1", desc: "Orientação de trabalho de conclusão de curso de graduação (TCC)", fator: 4, unit: "pontos/TCC", cat: "ensino", calc: "count" },
  { id: "1_3_2", cod: "1.3.2", desc: "Orientação de Residência Médica", fator: 5, unit: "pontos/residência", cat: "ensino", calc: "count" },
  { id: "1_3_3", cod: "1.3.3", desc: "Coorientação de trabalho de conclusão de curso (TCC)", fator: 2, unit: "pontos/TCC", cat: "ensino", calc: "count" },
  { id: "1_3_4", cod: "1.3.4", desc: "Orientação de estágio curricular obrigatório", fator: 2, unit: "pontos/estagiário", cat: "ensino", calc: "count" },
  { id: "1_3_5", cod: "1.3.5", desc: "Orientação de estágio não obrigatório", fator: 1, unit: "ponto/estagiário", cat: "ensino", calc: "count" },
  { id: "1_3_6", cod: "1.3.6", desc: "Orientação de monitoria", fator: 3, unit: "pontos/projeto", cat: "ensino", calc: "count" },
  { id: "1_3_7", cod: "1.3.7", desc: "Tutoriamento de Grupo PET ou PIBID", fator: 8, unit: "pontos/semestre", cat: "ensino", calc: "semester" },
  { id: "1_3_8", cod: "1.3.8", desc: "Orientação de monografia de curso de especialização", fator: 4, unit: "pontos/monografia", cat: "ensino", calc: "count" },
  { id: "1_3_9", cod: "1.3.9", desc: "Membro de banca examinadora de TCC de graduação, pós-graduação lato sensu ou estágio supervisionado obrigatório", fator: 0.5, unit: "ponto/banca", cat: "ensino", calc: "count" },
  { id: "1_3_10", cod: "1.3.10", desc: "Membro de banca examinadora de livre-docência", fator: 2, unit: "pontos/banca", cat: "ensino", calc: "count" },
  { id: "1_3_11", cod: "1.3.11", desc: "Membro de banca examinadora para Professor Titular da carreira EBTT", fator: 2, unit: "pontos/banca", cat: "ensino", calc: "count" },
  { id: "1_3_12", cod: "1.3.12", desc: "Membro de banca de processo seletivo para contratação de professor temporário", fator: 1, unit: "ponto/banca", cat: "ensino", calc: "count" },
  { id: "1_3_13", cod: "1.3.13", desc: "Membro de banca de concurso público para professor da Carreira do Magistério Superior", fator: 4, unit: "pontos/banca", cat: "ensino", calc: "count" },
  { id: "1_3_14", cod: "1.3.14", desc: "Coordenação de projetos de ensino", fator: 1, unit: "ponto/(projeto·semestre)", cat: "ensino", calc: "project_semester" },
  { id: "1_3_15", cod: "1.3.15", desc: "Colaboração em projetos de ensino", fator: 0.5, unit: "ponto/(projeto·semestre)", cat: "ensino", calc: "project_semester" },
  { id: "1_4_1", cod: "1.4.1", desc: "Execução de palestra", fator: 2, unit: "pontos/palestra", cat: "ensino", calc: "count" },
  { id: "1_4_2", cod: "1.4.2", desc: "Execução de minicurso", fator: 2, unit: "pontos/minicurso", cat: "ensino", calc: "count" },
  { id: "1_4_3", cod: "1.4.3", desc: "Execução de oficina", fator: 2, unit: "pontos/oficina", cat: "ensino", calc: "count" },
  { id: "2_1_1", cod: "2.1.1", desc: "Coordenação de projeto de pesquisa, de desenvolvimento tecnológico e/ou de inovação institucionalizado", fator: 3, unit: "pontos/(projeto·semestre)", cat: "pesquisa", calc: "project_semester" },
  { id: "2_1_2", cod: "2.1.2", desc: "Coordenação de projeto de pesquisa, de desenvolvimento tecnológico e/ou de inovação aprovado em edital de agência de fomento para obtenção de recursos financeiros", fator: 5, unit: "pontos/(projeto·semestre)", cat: "pesquisa", calc: "project_semester" },
  { id: "2_1_3", cod: "2.1.3", desc: "Coordenação de grupo de pesquisa", fator: 2, unit: "pontos/semestre", cat: "pesquisa", calc: "semester" },
  { id: "2_1_4", cod: "2.1.4", desc: "Colaboração em projeto de pesquisa, de desenvolvimento tecnológico e/ou de inovação institucionalizado", fator: 1, unit: "ponto/(projeto·semestre)", cat: "pesquisa", calc: "project_semester" },
  { id: "2_1_5", cod: "2.1.5", desc: "Bolsista de Produtividade CNPq/CAPES", fator: 5, unit: "pontos/semestre", cat: "pesquisa", calc: "semester" },
  { id: "2_2_1", cod: "2.2.1", desc: "Orientação de dissertação de mestrado", fator: 10, unit: "pontos/dissertação", cat: "pesquisa", calc: "count" },
  { id: "2_2_2", cod: "2.2.2", desc: "Orientação de tese de doutorado", fator: 15, unit: "pontos/tese", cat: "pesquisa", calc: "count" },
  { id: "2_2_3", cod: "2.2.3", desc: "Supervisão de pós-doutorado", fator: 2, unit: "pontos/(supervisionado·semestre)", cat: "pesquisa", calc: "project_semester" },
  { id: "2_2_4", cod: "2.2.4", desc: "Orientação de iniciação científica, tecnológica ou de inovação", fator: 1.5, unit: "ponto/(orientação·semestre)", cat: "pesquisa", calc: "project_semester" },
  { id: "2_2_5", cod: "2.2.5", desc: "Coorientação de dissertação de mestrado", fator: 5, unit: "pontos/dissertação", cat: "pesquisa", calc: "count" },
  { id: "2_2_6", cod: "2.2.6", desc: "Coorientação de tese de doutorado", fator: 7, unit: "pontos/tese", cat: "pesquisa", calc: "count" },
  { id: "2_3_1", cod: "2.3.1", desc: "Artigo científico em revista indexada na CAPES, Qualis A", fator: 15, unit: "pontos/artigo", cat: "pesquisa", calc: "count" },
  { id: "2_3_2", cod: "2.3.2", desc: "Artigo científico em revista indexada na CAPES, Qualis B", fator: 10, unit: "pontos/artigo", cat: "pesquisa", calc: "count" },
  { id: "2_3_3", cod: "2.3.3", desc: "Artigo científico em revista indexada na CAPES, Qualis C", fator: 8, unit: "pontos/artigo", cat: "pesquisa", calc: "count" },
  { id: "2_3_4", cod: "2.3.4", desc: "Outros artigos publicados (revistas não indexadas)", fator: 3, unit: "pontos/artigo", cat: "pesquisa", calc: "count" },
  { id: "2_3_5", cod: "2.3.5", desc: "Textos em jornais, revistas e outros", fator: 0.5, unit: "ponto/texto", cat: "pesquisa", calc: "count" },
  { id: "2_3_6", cod: "2.3.6", desc: "Autor de livro publicado em editora com corpo editorial", fator: 15, unit: "pontos/livro", cat: "pesquisa", calc: "count" },
  { id: "2_3_7", cod: "2.3.7", desc: "Autor de capítulo de livro publicado em editora com corpo editorial", fator: 6, unit: "pontos/capítulo", cat: "pesquisa", calc: "count" },
  { id: "2_3_8", cod: "2.3.8", desc: "Trabalho completo publicado em evento", fator: 2, unit: "pontos/trabalho", cat: "pesquisa", calc: "count" },
  { id: "2_3_9", cod: "2.3.9", desc: "Resumo expandido publicado em evento", fator: 1, unit: "ponto/resumo", cat: "pesquisa", calc: "count" },
  { id: "2_3_10", cod: "2.3.10", desc: "Resumo publicado em evento", fator: 0.5, unit: "ponto/resumo", cat: "pesquisa", calc: "count" },
  { id: "2_3_11", cod: "2.3.11", desc: "Apresentação oral de trabalho em evento", fator: 1.5, unit: "ponto/apresentação", cat: "pesquisa", calc: "count" },
  { id: "2_3_12", cod: "2.3.12", desc: "Apresentação de pôster em evento", fator: 1, unit: "ponto/apresentação", cat: "pesquisa", calc: "count" },
  { id: "2_4_1", cod: "2.4.1", desc: "Editor de periódico científico", fator: 6, unit: "pontos/semestre", cat: "pesquisa", calc: "semester" },
  { id: "2_4_2", cod: "2.4.2", desc: "Editor de seção de periódico científico", fator: 4, unit: "pontos/semestre", cat: "pesquisa", calc: "semester" },
  { id: "2_4_3", cod: "2.4.3", desc: "Editor de anais de evento", fator: 4, unit: "pontos/anais", cat: "pesquisa", calc: "count" },
  { id: "2_4_4", cod: "2.4.4", desc: "Editor de número especial ou de dossiê de periódico científico", fator: 4, unit: "pontos/número ou dossiê", cat: "pesquisa", calc: "count" },
  { id: "2_4_5", cod: "2.4.5", desc: "Membro de conselho editorial de editora", fator: 6, unit: "pontos/semestre", cat: "pesquisa", calc: "semester" },
  { id: "2_4_6", cod: "2.4.6", desc: "Membro de conselho editorial de periódico", fator: 4, unit: "pontos/semestre", cat: "pesquisa", calc: "semester" },
  { id: "2_4_7", cod: "2.4.7", desc: "Membro de comitê científico de eventos", fator: 6, unit: "pontos/evento", cat: "pesquisa", calc: "count" },
  { id: "2_4_8", cod: "2.4.8", desc: "Membro de comitê institucional ligado à pesquisa, ao desenvolvimento tecnológico e à inovação", fator: 4, unit: "pontos/(comitê·semestre)", cat: "pesquisa", calc: "project_semester" },
  { id: "2_4_9", cod: "2.4.9", desc: "Membro de comitê externo ligado à pesquisa, ao desenvolvimento tecnológico e à inovação", fator: 4, unit: "pontos/(comitê·semestre)", cat: "pesquisa", calc: "project_semester" },
  { id: "2_4_10", cod: "2.4.10", desc: "Revisão de artigo científico para periódico", fator: 3, unit: "pontos/revisão", cat: "pesquisa", calc: "count" },
  { id: "2_4_11", cod: "2.4.11", desc: "Avaliador de projeto", fator: 0.5, unit: "ponto/projeto", cat: "pesquisa", calc: "count" },
  { id: "2_5_1", cod: "2.5.1", desc: "Membro de banca examinadora de dissertação de mestrado", fator: 2, unit: "pontos/banca", cat: "pesquisa", calc: "count" },
  { id: "2_5_2", cod: "2.5.2", desc: "Membro de banca examinadora de qualificação de tese ou dissertação", fator: 2, unit: "pontos/banca", cat: "pesquisa", calc: "count" },
  { id: "2_5_3", cod: "2.5.3", desc: "Membro de banca examinadora de tese de doutorado", fator: 4, unit: "pontos/banca", cat: "pesquisa", calc: "count" },
  { id: "2_5_4", cod: "2.5.4", desc: "Membro de comissão de seleção para pós-graduação", fator: 2, unit: "pontos/comissão", cat: "pesquisa", calc: "count" },
  { id: "2_6_1", cod: "2.6.1", desc: "Autor de tradução de livro publicado em editora com corpo editorial", fator: 10, unit: "pontos/tradução", cat: "pesquisa", calc: "count" },
  { id: "2_6_2", cod: "2.6.2", desc: "Autor de tradução de capítulo de livro publicado em editora com corpo editorial", fator: 3, unit: "pontos/tradução", cat: "pesquisa", calc: "count" },
  { id: "2_6_3", cod: "2.6.3", desc: "Autor de tradução de artigo publicado em revista indexada", fator: 3, unit: "pontos/tradução", cat: "pesquisa", calc: "count" },
  { id: "2_6_4", cod: "2.6.4", desc: "Patente registrada", fator: 25, unit: "pontos/patente", cat: "pesquisa", calc: "count" },
  { id: "2_6_5", cod: "2.6.5", desc: "Patente concedida", fator: 50, unit: "pontos/patente", cat: "pesquisa", calc: "count" },
  { id: "2_6_6", cod: "2.6.6", desc: "Outras produções técnicas", fator: 1, unit: "ponto/produção", cat: "pesquisa", calc: "count" },
  { id: "3_1_1", cod: "3.1.1", desc: "Coordenação de programa de extensão ou cultura institucionalizado", fator: 4, unit: "pontos/(programa·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_1_2", cod: "3.1.2", desc: "Vice-coordenação de programa de extensão ou cultura institucionalizado", fator: 2, unit: "pontos/semestre", cat: "extensao", calc: "semester" },
  { id: "3_1_3", cod: "3.1.3", desc: "Coordenação de projeto de extensão ou cultura institucionalizado", fator: 3, unit: "pontos/(projeto·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_1_4", cod: "3.1.4", desc: "Coordenação de curso ou evento de extensão ou cultura institucionalizado", fator: 2, unit: "pontos/(curso ou evento·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_1_5", cod: "3.1.5", desc: "Colaboração em programa, projeto, curso ou evento de extensão ou cultura institucionalizado", fator: 1, unit: "ponto/(ação·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_1_6", cod: "3.1.6", desc: "Coordenação de ação de extensão ou cultura aprovada em edital de agência de fomento para obtenção de recursos financeiros", fator: 5, unit: "pontos/(ação·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_1_7", cod: "3.1.7", desc: "Coordenação de núcleo de estudos avançados", fator: 2, unit: "pontos/semestre", cat: "extensao", calc: "semester" },
  { id: "3_2_1", cod: "3.2.1", desc: "Coordenação adjunta de extensão e de cultura de campus", fator: 10, unit: "pontos/semestre", cat: "extensao", calc: "semester" },
  { id: "3_2_2", cod: "3.2.2", desc: "Coordenação adjunta de extensão dos cursos de graduação", fator: 5, unit: "pontos/semestre", cat: "extensao", calc: "semester" },
  { id: "3_2_3", cod: "3.2.3", desc: "Membro de comitê institucional ligado à extensão e/ou cultura", fator: 3, unit: "pontos/(comitê·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_2_4", cod: "3.2.4", desc: "Membro de comitê externo ligado à extensão e/ou cultura", fator: 3, unit: "pontos/(comitê·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_2_5", cod: "3.2.5", desc: "Membro de comissão institucional ligada à extensão e/ou cultura", fator: 2, unit: "pontos/(comissão·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_2_6", cod: "3.2.6", desc: "Membro de conselho editorial de periódico de extensão", fator: 4, unit: "pontos/semestre", cat: "extensao", calc: "semester" },
  { id: "3_2_7", cod: "3.2.7", desc: "Revisão de artigo científico para periódico de extensão", fator: 1, unit: "ponto/revisão", cat: "extensao", calc: "count" },
  { id: "3_2_8", cod: "3.2.8", desc: "Avaliador ad hoc de ações de extensão e cultura em editais", fator: 1, unit: "ponto/edital", cat: "extensao", calc: "count" },
  { id: "3_2_9", cod: "3.2.9", desc: "Avaliador ad hoc de resultados de ações de extensão e cultura", fator: 1, unit: "ponto/avaliação", cat: "extensao", calc: "count" },
  { id: "3_3_1", cod: "3.3.1", desc: "Produtos acadêmicos de extensão e cultura (produção artística e cultural; manuais, cartilhas e boletins; relatórios técnicos; produtos audiovisuais; aplicativos; jogos educativos; sites, blogs e redes sociais; assessorias e consultorias; tecnologias sociais certificadas; outras)", fator: 1, unit: "ponto/produto", cat: "extensao", calc: "count" },
  { id: "3_4_1", cod: "3.4.1", desc: "Orientação de estudantes em empresa júnior ou em incubadora tecnológica", fator: 1.5, unit: "ponto/(orientação·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_4_2", cod: "3.4.2", desc: "Orientação de estudantes na iniciação à extensão", fator: 1.5, unit: "ponto/(orientação·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_4_3", cod: "3.4.3", desc: "Orientação de estudantes na iniciação artística ou cultural", fator: 1.5, unit: "ponto/(orientação·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "3_4_4", cod: "3.4.4", desc: "Orientação de estudantes em ações de extensão e cultura nos currículos", fator: 1.5, unit: "ponto/(orientação·semestre)", cat: "extensao", calc: "project_semester" },
  { id: "4_1_1", cod: "4.1.1", desc: "Participação como aluno regularmente matriculado em programa de pós-graduação stricto sensu, com afastamento para capacitação pela UFFS", fator: 45, unit: "pontos/semestre", cat: "formacao", calc: "semester" },
  { id: "4_1_2", cod: "4.1.2", desc: "Participação como aluno regularmente matriculado em programa de pós-graduação stricto sensu", fator: 28, unit: "pontos/semestre", cat: "formacao", calc: "semester" },
  { id: "4_1_3", cod: "4.1.3", desc: "Participação como aluno regularmente matriculado em programa de pós-graduação lato sensu", fator: 10, unit: "pontos/semestre", cat: "formacao", calc: "semester" },
  { id: "4_1_4", cod: "4.1.4", desc: "Participação em programa de estágio pós-doutoral, com afastamento para capacitação pela UFFS", fator: 45, unit: "pontos/semestre", cat: "formacao", calc: "semester" },
  { id: "4_1_5", cod: "4.1.5", desc: "Participação em programa de estágio pós-doutoral", fator: 28, unit: "pontos/semestre", cat: "formacao", calc: "semester" },
  { id: "4_1_6", cod: "4.1.6", desc: "Participação em cursos de formação docente promovidos pela UFFS", fator: 2, unit: "pontos/curso", cat: "formacao", calc: "count" },
  { id: "4_1_7", cod: "4.1.7", desc: "Participação em palestras", fator: 0.5, unit: "ponto/palestra", cat: "formacao", calc: "count" },
  { id: "4_1_8", cod: "4.1.8", desc: "Participação em seminários", fator: 0.5, unit: "ponto/seminário", cat: "formacao", calc: "count" },
  { id: "4_1_9", cod: "4.1.9", desc: "Participação em cursos não abarcados pelo item 4.1.6", fator: 0.5, unit: "ponto/curso", cat: "formacao", calc: "count" },
  { id: "5_1_1", cod: "5.1.1", desc: "Reitor ou vice-reitor", fator: 45, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_2", cod: "5.1.2", desc: "Pró-Reitor", fator: 45, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_3", cod: "5.1.3", desc: "Diretor de campus", fator: 45, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_4", cod: "5.1.4", desc: "Diretor da administração superior", fator: 30, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_5", cod: "5.1.5", desc: "Coordenador acadêmico e administrativo", fator: 30, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_6", cod: "5.1.6", desc: "Coordenador de unidade acadêmica e chefe do gabinete do reitor", fator: 30, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_7", cod: "5.1.7", desc: "Coordenador de curso de graduação ou de pós-graduação", fator: 30, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_8", cod: "5.1.8", desc: "Coordenador adjunto de curso de graduação ou de pós-graduação", fator: 10, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_9", cod: "5.1.9", desc: "Membro de comissão de assessoramento superior", fator: 10, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_10", cod: "5.1.10", desc: "Presidente de comissão de assessoramento superior", fator: 15, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_11", cod: "5.1.11", desc: "Vice-presidente de comissão de assessoramento superior", fator: 12, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_12", cod: "5.1.12", desc: "Membro de comissão constituída por ato da administração superior", fator: 5, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_13", cod: "5.1.13", desc: "Presidente de comissão constituída por ato da administração superior", fator: 7, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_14", cod: "5.1.14", desc: "Vice-presidente de comissão constituída por ato da administração superior", fator: 6, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_15", cod: "5.1.15", desc: "Coordenação adjunta de laboratórios e áreas experimentais", fator: 20, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_16", cod: "5.1.16", desc: "Membro de comissão de sindicância e de processo administrativo disciplinar", fator: 2, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_17", cod: "5.1.17", desc: "Membro de comissão eleitoral e mesário de eleições na UFFS", fator: 1, unit: "ponto/eleição", cat: "gestao", calc: "count" },
  { id: "5_1_18", cod: "5.1.18", desc: "Membro de comissão eleitoral geral na UFFS", fator: 15, unit: "pontos/eleição", cat: "gestao", calc: "count" },
  { id: "5_1_19", cod: "5.1.19", desc: "Membro titular de órgão colegiado superior", fator: 6, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_20", cod: "5.1.20", desc: "Membro suplente de órgão colegiado superior", fator: 3, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_21", cod: "5.1.21", desc: "Membro titular de órgão colegiado do campus", fator: 4, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_22", cod: "5.1.22", desc: "Membro suplente de órgão colegiado do campus", fator: 2, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_23", cod: "5.1.23", desc: "Representação sindical", fator: 10, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_24", cod: "5.1.24", desc: "Representação como docente da UFFS em comissões ou conselhos externos à instituição", fator: 2, unit: "pontos/semestre", cat: "gestao", calc: "semester" },
  { id: "5_1_25", cod: "5.1.25", desc: "Professor colaborador das coordenações adjuntas de laboratório", fator: 2, unit: "pontos/(laboratório·semestre)", cat: "gestao", calc: "project_semester" }
];

let atividadesSelecionadas = [];
const categoriaIds = categoriasRID.map(c => c.id);
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function pontosAtividade(item) {
  const q = Number(item.qtd) || 0;
  if (item.calc === "hours") return (q / 15) * item.fator;
  if (item.calc === "score") return Math.min(10, Math.max(0, q)) * item.fator;
  return q * item.fator;
}
document.addEventListener("DOMContentLoaded", () => {
  popularTodosOsSelects(); renderizarTodasAsTabelas(); calcularTotais();
  const data = document.getElementById("data_progressao");
  if (data) data.addEventListener("change", sugerirPeriodo);
});
function popularTodosOsSelects() {
  categoriaIds.forEach(cat => {
    const select = document.getElementById(`select-${cat}`); if (!select) return;
    select.innerHTML = `<option value="">-- Selecione uma atividade --</option>` + catalogoRID.filter(i=>i.cat===cat).map(i=>`<option value="${i.id}">[${i.cod}] ${esc(i.desc)} (${i.fator} ${esc(i.unit)})</option>`).join("");
  });
}
function sugerirPeriodo() {
  const v = document.getElementById("data_progressao")?.value; if (!v) return;
  const d = new Date(v+"T12:00:00");
  const sem = date => `${date.getFullYear()}/${date.getMonth()<6?1:2}`;
  const inicio = new Date(d); inicio.setMonth(inicio.getMonth()+1);
  const fim = new Date(inicio); fim.setMonth(fim.getMonth()+23);
  const el = document.getElementById("periodo_avaliacao");
  if (el && !el.value) el.value = `${sem(inicio)} a ${sem(fim)} (24 meses / 4 semestres)`;
}
function adicionarAtividade(cat) {
  const select=document.getElementById(`select-${cat}`), qtdInput=document.getElementById(`qtd-${cat}`), descInput=document.getElementById(`desc-${cat}`);
  if (!select || !qtdInput) return;
  const itemInfo=catalogoRID.find(i=>i.id===select.value), qtd=parseFloat(String(qtdInput.value).replace(',','.'));
  if (!itemInfo) { alert("Selecione uma atividade."); return; }
  if (!Number.isFinite(qtd) || (qtd<=0 && itemInfo.calc !== "score")) { alert("Informe uma quantidade válida."); return; }
  if (itemInfo.calc === "score" && qtd>10) { alert("A nota de desempenho didático deve estar entre 0 e 10."); return; }
  const descricao=(descInput?.value||"").trim();
  if (!descricao) { alert("Descreva brevemente a atividade para identificá-la no RID."); descInput?.focus(); return; }
  atividadesSelecionadas.push({uid: `${Date.now()}_${Math.random().toString(36).slice(2,8)}`,id:itemInfo.id,cod:itemInfo.cod,desc:itemInfo.desc,fator:itemInfo.fator,unit:itemInfo.unit,cat:itemInfo.cat,calc:itemInfo.calc,qtd,descricao,arquivosPDF:[]});
  select.value=""; qtdInput.value=""; if(descInput) descInput.value="";
  renderizarTabelaCategoria(cat); calcularTotais();
}
function removerAtividade(uid,cat) { atividadesSelecionadas=atividadesSelecionadas.filter(i=>i.uid!==uid); renderizarTabelaCategoria(cat); calcularTotais(); }
function editarAtividade(uid,cat) {
  const item=atividadesSelecionadas.find(i=>i.uid===uid); if(!item)return;
  const desc=prompt(`Descrição breve da atividade:\n${item.cod} ${item.desc}`,item.descricao||""); if(desc===null)return;
  const q=prompt(`Quantidade total / horas para ${item.cod}`,String(item.qtd)); if(q===null)return;
  const qtd=parseFloat(q.replace(',','.'));
  if(!desc.trim()||!Number.isFinite(qtd)||(qtd<=0&&item.calc!=="score")||(item.calc==="score"&&qtd>10)){alert("Descrição ou quantidade inválida. Confira a descrição e a quantidade informada.");return;}
  item.descricao=desc.trim();item.qtd=qtd;renderizarTabelaCategoria(cat);calcularTotais();
}
function salvarComprovante(uid,input) {
 const item=atividadesSelecionadas.find(i=>i.uid===uid); if(!item||!input.files?.length)return;
 const selecionados=Array.from(input.files);
 const invalidos=selecionados.filter(f=>f.type!=="application/pdf"&&!f.name.toLowerCase().endsWith(".pdf"));
 if(invalidos.length){alert("Todos os comprovantes devem estar em formato PDF. Nenhum arquivo desta seleção foi adicionado.");input.value="";return;}
 if(!Array.isArray(item.arquivosPDF))item.arquivosPDF=item.arquivoPDF?[item.arquivoPDF]:[];
 const existentes=new Set(item.arquivosPDF.map(f=>`${f.name}|${f.size}|${f.lastModified}`));
 selecionados.forEach(f=>{const chave=`${f.name}|${f.size}|${f.lastModified}`;if(!existentes.has(chave)){item.arquivosPDF.push(f);existentes.add(chave);}});
 const label=document.getElementById(`arquivo-${uid}`);if(label)label.textContent=item.arquivosPDF.length?item.arquivosPDF.map(f=>f.name).join(", "):"Nenhum comprovante adicionado";
 const botao=document.getElementById(`btn-arquivo-${uid}`);if(botao)botao.innerHTML='<i class="fas fa-plus-circle"></i> Adicionar mais arquivos';
 input.value="";
}
function abrirSeletorComprovantes(uid){const input=document.getElementById(`input-arquivo-${uid}`);if(input)input.click();}
function renderizarTodasAsTabelas(){categoriaIds.forEach(renderizarTabelaCategoria);}
function compararCodigos(a,b){const aa=a.replace(/\.$/,"").split(".").map(Number),bb=b.replace(/\.$/,"").split(".").map(Number);for(let i=0;i<Math.max(aa.length,bb.length);i++){const d=(aa[i]||0)-(bb[i]||0);if(d)return d;}return 0;}
function renderizarTabelaCategoria(cat){
 const container=document.getElementById(`tabela-${cat}`);if(!container)return;
 const itens=atividadesSelecionadas.filter(i=>i.cat===cat).sort((a,b)=>compararCodigos(a.cod,b.cod));
 if(!itens.length){container.innerHTML='<div class="alert alert-light text-center border text-muted">Nenhuma atividade adicionada nesta categoria.</div>';return;}
 let html='<div class="table-responsive"><table class="table table-bordered table-sm table-hover mt-3"><thead class="thead-light"><tr><th>Atividade / descrição informada</th><th>Fator</th><th>Qtd./horas/semestres</th><th>Pontos</th><th>Comprovante</th><th>Ações</th></tr></thead><tbody>';
 itens.forEach(i=>{const pts=pontosAtividade(i);const arquivos=i.arquivosPDF||(i.arquivoPDF?[i.arquivoPDF]:[]);const temArquivos=arquivos.length>0;html+=`<tr><td><strong>${esc(i.cod)} ${esc(i.desc)}</strong><div class="small text-muted mt-1">${esc(i.descricao)}</div></td><td class="small">${i.fator} ${esc(i.unit)}</td><td>${i.qtd}</td><td class="font-weight-bold text-success">${pts.toFixed(2)}</td><td><input type="file" id="input-arquivo-${i.uid}" class="d-none" accept="application/pdf,.pdf" multiple onchange="salvarComprovante('${i.uid}',this)"><button type="button" id="btn-arquivo-${i.uid}" class="btn btn-sm btn-outline-success mb-2" onclick="abrirSeletorComprovantes('${i.uid}')"><i class="fas fa-plus-circle"></i> ${temArquivos?'Adicionar mais arquivos':'Adicionar comprovantes'}</button><div><small id="arquivo-${i.uid}" class="text-muted">${temArquivos?arquivos.map(f=>esc(f.name)).join(", "):"Nenhum comprovante adicionado"}</small></div><small class="text-muted d-block mt-1">Somente arquivos PDF. Você pode adicionar arquivos em etapas.</small></td><td class="text-center text-nowrap"><button class="btn btn-outline-primary btn-sm" onclick="editarAtividade('${i.uid}','${cat}')" title="Editar"><i class="fas fa-edit"></i></button> <button class="btn btn-outline-danger btn-sm" onclick="removerAtividade('${i.uid}','${cat}')" title="Excluir"><i class="fas fa-trash"></i></button></td></tr>`;});
 container.innerHTML=html+'</tbody></table></div>';
}
function calcularTotais(){let total=0;atividadesSelecionadas.forEach(i=>total+=pontosAtividade(i));const el=document.getElementById("pontuacao-total-geral");if(el)el.innerText=total.toFixed(2);const n=document.getElementById("quantidade-atividades");if(n)n.innerText=atividadesSelecionadas.length;}
function periodoValido(){const data=document.getElementById("data_progressao")?.value;const periodo=document.getElementById("periodo_avaliacao")?.value.trim();if(!data||!periodo){alert("Informe a data da última progressão e o período avaliado de 24 meses (4 semestres).");return false;}return true;}
async function gerarRIDOficialComBrasao(){
 const btn=document.getElementById("btn-gerar-pdf");if(!atividadesSelecionadas.length){alert("Inclua ao menos uma atividade antes de gerar o RID.");return;}if(!periodoValido())return;
 if(btn){btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Gerando PDF...';}
 try{
  if(!window.PDFLib||!window.html2pdf)throw new Error("As bibliotecas de PDF não foram carregadas. Verifique a conexão e tente novamente.");
  const {PDFDocument, StandardFonts, rgb}=PDFLib;const nome=document.getElementById("nome_social").value.trim()||document.getElementById("nome_civil").value.trim()||"Docente";const siape=document.getElementById("siape").value.trim()||"Não informado";
  const ordenadas=[...atividadesSelecionadas].sort((a,b)=>compararCodigos(a.cod,b.cod));
  // Gera a tabela primeiro para descobrir quantas páginas o RID ocupa; depois refaz com referências corretas aos anexos.
  async function renderRID(primeiraPaginaAnexo){
   let pagina=primeiraPaginaAnexo;const lista=[];
   for(const i of ordenadas){let info="Não anexado";const arquivos=i.arquivosPDF|| (i.arquivoPDF?[i.arquivoPDF]:[]);if(arquivos.length){const refs=[];try{for(const arquivo of arquivos){const d=await PDFDocument.load(await arquivo.arrayBuffer());const n=d.getPageCount();if(n){refs.push(n>1?`p. ${pagina}–${pagina+n-1}`:`p. ${pagina}`);pagina+=n;}}info=refs.length?refs.join("; "):"PDF vazio";}catch(e){info="Arquivo inválido";}}lista.push({...i,paginaInfo:info});}
   const grupos=categoriasRID.map(c=>({key:c.id,titulo:c.nome}));let blocos="";
   grupos.forEach(g=>{const arr=lista.filter(i=>i.cat===g.key);let sub=0;blocos+=`<h4 class="group-title">${esc(g.titulo)}</h4>`;if(!arr.length){blocos+='<p class="muted">Nenhuma atividade declarada.</p>';return;}blocos+='<table class="rid-table"><thead><tr><th>Atividade e descrição</th><th>Qtd.</th><th>Pontos</th><th>Comprovante</th></tr></thead><tbody>';arr.forEach(i=>{const pts=pontosAtividade(i);sub+=pts;blocos+=`<tr><td><b>${esc(i.cod)} ${esc(i.desc)}</b><div class="desc">${esc(i.descricao)}</div></td><td class="center">${i.qtd}</td><td class="center">${pts.toFixed(2)}</td><td class="center">${esc(i.paginaInfo)}</td></tr>`;});blocos+='</tbody></table>';blocos+=`<p class="subtotal">Subtotal: ${sub.toFixed(2)} pontos</p>`;});
   const el=document.createElement("div");el.id="rid-pdf-render";el.style.cssText="width:190mm;padding:0;background:#fff;color:#212529;font-family:Arial,sans-serif;font-size:9pt;";
   el.innerHTML=`<style>#rid-pdf-render{box-sizing:border-box}#rid-pdf-render .head{text-align:center;margin-bottom:10px}#rid-pdf-render .head .logos{display:flex;align-items:center;justify-content:center;margin-bottom:5px}#rid-pdf-render .head .brasao{width:44px;height:auto}#rid-pdf-render h3{font-size:12pt;margin:2px}#rid-pdf-render h4{font-size:10pt}#rid-pdf-render .meta{width:100%;border-collapse:collapse;margin:10px 0;font-size:9pt}#rid-pdf-render .meta td{padding:4px;border:1px solid #bbb}#rid-pdf-render .group-title{background:#005a2b;color:#fff;padding:6px;margin:12px 0 4px;break-after:avoid}#rid-pdf-render .rid-table{width:100%;border-collapse:collapse;margin-bottom:3px;font-size:8pt}#rid-pdf-render .rid-table th,#rid-pdf-render .rid-table td{border:1px solid #aaa;padding:4px;vertical-align:top}#rid-pdf-render .rid-table th{background:#e9ecef}#rid-pdf-render .desc{font-size:8pt;color:#555;margin-top:3px}#rid-pdf-render .center{text-align:center}#rid-pdf-render .subtotal{text-align:right;font-weight:bold;font-size:6pt;line-height:1.15;white-space:nowrap;margin:3px 0 8px;padding-right:5px;box-sizing:border-box;width:100%;letter-spacing:-0.1px}#rid-pdf-render .muted{color:#666;font-style:italic}#rid-pdf-render .total{background:#e9ecef;border:1px solid #aaa;padding:9px;text-align:right;font-weight:bold;font-size:11pt;margin-top:14px}</style><div class="head"><div class="logos"><img class="brasao" src="brasaodarepublica.png" alt="Brasão da República"></div><h3>REPÚBLICA FEDERATIVA DO BRASIL</h3><h3>UNIVERSIDADE FEDERAL DA FRONTEIRA SUL — UFFS</h3><div><b>RELATÓRIO INDIVIDUAL DOCENTE (RID)</b></div><div>Resolução nº 49/CONSUNI/UFFS/2020, com alterações da Resolução nº 239/CONSUNI/UFFS/2026</div></div><hr style="border:1px solid #008037"><table class="meta"><tr><td><b>Docente:</b> ${esc(nome)}</td><td><b>SIAPE:</b> ${esc(siape)}</td></tr><tr><td><b>Lotação:</b> ${esc(document.getElementById("lotacao").value||"Não informada")}</td><td><b>Regime:</b> ${esc(document.getElementById("regime").value)}</td></tr><tr><td><b>Última progressão:</b> ${esc(document.getElementById("data_progressao").value)}</td><td><b>Período avaliado:</b> ${esc(document.getElementById("periodo_avaliacao").value)}</td></tr></table>${blocos}<div class="total">PONTUAÇÃO TOTAL: ${document.getElementById("pontuacao-total-geral").innerText} pontos</div><div style="text-align:center;margin-top:30px"><b>${esc(nome)}</b><br>Docente</div>`;
   document.body.appendChild(el);const buffer=await html2pdf().set({margin:[10,10,14,10],html2canvas:{scale:2,useCORS:true,scrollY:0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["css","legacy"]}}).from(el).outputPdf("arraybuffer");el.remove();return await PDFDocument.load(buffer);
  }
  let ridDoc=await renderRID(1);const totalPaginasRID=ridDoc.getPageCount();ridDoc=await renderRID(totalPaginasRID+1);
  const finalDoc=await PDFDocument.create();const ridPages=await finalDoc.copyPages(ridDoc,ridDoc.getPageIndices());ridPages.forEach(p=>finalDoc.addPage(p));
  for(const i of ordenadas){const arquivos=i.arquivosPDF|| (i.arquivoPDF?[i.arquivoPDF]:[]);for(const arquivo of arquivos){try{const doc=await PDFDocument.load(await arquivo.arrayBuffer());const pages=await finalDoc.copyPages(doc,doc.getPageIndices());pages.forEach(p=>finalDoc.addPage(p));}catch(e){throw new Error(`Não foi possível ler o comprovante de ${i.cod} — ${i.desc}: ${arquivo.name}`);}}}
  // Numeração de todas as páginas, RID e anexos, no rodapé.
  const font=await finalDoc.embedFont(StandardFonts.Helvetica);const pages=finalDoc.getPages();pages.forEach((pg,idx)=>{const {width}=pg.getSize();pg.drawText(`Página ${idx+1} de ${pages.length}`,{x:width-105,y:18,size:9,font,color:rgb(0.25,0.25,0.25)});});
  const bytes=await finalDoc.save();const blob=new Blob([bytes],{type:"application/pdf"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=`RID_${siape.replace(/[^\w-]/g,"")||"DOCENTE"}.pdf`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);
 }catch(e){console.error(e);alert("Erro ao gerar o RID: "+e.message);}finally{if(btn){btn.disabled=false;btn.innerHTML='<i class="fas fa-file-pdf"></i> Gerar RID + comprovantes PDF';}}
}
