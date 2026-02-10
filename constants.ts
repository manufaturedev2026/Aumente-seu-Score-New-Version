
import { EducationalModule, DayMission, ScoreMyth, ChecklistItem } from './types';

export const XP_VALUES = {
  TOPIC_READ: 50,
  CHECKLIST_ITEM: 20,
  QUIZ_CORRECT: 100,
  QUIZ_WRONG: 20
};

export const COACH_TIPS = [
  "O score é um reflexo dos seus hábitos, não apenas das suas dívidas.",
  "Bancos amam previsibilidade. Pague sempre antes do vencimento.",
  "Cadastro Positivo ativo é o primeiro passo para o crédito alto.",
  "Evite pedir cartões novos se você já foi negado nos últimos 30 dias.",
  "Dívida paga com desconto pode gerar restrição interna bancária.",
  "Mantenha seus dados cadastrais (telefone e endereço) sempre iguais em todos os birôs.",
  "O uso ideal do limite do cartão é de no máximo 30%.",
  "Pagar a fatura 2 dias antes do vencimento sinaliza 'folga financeira' ao sistema.",
  "Não encerre contas bancárias antigas; o tempo de relacionamento conta pontos.",
  "CPF na nota não aumenta score, mas o Cadastro Positivo sim.",
  "Verifique o Registrato do Banco Central pelo menos uma vez por mês.",
  "Cuidado com empresas que prometem 'limpar score' mediante pagamento. É golpe.",
  "Ter contas de consumo (luz/água) no seu nome cria rastro de bom pagador.",
  "Muitas consultas ao seu CPF em curto prazo derrubam sua pontuação.",
  "O score interno dos bancos (Rating) é tão importante quanto o score do Serasa.",
  "O Cadastro Positivo mostra que você é capaz de honrar compromissos futuros.",
  "Bancos digitais são ótimos, mas bancos tradicionais dão mais peso para financiamentos.",
  "Evite usar o cheque especial, mesmo que por apenas um dia.",
  "Se for renegociar, tente pagar o valor total com desconto em vez de parcelar.",
  "Manter um pequeno investimento no banco ajuda a melhorar seu Rating interno.",
  "O sistema de score leva cerca de 3 a 6 meses para entender novos bons hábitos.",
  "Diversifique seu crédito: um cartão, um pequeno empréstimo e contas fixas.",
  "Seu score caiu sem motivo aparente? Verifique se houve consultas indevidas.",
  "Pagar o mínimo do cartão é o caminho mais rápido para destruir sua pontuação.",
  "A consistência é mais importante que o valor pago: pague sempre no dia.",
  "Coloque suas contas principais em débito automático para evitar esquecimentos.",
  "Atualize sua renda no app do banco sempre que houver um aumento real.",
  "O Quod é o birô dos grandes bancos; mantenha seu cadastro positivo lá também.",
  "Nunca empreste seu nome para terceiros comprarem a prazo.",
  "O Cadastro Positivo pode ser seu melhor amigo ou seu pior inimigo se você atrasar.",
  "Empréstimos com garantia (carro/imóvel) têm os menores juros do mercado.",
  "Antes de pedir um novo cartão, espere seu score estar na zona verde.",
  "Consultar o próprio CPF não baixa score. Monitore-se semanalmente.",
  "O histórico negativo de 5 anos atrás não conta mais para o score público.",
  "Dívidas de empresas de telefonia são as mais fáceis de negociar com desconto.",
  "A estabilidade profissional ajuda na análise de crédito manual dos bancos.",
  "Use o cartão de crédito para tudo, mas pague o total. Isso gera histórico.",
  "Se o banco negar crédito, pergunte o motivo real (eles são obrigados a informar).",
  "O 'Mínimo Existencial' protege seu salário de ser totalmente retido por dívidas.",
  "Ter chaves PIX cadastradas no banco principal aumenta o engajamento com a conta.",
  "Cuidado com compras parceladas demais; elas ocupam seu limite por muito tempo.",
  "O score do Boa Vista (SCPC) é muito usado por redes de varejo e vestuário.",
  "Mantenha seu e-mail e celular de recuperação sempre ativos no Serasa.",
  "O Cadastro Positivo registra até mesmo o valor das suas faturas pagas.",
  "Evite pagar contas com atraso de apenas 1 dia; o sistema registra o deslize.",
  "A reserva de emergência te impede de precisar de crédito caro em crises.",
  "Negocie suas dívidas nos feirões limpa-nome para obter descontos de até 99%.",
  "O score é uma maratona, não um sprint. Tenha paciência e disciplina.",
  "Bancos monitoram seu comportamento de consumo para oferecer limites maiores.",
  "Seu crédito é seu maior patrimônio financeiro. Cuide bem dele.",
  "Educação financeira é a única forma de nunca mais precisar 'limpar o nome'."
];

export const PLAN_30_STEPS: DayMission[] = [
  {
    day: 1,
    title: "O Início",
    question: "Consultar o próprio CPF nos sites dos birôs (Serasa/Boa Vista) reduz a pontuação do Score?",
    options: [
      { text: "Sim, toda consulta retira pontos.", isCorrect: false },
      { text: "Não, auto-consulta é gratuita e não afeta o score.", isCorrect: true }
    ],
    explanation: "Consultar seu próprio CPF é um direito e não gera queda na pontuação. O que pode baixar o score são consultas feitas por empresas quando você pede crédito.",
    completed: false
  },
  {
    day: 2,
    title: "Limite Saudável",
    question: "Qual a porcentagem ideal de uso do limite do seu cartão de crédito para manter um score alto?",
    options: [
      { text: "Usar 100% do limite sempre.", isCorrect: false },
      { text: "Manter o gasto abaixo de 30% do limite total.", isCorrect: true },
      { text: "Não usar o cartão de jeito nenhum.", isCorrect: false }
    ],
    explanation: "O sistema entende que quem usa todo o limite está 'no sufoco'. Manter abaixo de 30% sinaliza que você tem controle e não depende apenas do crédito.",
    completed: false
  },
  {
    day: 3,
    title: "Prazo de Limpeza",
    question: "Após pagar a 1ª parcela de um acordo, qual o prazo legal para a empresa retirar seu nome do SPC/Serasa?",
    options: [
      { text: "24 horas úteis.", isCorrect: false },
      { text: "Até 5 dias úteis.", isCorrect: true },
      { text: "30 dias corridos.", isCorrect: false }
    ],
    explanation: "Conforme o Código de Defesa do Consumidor, após a compensação do pagamento, a empresa tem 5 dias úteis para retirar a restrição.",
    completed: false
  },
  {
    day: 4,
    title: "Cadastro Positivo",
    question: "O que o Cadastro Positivo registra no seu histórico financeiro?",
    options: [
      { text: "Apenas suas dívidas em atraso.", isCorrect: false },
      { text: "Suas contas pagas em dia (Luz, Água, Cartão).", isCorrect: true },
      { text: "Suas compras em dinheiro vivo.", isCorrect: false }
    ],
    explanation: "O Cadastro Positivo é o 'currículo do bom pagador'. Ele mostra o que você acerta, ajudando a subir o score mais rápido que as dívidas baixam.",
    completed: false
  },
  {
    day: 5,
    title: "CPF na Nota",
    question: "Colocar o CPF na nota fiscal de compras em supermercados aumenta diretamente o seu Score?",
    options: [
      { text: "Sim, é a forma mais rápida de subir.", isCorrect: false },
      { text: "Não, isso não influencia o cálculo do Score dos birôs.", isCorrect: true }
    ],
    explanation: "CPF na nota é uma ação governamental para impostos estaduais. Os birôs de crédito (Serasa/SPC) não recebem esses dados para o cálculo do Score.",
    completed: false
  },
  {
    day: 6,
    title: "Dívidas Antigas",
    question: "Dívidas com mais de 5 anos (prescritas) podem continuar impedindo a subida do seu Score?",
    options: [
      { text: "Sim, elas ficam lá para sempre.", isCorrect: false },
      { text: "Não, elas saem da base de cálculo do Score público.", isCorrect: true }
    ],
    explanation: "Após 5 anos, a dívida 'caduca' e deve sair dos birôs. Ela não pode mais baixar seu score público, embora o banco original ainda tenha o registro interno.",
    completed: false
  },
  {
    day: 7,
    title: "Vários Cartões",
    question: "Pedir vários cartões de crédito em diferentes bancos na mesma semana é bom para o Score?",
    options: [
      { text: "Não, muitas consultas seguidas sinalizam desespero financeiro.", isCorrect: true },
      { text: "Sim, mostra que você é popular no mercado.", isCorrect: false }
    ],
    explanation: "Cada pedido gera uma consulta. Muitas consultas em pouco tempo baixam o score porque o sistema acha que você está precisando de dinheiro urgente.",
    completed: false
  },
  {
    day: 8,
    title: "Endividamento",
    question: "Qual o comprometimento máximo da sua renda mensal com parcelas de dívidas recomendado por especialistas?",
    options: [
      { text: "Até 30% da sua renda líquida.", isCorrect: true },
      { text: "Até 70% da sua renda líquida.", isCorrect: false },
      { text: "Toda a sua renda pode ser comprometida.", isCorrect: false }
    ],
    explanation: "Gastar mais de 30% da renda com parcelas aumenta muito o risco de inadimplência e o sistema de crédito percebe esse perigo.",
    completed: false
  },
  {
    day: 9,
    title: "Registrato",
    question: "O que é o Registrato do Banco Central?",
    options: [
      { text: "Um site para negociar dívidas com desconto.", isCorrect: false },
      { text: "Um relatório que mostra todas as suas contas e dívidas bancárias.", isCorrect: true }
    ],
    explanation: "O Registrato é a fonte oficial do Banco Central. Nele você vê histórico de empréstimos, chaves PIX e se tem 'prejuízo' registrado em algum banco.",
    completed: false
  },
  {
    day: 10,
    title: "Acordos",
    question: "Pagar uma dívida com 90% de desconto pode gerar uma restrição interna no banco?",
    options: [
      { text: "Sim, o banco registra o valor que ele 'perdeu' como prejuízo.", isCorrect: true },
      { text: "Não, o banco esquece tudo após o pagamento.", isCorrect: false }
    ],
    explanation: "Acordos com descontos agressivos resolvem o problema no Serasa, mas o banco pode te marcar internamente como 'pagador com prejuízo'.",
    completed: false
  },
  {
    day: 11,
    title: "Débito Automático",
    question: "Colocar contas em débito automático ajuda o Score?",
    options: [
      { text: "Sim, garante o pagamento no dia e evita esquecimentos.", isCorrect: true },
      { text: "Não, o sistema prefere que você pague manualmente.", isCorrect: false }
    ],
    explanation: "A consistência é chave. Pagamentos automáticos evitam atrasos bobos de 1 ou 2 dias que podem penalizar sua pontuação constantemente.",
    completed: false
  },
  {
    day: 12,
    title: "Dados Atualizados",
    question: "Ter o endereço e telefone desatualizados no Serasa pode atrapalhar a aprovação de crédito?",
    options: [
      { text: "Sim, gera divergência de dados e alerta de fraude.", isCorrect: true },
      { text: "Não, dados de contato não importam para o crédito.", isCorrect: false }
    ],
    explanation: "Dados inconsistentes fazem os sistemas de segurança dos bancos travarem sua aprovação por medo de fraude (alguém tentando se passar por você).",
    completed: false
  },
  {
    day: 13,
    title: "Histórico Zero",
    question: "Quem nunca teve dívidas e sempre paga tudo à vista em dinheiro tem Score 1000?",
    options: [
      { text: "Não, pois o sistema não tem dados para analisar o comportamento.", isCorrect: true },
      { text: "Sim, pois nunca errou com o mercado.", isCorrect: false }
    ],
    explanation: "O Score precisa de 'rastro'. Se você não usa crédito, o sistema não sabe se você é um bom pagador ou não. É o chamado 'consumidor virgem'.",
    completed: false
  },
  {
    day: 14,
    title: "Juros Rotativos",
    question: "Pagar apenas o 'mínimo' da fatura do cartão de crédito mantém o Score alto?",
    options: [
      { text: "Não, sinaliza descontrole e gera juros altíssimos.", isCorrect: true },
      { text: "Sim, o importante é pagar qualquer valor.", isCorrect: false }
    ],
    explanation: "Pagar o mínimo indica que você não tem dinheiro para a fatura toda. Isso aumenta seu perfil de risco e derruba a pontuação drasticamente.",
    completed: false
  },
  {
    day: 15,
    title: "Bancos Digitais",
    question: "Ter conta em bancos digitais conta menos para o Score do que em bancos tradicionais?",
    options: [
      { text: "Mito. O que importa é o comportamento, não o tipo de banco.", isCorrect: true },
      { text: "Verdade. Bancos grandes dão mais autoridade.", isCorrect: false }
    ],
    explanation: "Para o Score, o que vale é se você paga em dia e como usa o crédito. O 'nome' do banco não altera o cálculo da pontuação oficial.",
    completed: false
  },
  {
    day: 16,
    title: "Empréstimos",
    question: "Pegar um empréstimo para quitar dívidas de juros mais altos (como cartão) é uma boa estratégia?",
    options: [
      { text: "Sim, chama-se troca de dívida cara por dívida barata.", isCorrect: true },
      { text: "Não, fazer dívida para pagar dívida é sempre militar.", isCorrect: false }
    ],
    explanation: "Se os juros do empréstimo forem menores que os do cartão, você economiza dinheiro e organiza o fluxo de caixa, o que ajuda a longo prazo.",
    completed: false
  },
  {
    day: 17,
    title: "Limites Altos",
    question: "Ter um limite de cartão muito alto que você não usa pode prejudicar seu Score?",
    options: [
      { text: "Pode ser ruim se o mercado achar que você está muito exposto ao risco.", isCorrect: true },
      { text: "Não, quanto mais limite melhor sempre.", isCorrect: false }
    ],
    explanation: "Muito limite aprovado em vários bancos soma o seu 'risco total'. Bancos novos podem negar crédito por achar que você já tem crédito demais disponível.",
    completed: false
  },
  {
    day: 18,
    title: "Tempo de Conta",
    question: "Encerrar contas bancárias muito antigas pode baixar o seu Score?",
    options: [
      { text: "Sim, você perde o histórico de relacionamento de longo prazo.", isCorrect: true },
      { text: "Não, abrir contas novas é sempre melhor.", isCorrect: false }
    ],
    explanation: "O tempo de relacionamento conta pontos. Ter uma conta há 10 anos mostra estabilidade financeira para o sistema de crédito.",
    completed: false
  },
  {
    day: 19,
    title: "Segurança",
    question: "Compartilhar sua senha do Serasa com empresas que prometem subir seu score é seguro?",
    options: [
      { text: "Nunca. É um golpe perigoso para roubo de dados.", isCorrect: true },
      { text: "Sim, se a empresa for bem recomendada.", isCorrect: false }
    ],
    explanation: "Ninguém tem poder de 'editar' sua nota no sistema. Empresas que pedem senha querem acessar seus dados ou aplicar golpes.",
    completed: false
  },
  {
    day: 20,
    title: "Superendividamento",
    question: "O que diz a Lei do Superendividamento sobre o 'mínimo existencial'?",
    options: [
      { text: "Que o banco não pode tomar todo seu salário para pagar dívidas.", isCorrect: true },
      { text: "Que você não precisa pagar nenhuma dívida se for pobre.", isCorrect: false }
    ],
    explanation: "A lei protege uma parte da sua renda para sua sobrevivência básica (comida, aluguel), obrigando os bancos a renegociar de forma justa.",
    completed: false
  },
  {
    day: 21,
    title: "Comprovante de Renda",
    question: "Movimentar sua conta bancária corrente ajuda o banco a entender sua renda real?",
    options: [
      { text: "Sim, serve como extrato de movimentação para análise interna.", isCorrect: true },
      { text: "Não, o banco só acredita em holerite/contra-cheque.", isCorrect: false }
    ],
    explanation: "Para autônomos, a movimentação da conta é a principal prova de que você tem dinheiro circulando e capacidade de pagar parcelas.",
    completed: false
  },
  {
    day: 22,
    title: "Tipos de Crédito",
    question: "Qual desses tipos de crédito costuma ter os juros MAIS BAIXOS?",
    options: [
      { text: "Crédito Consignado (descontado em folha).", isCorrect: true },
      { text: "Cheque Especial.", isCorrect: false },
      { text: "Cartão de Crédito Rotativo.", isCorrect: false }
    ],
    explanation: "No consignado a garantia é o seu salário. Menor risco para o banco significa juros muito menores para você.",
    completed: false
  },
  {
    day: 23,
    title: "Reserva Financeira",
    question: "Qual a função da reserva de emergência para o seu Score?",
    options: [
      { text: "Evita que você use crédito caro em momentos de crise.", isCorrect: true },
      { text: "O Serasa vê o saldo da sua poupança e aumenta os pontos.", isCorrect: false }
    ],
    explanation: "A reserva te protege de imprevistos. Se o carro quebrar, você usa sua reserva em vez de atrasar o cartão ou entrar no cheque especial.",
    completed: false
  },
  {
    day: 24,
    title: "Antecipação",
    question: "Antecipar o pagamento da fatura do cartão (antes de fechar) ajuda o Score?",
    options: [
      { text: "Sim, mantém seu 'uso de limite' sempre baixo na foto do birô.", isCorrect: true },
      { text: "Não, o ideal é pagar só no dia do vencimento.", isCorrect: false }
    ],
    explanation: "Os birôs tiram uma 'foto' do seu saldo devedor uma vez por mês. Se você antecipa, essa foto mostra que você deve pouco ou nada.",
    completed: false
  },
  {
    day: 25,
    title: "Dívidas Ativas",
    question: "Se você tem uma dívida, mas ela NÃO está no Serasa, você deve se preocupar?",
    options: [
      { text: "Sim, ela pode aparecer no Registrato e travar seu crédito bancário.", isCorrect: true },
      { text: "Não, se não está no Serasa o nome está limpo.", isCorrect: false }
    ],
    explanation: "O Serasa é apenas uma vitrine. Os bancos trocam informações entre si. Uma dívida num banco 'A' impede crédito no banco 'B' mesmo sem protesto.",
    completed: false
  },
  {
    day: 26,
    title: "Parcelamento de Fatura",
    question: "Parcelar a fatura do cartão de crédito é melhor para o Score do que pagar o mínimo?",
    options: [
      { text: "Sim, é um acordo formal e interrompe o rotativo.", isCorrect: true },
      { text: "Não, o efeito no Score é o mesmo.", isCorrect: false }
    ],
    explanation: "O parcelamento é uma renegociação. Embora sinalize alerta, é muito menos pior que o atraso ou o pagamento mínimo sem controle.",
    completed: false
  },
  {
    day: 27,
    title: "Consultas Indevidas",
    question: "O que fazer se aparecer uma consulta no seu CPF de uma empresa que você não conhece?",
    options: [
      { text: "Contestar a consulta no site do birô para evitar fraude.", isCorrect: true },
      { text: "Ignorar, pois consultas somem sozinhas.", isCorrect: false }
    ],
    explanation: "Consultas desconhecidas podem ser sinal de que alguém está tentando abrir contas no seu nome. Monitore sempre!",
    completed: false
  },
  {
    day: 28,
    title: "Perfil do Consumidor",
    question: "Bancos preferem clientes que usam o cheque especial todo mês mas pagam os juros?",
    options: [
      { text: "Não, eles preferem clientes que não dependem de crédito emergencial.", isCorrect: true },
      { text: "Sim, pois o banco ganha mais juros assim.", isCorrect: false }
    ],
    explanation: "Embora o banco lucre com juros, o risco desse cliente quebrar é alto. Para crédito de longo prazo (casa/carro), eles querem clientes estáveis.",
    completed: false
  },
  {
    day: 29,
    title: "Educação Financeira",
    question: "Qual o maior segredo para manter um Score 900+ para sempre?",
    options: [
      { text: "Pagar tudo rigorosamente em dia e nunca gastar mais do que ganha.", isCorrect: true },
      { text: "Usar truques de internet e aplicativos de aumento de score.", isCorrect: false }
    ],
    explanation: "Não existe mágica. Score alto é consequência de uma vida financeira organizada, honesta e previsível.",
    completed: false
  },
  {
    day: 30,
    title: "A Vitória",
    question: "Depois de completar os 30 dias e subir seu score, o que você deve fazer?",
    options: [
      { text: "Manter os bons hábitos e monitorar seu CPF mensalmente.", isCorrect: true },
      { text: "Fazer novos empréstimos para comemorar.", isCorrect: false }
    ],
    explanation: "Crédito é como um jardim: precisa de manutenção constante. Continue cuidando para ter portas abertas sempre que precisar!",
    completed: false
  }
];

export const EDUCATIONAL_MODULES: EducationalModule[] = [
  {
    id: 1,
    title: "Módulo 1: O Jogo do Crédito",
    subtitle: "Fundamentos Essenciais",
    topics: [
      { 
        id: 'm1t1', 
        title: "O que é Score de verdade?", 
        completed: false, 
        content: "O Score é uma nota de 0 a 1000 que resume sua 'confiabilidade' para o mercado. Ele não olha apenas para dívidas, mas para quanto você gasta, onde gasta e como paga.\n\nImagine que o Score é o seu currículo financeiro: se ele estiver ruim, as empresas não te 'contratam' para dar crédito.", 
        chapterContext: "Capítulo 1" 
      },
      { 
        id: 'm1t2', 
        title: "História do Score no Brasil", 
        completed: false, 
        content: "Antigamente só existia o 'nome sujo'. Hoje, mesmo com nome limpo, você pode ter crédito negado por ter score baixo.\n\nA mudança ocorreu porque os bancos queriam prever quem iria atrasar no futuro, não apenas quem já atrasou no passado.", 
        chapterContext: "Capítulo 1" 
      },
      { 
        id: 'm1t3', 
        title: "O Peso do Cadastro Positivo", 
        completed: false, 
        content: "O Cadastro Positivo é a ferramenta mais rápida para subir o score. Ele mostra que você paga luz, água e faturas em dia.\n\nSem ele, o sistema só enxerga seus erros. Com ele, ele começa a pontuar seus acertos diários.", 
        chapterContext: "Capítulo 1" 
      },
      { 
        id: 'm1t4', 
        title: "Mitos que te fazem perder tempo", 
        completed: false, 
        content: "Colocar CPF na nota não aumenta score. Pagar empresas para 'limpar' o score é golpe. O score só sobe com comportamento real e tempo.\n\nNão caia em promessas mágicas de 'score 900 em 24h'. Isso não existe no sistema bancário real.", 
        chapterContext: "Capítulo 1" 
      }
    ]
  },
  {
    id: 2,
    title: "Módulo 2: Bastidores dos Bancos",
    subtitle: "Como o Sistema te Analisa",
    topics: [
      { 
        id: 'm2t1', 
        title: "Rating Interno vs Score Externo", 
        completed: false, 
        content: "Cada banco tem um score interno secreto (Rating). Você pode ter 900 no Serasa e 0 no banco por causa de uma dívida antiga que foi 'perdoada' ou paga com muito desconto.\n\nEntender o Rating é a chave para conseguir cartões de alta renda.", 
        chapterContext: "Capítulo 2" 
      },
      { 
        id: 'm2t2', 
        title: "O Poder do Registrato (Bacen)", 
        completed: false, 
        content: "O Registrato é a 'caixa preta' do seu dinheiro. Ele mostra todas as contas abertas em seu nome e se você já deu prejuízo a algum banco.\n\nSempre consulte o Registrato para ver se não há restrições que o Serasa não mostra.", 
        chapterContext: "Capítulo 2" 
      },
      { 
        id: 'm2t3', 
        title: "Os 4 Birôs: Serasa, SPC, Boa Vista e Quod", 
        completed: false, 
        content: "O mercado não olha só para o Serasa. Muitas lojas de varejo usam o Boa Vista (SCPC). Bancos modernos usam o Quod.\n\nMantenha seus dados atualizados e idênticos em todos eles para evitar bloqueios de segurança.", 
        chapterContext: "Capítulo 2" 
      }
    ]
  },
  {
    id: 3,
    title: "Módulo 3: Limpeza Técnica",
    subtitle: "Saindo do Vermelho com Estratégia",
    topics: [
      { 
        id: 'm3t1', 
        title: "A Pirâmide das Dívidas", 
        completed: false, 
        content: "Nem toda dívida deve ser paga agora. Priorize: 1. Essenciais (Luz/Água), 2. Com Bens em Garantia (Carro/Casa), 3. Cartão e Cheque Especial (Juros altos).\n\nDívidas de varejo (lojas de roupa) podem esperar por negociações melhores.", 
        chapterContext: "Capítulo 3" 
      },
      { 
        id: 'm3t2', 
        title: "A Arte da Negociação", 
        completed: false, 
        content: "Nunca aceite a primeira proposta. Os bancos reservam os melhores descontos para o final do trimestre ou feirões limpa-nome.\n\nSempre peça o boleto de quitação à vista se tiver o dinheiro, o desconto costuma ser de 70% a 95%.", 
        chapterContext: "Capítulo 3" 
      }
    ]
  },
  {
    id: 4,
    title: "Módulo 4: Reconstrução de Imagem",
    subtitle: "Voltando a ter Crédito",
    topics: [
      { 
        id: 'm4t1', 
        title: "O Cartão de Crédito 'Isca'", 
        completed: false, 
        content: "Após limpar o nome, você precisa de um cartão de entrada (mesmo que com R$ 200 de limite) para mostrar ao sistema que você voltou a consumir de forma saudável.\n\nUse o cartão para gastos pequenos e pague sempre 2 dias antes do vencimento.", 
        chapterContext: "Capítulo 4" 
      },
      { 
        id: 'm4t2', 
        title: "Contas de Consumo no seu CPF", 
        completed: false, 
        content: "Se você mora com os pais ou cônjuge e não tem contas no nome, seu score dificilmente subirá.\n\nTransfira a conta de internet ou luz para o seu nome para criar rastro de bom pagador.", 
        chapterContext: "Capítulo 4" 
      }
    ]
  },
  {
    id: 5,
    title: "Módulo 5: Blindagem Financeira",
    subtitle: "Nunca mais Fique no Vermelho",
    topics: [
      { 
        id: 'm5t1', 
        title: "O Método 50/30/20", 
        completed: false, 
        content: "Divida sua renda: 50% para necessidades básicas, 30% para desejos pessoais e 20% para pagar dívidas ou investir.\n\nSem esse controle, qualquer imprevisto te levará de volta ao Serasa.", 
        chapterContext: "Capítulo 5" 
      },
      { 
        id: 'm5t2', 
        title: "Reserva de Emergência", 
        completed: false, 
        content: "Sua meta é ter pelo menos 6 meses do seu custo de vida guardado. Isso te impede de usar o cheque especial ou o rotativo do cartão quando a geladeira quebrar.", 
        chapterContext: "Capítulo 5" 
      }
    ]
  },
  {
    id: 6,
    title: "Módulo 6: Uso Inteligente de Crédito",
    subtitle: "Fazendo o Sistema Trabalhar para Você",
    topics: [
      { 
        id: 'm6t1', 
        title: "Diversificação de Crédito", 
        completed: false, 
        content: "Ter apenas cartão de crédito não é o ideal. Ter um pequeno financiamento ou empréstimo pago rigorosamente em dia mostra que você sabe lidar com diferentes tipos de crédito.\n\nIsso 'estica' sua nota de crédito para cima.", 
        chapterContext: "Capítulo 6" 
      },
      { 
        id: 'm6t2', 
        title: "A Regra dos 30% do Limite", 
        completed: false, 
        content: "Se o seu limite é R$ 1000, tente gastar no máximo R$ 300. Se você usa o limite todo todo mês, o banco entende que você está desesperado por dinheiro.\n\nIsso trava o seu crescimento de score.", 
        chapterContext: "Capítulo 6" 
      }
    ]
  },
  {
    id: 7,
    title: "Módulo 7: Seus Direitos Legais",
    subtitle: "Proteção do Consumidor",
    topics: [
      { 
        id: 'm7t1', 
        title: "Lei do Superendividamento", 
        completed: false, 
        content: "Existe uma lei que protege quem não consegue pagar as dívidas sem passar fome. Você pode renegociar todas as dívidas de uma vez na justiça.\n\nConhecer seus direitos é a maior defesa contra juros abusivos.", 
        chapterContext: "Capítulo 7" 
      },
      { 
        id: 'm7t2', 
        title: "Dívidas 'Caducadas'", 
        completed: false, 
        content: "Após 5 anos, a dívida sai dos birôs públicos, mas ela continua existindo no sistema interno do banco para sempre.\n\nSaber a diferença entre dívida prescrita e dívida perdoada é fundamental para sua estratégia.", 
        chapterContext: "Capítulo 7" 
      }
    ]
  }
];

export const CHECKLIST_DATA: ChecklistItem[] = [
  // MONITORAMENTO
  { 
    id: 'c1', 
    chapter: "Monitoramento", 
    label: "Consultar Score no Serasa", 
    description: "Verifique sua pontuação base no site ou app oficial da Serasa Experian. É o birô mais usado pelos bancos.", 
    linkedTopicId: 'm1t1' 
  },
  { 
    id: 'c2', 
    chapter: "Monitoramento", 
    label: "Consultar Score no Boa Vista (SCPC)", 
    description: "O Boa Vista é muito utilizado pelo varejo e lojas de departamento. Confira se há restrições aqui também.", 
    linkedTopicId: 'm2t3' 
  },
  { 
    id: 'c3', 
    chapter: "Monitoramento", 
    label: "Consultar SPC Brasil", 
    description: "O birô das câmaras de lojistas. Importante para quem consome no comércio local.", 
    linkedTopicId: 'm2t3' 
  },
  { 
    id: 'c4', 
    chapter: "Monitoramento", 
    label: "Consultar Birô Quod", 
    description: "O birô dos 5 maiores bancos. Eles focam muito no Cadastro Positivo e comportamento recente.", 
    linkedTopicId: 'm2t3' 
  },
  { 
    id: 'c5', 
    chapter: "Monitoramento", 
    label: "Acessar Registrato (Bacen)", 
    description: "Obrigatório! Verifique os relatórios CCS (contas) e SCR (dívidas bancárias). É a 'caixa preta' do seu crédito.", 
    linkedTopicId: 'm2t2' 
  },

  // DADOS E CADASTRO
  { 
    id: 'c6', 
    chapter: "Dados", 
    label: "Ativar Cadastro Positivo em TUDO", 
    description: "Garanta que o Cadastro Positivo está ativo no Serasa, Boa Vista, SPC e Quod. É o motor do seu Score.", 
    linkedTopicId: 'm1t3' 
  },
  { 
    id: 'c7', 
    chapter: "Dados", 
    label: "Atualizar Endereço no Serasa", 
    description: "Dados divergentes geram alertas de fraude. Mantenha seu endereço idêntico em todos os sites e apps.", 
    linkedTopicId: 'm1t4' 
  },
  { 
    id: 'c8', 
    chapter: "Dados", 
    label: "Limpar Histórico de Consultas", 
    description: "Se teve muitas negativas recentes, você pode solicitar a limpeza do histórico de consultas nos birôs para 'zerar' o fôlego.", 
    linkedTopicId: 'm1t4' 
  },
  { 
    id: 'c9', 
    chapter: "Dados", 
    label: "Vincular CPF às Contas de Consumo", 
    description: "Transfira pelo menos uma conta de luz, água ou internet para o seu nome e CPF.", 
    linkedTopicId: 'm4t2' 
  },

  // RELACIONAMENTO BANCÁRIO
  { 
    id: 'c10', 
    chapter: "Bancos", 
    label: "Abrir Conta em Banco Tradicional", 
    description: "Bancos digitais são ótimos, mas os tradicionais (Itaú, Bradesco, etc) ainda têm mais peso para Score de financiamento.", 
    linkedTopicId: 'm2t1' 
  },
  { 
    id: 'c11', 
    chapter: "Bancos", 
    label: "Ativar Débito Automático", 
    description: "Evita esquecimentos de 1 dia que geram multa e sinalizam 'desleixo' para o algoritmo.", 
    linkedTopicId: 'm3t3' 
  },
  { 
    id: 'c12', 
    chapter: "Bancos", 
    label: "Movimentar a Conta Corrente", 
    description: "Faça transferências, PIX e pagamentos pela sua conta principal. Mostre que você tem vida financeira ativa.", 
    linkedTopicId: 'm2t1' 
  },
  { 
    id: 'c13', 
    chapter: "Bancos", 
    label: "Fazer Upgrade de Conta Salário", 
    description: "Se você tem conta salário, peça para transformá-la em conta corrente para aumentar seu Rating interno.", 
    linkedTopicId: 'm2t1' 
  },
  { 
    id: 'c14', 
    chapter: "Bancos", 
    label: "Contratar Seguro ou Capitalização", 
    description: "Opcional, mas contratar um serviço barato do banco ajuda a subir seu Rating interno naquela instituição específica.", 
    linkedTopicId: 'm2t1' 
  },

  // HÁBITOS DE CRÉDITO
  { 
    id: 'c15', 
    chapter: "Crédito", 
    label: "Reduzir Uso do Cartão para 30%", 
    description: "Se seu limite é 1000, não passe de 300 gastos no mês. Isso prova que você não depende do cartão para viver.", 
    linkedTopicId: 'm6t2' 
  },
  { 
    id: 'c16', 
    chapter: "Crédito", 
    label: "Pagar Fatura Antecipada", 
    description: "Pagar a fatura assim que fechar (ou antes) mantém seu endividamento baixo na 'foto' mensal do birô.", 
    linkedTopicId: 'm6t2' 
  },
  { 
    id: 'c17', 
    chapter: "Crédito", 
    label: "Solicitar Cartão de Entrada", 
    description: "Se não tem nenhum crédito, peça um cartão básico (mesmo que com limite baixo) para começar a gerar histórico positivo.", 
    linkedTopicId: 'm4t1' 
  },
  { 
    id: 'c18', 
    chapter: "Crédito", 
    label: "Evitar Pedir Crédito por 60 dias", 
    description: "Cada pedido negado 'queima' seu CPF por um tempo. Dê um descanso de 2 meses para o sistema 'esquecer' as negativas.", 
    linkedTopicId: 'm1t4' 
  },
  { 
    id: 'c19', 
    chapter: "Crédito", 
    label: "Concentrar Gastos em um só Cartão", 
    description: "É melhor ter um cartão bem movimentado e pago em dia do que 5 cartões com gastos picados.", 
    linkedTopicId: 'm6t1' 
  },

  // DÍVIDAS E NEGOCIAÇÃO
  { 
    id: 'c20', 
    chapter: "Dívidas", 
    label: "Mapear Dívidas Prescritas", 
    description: "Identifique dívidas com mais de 5 anos. Elas não podem estar no Serasa, mas podem estar no SCR do Bacen.", 
    linkedTopicId: 'm7t2' 
  },
  { 
    id: 'c21', 
    chapter: "Dívidas", 
    label: "Priorizar Dívidas Bancárias", 
    description: "Se tiver que escolher o que pagar primeiro, escolha o banco. Eles são os donos do sistema de score.", 
    linkedTopicId: 'm3t1' 
  },
  { 
    id: 'c22', 
    chapter: "Dívidas", 
    label: "Solicitar Comprovante de Quitação", 
    description: "Após pagar um acordo, exija o termo de quitação. Guarde esse documento por pelo menos 5 anos.", 
    linkedTopicId: 'm3t2' 
  },

  // SEGURANÇA E FUTURO
  { 
    id: 'c23', 
    chapter: "Segurança", 
    label: "Ativar Autenticação de 2 Fatores", 
    description: "Proteja seus apps de banco e o acesso ao Serasa/Gov.br. Fraudes no seu CPF destroem o score do dia para a noite.", 
    linkedTopicId: 'm1t4' 
  },
  { 
    id: 'c24', 
    chapter: "Segurança", 
    label: "Bloquear Contas Inativas", 
    description: "Encerre contas que você não usa mais. Elas podem gerar tarifas e dívidas por descuido.", 
    linkedTopicId: 'm2t2' 
  },
  { 
    id: 'c25', 
    chapter: "Segurança", 
    label: "Definir Meta de Score Realista", 
    description: "Não mire 1000 logo de cara. Tente subir de 100 em 100 pontos a cada 3 meses.", 
    linkedTopicId: 'm1t1' 
  }
];
