export type Noticia = {
  id: string;
  categoria: string;
  titulo: string;
  resumo: string;
  conteudo: string;
};

export const noticiasTecnologia: Noticia[] = [
  {
    id: '1',
    categoria: 'Tecnologia',
    titulo: 'React Native lança nova versão',
    resumo: 'A nova versão traz melhorias de performance e novos componentes.',
    conteudo:
      'A equipe do React Native anunciou uma nova versão do framework. Entre as novidades estão melhorias de performance na renderização, novos componentes nativos e correções de bugs relatados pela comunidade. A atualização já pode ser usada em projetos com Expo.',
  },
  {
    id: '2',
    categoria: 'Tecnologia',
    titulo: 'IA generativa bate recordes',
    resumo: 'Modelos de linguagem estão cada vez mais avançados.',
    conteudo:
      'Os modelos de inteligência artificial generativa bateram novos recordes em testes de raciocínio e programação. Empresas de todo o mundo estão usando essas ferramentas para automatizar tarefas e criar novos produtos.',
  },
  {
    id: '3',
    categoria: 'Tecnologia',
    titulo: 'Expo SDK é lançado',
    resumo: 'Novas APIs, melhorias no Dev Client e correções de estabilidade.',
    conteudo:
      'A nova versão do Expo SDK foi lançada com novas APIs, melhorias no Dev Client e várias correções de estabilidade. A atualização também melhora a integração com o Expo Router.',
  },
  {
    id: '4',
    categoria: 'Tecnologia',
    titulo: 'TypeScript melhora performance',
    resumo: 'Atualizações no compilador reduzem tempos de build.',
    conteudo:
      'A nova versão do TypeScript traz atualizações no compilador que reduzem os tempos de build e melhoram o suporte a decorators. Projetos grandes são os mais beneficiados.',
  },
  {
    id: '5',
    categoria: 'Tecnologia',
    titulo: 'Hermes recebe otimizações',
    resumo: 'Engine JavaScript ganha melhor gerenciamento de memória.',
    conteudo:
      'O Hermes, engine JavaScript usada pelo React Native, recebeu otimizações no gerenciamento de memória e no tempo de inicialização dos aplicativos. Os apps abrem mais rápido e usam menos memória.',
  },
];

export const noticiasEsportes: Noticia[] = [
  {
    id: '1',
    categoria: 'Esportes',
    titulo: 'Final do campeonato é definida',
    resumo: 'Os times X e Y se enfrentarão na grande final.',
    conteudo:
      'Após semifinais eletrizantes, os times X e Y garantiram suas vagas e se enfrentarão na grande final do campeonato nacional no próximo domingo. A equipe X venceu de virada com um gol nos acréscimos, enquanto o time Y dominou seu adversário com uma vitória por 3 a 0. A expectativa é de um jogo histórico no estádio Maracanã.',
  },
  {
    id: '2',
    categoria: 'Esportes',
    titulo: 'Atleta quebra recorde mundial',
    resumo: 'Na modalidade de corrida, um novo recorde foi estabelecido.',
    conteudo:
      'Durante a competição internacional, o atleta quebrou o recorde mundial na prova de 100 metros rasos. A marca anterior já durava mais de dez anos.',
  },
  {
    id: '3',
    categoria: 'Esportes',
    titulo: 'Clássico termina empatado',
    resumo: 'Em jogo equilibrado, equipes dividem pontos.',
    conteudo:
      'O clássico da rodada terminou empatado em 2 a 2. As duas equipes viraram o placar durante o jogo e o resultado deixou os dois times na mesma posição da tabela.',
  },
  {
    id: '4',
    categoria: 'Esportes',
    titulo: 'Seleção confirma amistosos',
    resumo: 'Jogos de preparação visam dar ritmo a jovens promessas.',
    conteudo:
      'A seleção confirmou dois amistosos para o próximo mês. Os jogos servirão para testar jovens promessas antes do torneio continental.',
  },
  {
    id: '5',
    categoria: 'Esportes',
    titulo: 'Maratonista surpreende',
    resumo: 'Atleta vence prova de rua e estabelece melhor marca pessoal.',
    conteudo:
      'A maratonista venceu a prova de rua da cidade e ainda estabeleceu sua melhor marca pessoal. Ela agora se prepara para competições internacionais.',
  },
];
