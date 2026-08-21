import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight, ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import red1000GradeImg from "./assets/images/red1000_grade_1787142640673.jpg";
import profileMariaImg from "./assets/images/profile_maria.jpg";

// Types for the application views
type ViewState = "home" | "materias" | "subjectDetail";

interface Activity {
  title: string;
  whatWasDone: string;
  learning: string;
  imageUrl?: string;
  docLink?: string;
  embedUrl?: string;
  links?: { label: string; url: string }[];
  hideEmbed?: boolean;
}

interface Materia {
  id: string;
  area: string;
  title: string;
  desc: string;
  fullContent?: string;
  activities?: Activity[];
  activitiesByTrimestre?: {
    [trimestre: number]: Activity[];
  };
}

export default function App() {
  const [activeView, setActiveView] = useState<ViewState>("home");
  const [selectedMateria, setSelectedMateria] = useState<Materia | null>(null);
  const [activeTrimestre, setActiveTrimestre] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const materias: Materia[] = [
    { 
      id: "humanas", 
      area: "HUMANAS", 
      title: "Ciências Humanas", 
      desc: "Estudo da sociedade, história, geografia e filosofia, focando na compreensão das relações humanas e...",
      fullContent: "Exploração detalhada das dinâmicas sociais e históricas.",
      activities: [
        {
          title: "A Grande Guerra (30/03)",
          whatWasDone: "Abordagem sobre a Primeira Guerra Mundial, analisando causas, consequências e impactos globais, além das relações políticas e sociais do período.",
          learning: "\" C3 - H15, H16, H20 - C6 - H39 \"",
          docLink: "https://www.canva.com/design/DAHFn4COv9E/njH3qukCDKxKDlCfHna4nw/view",
          embedUrl: "https://www.canva.com/design/DAHFn4COv9E/njH3qukCDKxKDlCfHna4nw/view?embed"
        },
        {
          title: "Análise de País: Espanha",
          whatWasDone: "Trabalhei em dupla na elaboração de uma apresentação sobre um país escolhido, com o objetivo de estudar suas características e entender sua realidade geopolítica. A atividade incluiu a pesquisa de informações confiáveis sobre aspectos como cultura, economia, geografia e organização social, além da produção de slides para apresentação em sala de aula. Esse trabalho ajudou a ampliar a compreensão sobre as diferenças entre os países e a perceber melhor como fatores históricos, políticos e econômicos influenciam cada nação.",
          learning: "\" Habilidade C1, Habilidade H1, Habilidade H2, Habilidade H3, Habilidade H4, Habilidade H5 \"",
          docLink: "https://www.canva.com/design/DAHB2zdFpyA/kbiZ6kS8NNTSrVSUeIgdCg/view",
          embedUrl: "https://www.canva.com/design/DAHB2zdFpyA/kbiZ6kS8NNTSrVSUeIgdCg/view?embed"
        },
        {
          title: "Propaganda Soviética (1914–1945)",
          whatWasDone: "Nessa atividade, fiz a análise de um cartaz de propaganda soviética (1914–1945) e produzi uma versão no Canva com a imagem e sua interpretação. Expliquei os símbolos presentes, o uso das cores, a tradução do texto, os elementos artísticos e o contexto histórico da época. O objetivo foi compreender como a arte era utilizada como instrumento de propaganda.",
          learning: "\" Habilidade C2 - H8, Habilidade H10, Habilidade H12 \"",
          docLink: "https://imgur.com/a/ObrdbjR",
          embedUrl: "https://imgur.com/a/ObrdbjR/embed?pub=true"
        }
      ],
      activitiesByTrimestre: {
        1: [
          {
            title: "A Grande Guerra (30/03)",
            whatWasDone: "Abordagem sobre a Primeira Guerra Mundial, analisando causas, consequências e impactos globais, além das relações políticas e sociais do período.",
            learning: "\" C3 - H15, H16, H20 - C6 - H39 \"",
            docLink: "https://www.canva.com/design/DAHFn4COv9E/njH3qukCDKxKDlCfHna4nw/view",
            embedUrl: "https://www.canva.com/design/DAHFn4COv9E/njH3qukCDKxKDlCfHna4nw/view?embed"
          },
          {
            title: "Análise de País: Espanha",
            whatWasDone: "Trabalhei em dupla na elaboração de uma apresentação sobre um país escolhido, com o objetivo de estudar suas características e entender sua realidade geopolítica. A atividade incluiu a pesquisa de informações confiáveis sobre aspectos como cultura, economia, geografia e organização social, além da produção de slides para apresentação em sala de aula. Esse trabalho ajudou a ampliar a compreensão sobre as diferenças entre os países e a perceber melhor como fatores históricos, políticos e econômicos influenciam cada nação.",
            learning: "\" Habilidade C1, Habilidade H1, Habilidade H2, Habilidade H3, Habilidade H4, Habilidade H5 \"",
            docLink: "https://www.canva.com/design/DAHB2zdFpyA/kbiZ6kS8NNTSrVSUeIgdCg/view",
            embedUrl: "https://www.canva.com/design/DAHB2zdFpyA/kbiZ6kS8NNTSrVSUeIgdCg/view?embed"
          },
          {
            title: "Propaganda Soviética (1914–1945)",
            whatWasDone: "Nessa atividade, fiz a análise de um cartaz de propaganda soviética (1914–1945) e produzi uma versão no Canva com a imagem e sua interpretação. Expliquei os símbolos presentes, o uso das cores, a tradução do texto, os elementos artísticos e o contexto histórico da época. O objetivo foi compreender como a arte era utilizada como instrumento de propaganda.",
            learning: "\" Habilidade C2 - H8, Habilidade H10, Habilidade H12 \"",
            docLink: "https://imgur.com/a/ObrdbjR",
            embedUrl: "https://imgur.com/a/ObrdbjR/embed?pub=true"
          }
        ],
        2: [
          {
            title: "Cinema e Totalitarismo.",
            whatWasDone: "A atividade teve como objetivo entender como filmes podem mostrar características dos regimes totalitários, como propaganda, censura, repressão e manipulação das pessoas. Achei interessante porque percebi que filmes e séries podem ajudar a entender melhor a História e refletir sobre como o poder e o controle podem ser usados na sociedade.",
            learning: "\" Habilidades: H10, H22, H26, H27. \"",
            docLink: "https://www.canva.com/design/DAHJuvem2lo/WxZgx-ZsR3cp8c770fbuQQ/view",
            embedUrl: "https://www.canva.com/design/DAHJuvem2lo/WxZgx-ZsR3cp8c770fbuQQ/view?embed"
          },
          {
            title: "SÍNTESE DA 2ª GUERRA MUNDIAL",
            whatWasDone: "A atividade teve como objetivo pesquisar sobre o Fascismo Italiano e entender seu contexto, suas principais características e seus impactos na História. Também foi necessário analisar uma fonte histórica da época para compreender como o fascismo era visto e representado naquele período. Achei interessante porque pude conhecer melhor esse acontecimento e entender suas consequências para a sociedade.",
            learning: "\" Não estava indicado \"",
            docLink: "https://www.canva.com/design/DAHOU1vcdOA/qSN4YEEA1e_q-mhBIFkxkQ/view",
            embedUrl: "https://www.canva.com/design/DAHOU1vcdOA/qSN4YEEA1e_q-mhBIFkxkQ/view?embed"
          },
          {
            title: "Crise de 1929",
            whatWasDone: "A atividade teve como objetivo entender a Crise de 1929 e seus impactos nos Estados Unidos, Brasil e Europa, além de conhecer outras crises econômicas. Foram pesquisadas as causas, consequências e medidas tomadas pelos governos para enfrentar essas crises. Também foi feito um quadro comparativo entre três crises. Achei interessante porque pude entender melhor como as crises econômicas acontecem e como podem afetar a sociedade.",
            learning: "\" C4 - H21, H22, H23 \"",
            docLink: "https://docs.google.com/spreadsheets/d/1wqLPYKbon0ExbxJ_DSNC-qcjy2lsrJ865xTbmio26lY/edit?usp=sharing",
            embedUrl: "https://docs.google.com/spreadsheets/d/1wqLPYKbon0ExbxJ_DSNC-qcjy2lsrJ865xTbmio26lY/preview"
          }
        ]
      }
    },
    { 
      id: "linguagens", 
      area: "LINGUAGENS", 
      title: "Linguagens", 
      desc: "Exploração da comunicação através da Língua Portuguesa, Inglesa, Artes e Educação Física.",
      fullContent: "Desenvolvimento de competências comunicativas e expressivas.",
      activities: [
        {
          title: "Trabalho: Explicar GH: entre o corpo e a sociedade",
          whatWasDone: "Análise da experiência da personagem G.H., discutindo interpretações mais científicas em comparação com interpretações sociais.",
          learning: "\" Habilidades Avaliadas: H4 e H22 \"",
          docLink: "https://www.canva.com/design/DAHFntsq5aQ/FPh5wUPXeWU8LwBjqxRw2w/view",
          embedUrl: "https://www.canva.com/design/DAHFntsq5aQ/FPh5wUPXeWU8LwBjqxRw2w/view?embed"
        },
        {
          title: "Jogo literário – As origens ao Simbolismo",
          whatWasDone: "Atividade interativa para revisar os movimentos literários de um jeito mais dinâmico.",
          learning: "\" Habilidades: H4 / H14 \"",
          docLink: "https://www.canva.com/design/DAHCO4c9Zbw/0iXQbzjtIetcwFiNrq0E7g/view",
          embedUrl: "https://www.canva.com/design/DAHCO4c9Zbw/0iXQbzjtIetcwFiNrq0E7g/view?embed"
        }
      ],
      activitiesByTrimestre: {
        1: [
          {
            title: "Trabalho: Explicar GH: entre o corpo e a sociedade",
            whatWasDone: "Análise da experiência da personagem G.H., discutindo interpretações mais científicas em comparação com interpretações sociais.",
            learning: "\" Habilidades Avaliadas: H4 e H22 \"",
            docLink: "https://www.canva.com/design/DAHFntsq5aQ/FPh5wUPXeWU8LwBjqxRw2w/view",
            embedUrl: "https://www.canva.com/design/DAHFntsq5aQ/FPh5wUPXeWU8LwBjqxRw2w/view?embed"
          },
          {
            title: "Jogo literário – As origens ao Simbolismo",
            whatWasDone: "Atividade interativa para revisar os movimentos literários de um jeito mais dinâmico.",
            learning: "\" Habilidades: H4 / H14 \"",
            docLink: "https://www.canva.com/design/DAHCO4c9Zbw/0iXQbzjtIetcwFiNrq0E7g/view",
            embedUrl: "https://www.canva.com/design/DAHCO4c9Zbw/0iXQbzjtIetcwFiNrq0E7g/view?embed"
          }
        ],
        2: [
          {
            title: "Aplicação do RED1000 (Redação)",
            whatWasDone: "A atividade teve como objetivo produzir uma redação no modelo ENEM sobre os perigos do autodiagnóstico de transtornos mentais nas redes sociais no Brasil. Primeiro, foi feito o texto à mão e, depois, ele foi digitado na plataforma Red1000. Achei importante porque o tema ajuda a refletir sobre os riscos de buscar informações sobre saúde mental na internet e tirar conclusões sem a ajuda de um profissional.",
            learning: "\" Não estava indicado \"",
            imageUrl: red1000GradeImg
          },
          {
            title: "Videomanifesto",
            whatWasDone: "A atividade teve como objetivo criar um videomanifesto inspirado nos manifestos modernistas, abordando um tema atual de forma crítica e criativa. Foi necessário escolher o tema, criar um roteiro e produzir um vídeo com imagens, narração, música, edição e frases de impacto. Achei interessante porque pude usar a criatividade para expressar minhas ideias de uma forma diferente.",
            learning: "\" Habilidades: H3 \"",
            docLink: "https://drive.google.com/file/d/1wipWwzCDVOqWIW8Livtu4FQZh_DJ5UWI/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1wipWwzCDVOqWIW8Livtu4FQZh_DJ5UWI/preview",
            links: [
              { label: "ASSISTIR VÍDEO NO DRIVE", url: "https://drive.google.com/file/d/1wipWwzCDVOqWIW8Livtu4FQZh_DJ5UWI/view?usp=sharing" }
            ]
          },
          {
            title: "Que tipo de arte você consome?",
            whatWasDone: "A atividade teve como objetivo fazer uma apresentação em inglês sobre meu artista, filme e música favoritos. Foi uma forma de praticar a língua inglesa enquanto falava sobre assuntos que gosto e fazem parte do meu dia a dia. Achei interessante porque pude melhorar meu vocabulário, minha escrita e também expressar minhas opiniões em inglês.",
            learning: "\" Habilidade: H25 \"",
            docLink: "https://docs.google.com/document/d/1a-zmErNSD4c3Yd9beUBChREi18cMUBkazNDHwU_It-4/edit?usp=sharing",
            embedUrl: "https://docs.google.com/document/d/1a-zmErNSD4c3Yd9beUBChREi18cMUBkazNDHwU_It-4/preview"
          }
        ]
      }
    },
    { 
      id: "matematica", 
      area: "MATEMÁTICA", 
      title: "Matemática", 
      desc: "Desenvolvimento do cálculo lógico-matemático através de álgebra, geometria e estatística.",
      fullContent: "Aplicação do raciocínio lógico para resolução de problemas.",
      activities: [
        {
          title: "Atividade 1: Filme Quebrando a Banca",
          whatWasDone: "Análise de como a probabilidade e a contagem de cartas são usadas no filme.",
          learning: "\" C5: Aplicar o pensamento probabilístico. | H30: identificar dados. | H31: Reconhecer especificidades (aleatórios e probabilidades). \"",
          docLink: "https://docs.google.com/document/d/1AEoBMkmHtX5yhiajaunGKYKGZu5K__eBiYMw2IYBkI8/edit?usp=sharing",
          embedUrl: "https://docs.google.com/document/d/1AEoBMkmHtX5yhiajaunGKYKGZu5K__eBiYMw2IYBkI8/preview"
        },
        {
          title: "AV1 – Jogo Quebrando a Banca",
          whatWasDone: "Aplicação prática de probabilidade e tomada de decisões por meio de um jogo.",
          learning: "\" Competências e Habilidades: C5, H30, H31 \"",
          docLink: "https://docs.google.com/document/d/1bdiTsvQ371NM4nJ9c6X2LIq3ytin9giUb8ArryWHH0k/edit?usp=sharing",
          embedUrl: "https://docs.google.com/document/d/1bdiTsvQ371NM4nJ9c6X2LIq3ytin9giUb8ArryWHH0k/preview"
        }
      ],
      activitiesByTrimestre: {
        1: [
          {
            title: "Atividade 1: Filme Quebrando a Banca",
            whatWasDone: "Análise de como a probabilidade e a contagem de cartas são usadas no filme.",
            learning: "\" C5: Aplicar o pensamento probabilístico. | H30: identificar dados. | H31: Reconhecer especificidades (aleatórios e probabilidades). \"",
            docLink: "https://docs.google.com/document/d/1AEoBMkmHtX5yhiajaunGKYKGZu5K__eBiYMw2IYBkI8/edit?usp=sharing",
            embedUrl: "https://docs.google.com/document/d/1AEoBMkmHtX5yhiajaunGKYKGZu5K__eBiYMw2IYBkI8/preview"
          },
          {
            title: "AV1 – Jogo Quebrando a Banca",
            whatWasDone: "Aplicação prática de probabilidade e tomada de decisões por meio de um jogo.",
            learning: "\" Competências e Habilidades: C5, H30, H31 \"",
            docLink: "https://docs.google.com/document/d/1bdiTsvQ371NM4nJ9c6X2LIq3ytin9giUb8ArryWHH0k/edit?usp=sharing",
            embedUrl: "https://docs.google.com/document/d/1bdiTsvQ371NM4nJ9c6X2LIq3ytin9giUb8ArryWHH0k/preview"
          }
        ],
        2: [
          {
            title: "Apresentação Estatística",
            whatWasDone: "A atividade mostrou como a Estatística pode ser usada para analisar os hábitos dos estudantes. Foram coletados e organizados dados em tabelas e gráficos, além de cálculos como média, moda e mediana. Achei interessante porque aprendi a interpretar melhor os resultados e perceber como a Estatística está presente no nosso dia a dia.",
            learning: "\" Habilidades: C4 – H27, H28 e H29 \"",
            docLink: "https://www.canva.com/design/DAHNqvYC59A/0i6evX9GN_ZrP3SEKim3bw/view",
            embedUrl: "https://www.canva.com/design/DAHNqvYC59A/0i6evX9GN_ZrP3SEKim3bw/view?embed"
          }
        ]
      }
    },
    { 
      id: "natureza", 
      area: "NATUREZA", 
      title: "Ciências da Natureza", 
      desc: "Estudo das leis físicas, químicas e biológicas que regem o universo e a vida.",
      fullContent: "Investigação dos processos biológicos e propriedades físico-químicas.",
      activities: [
        {
          title: "Meme sobre Evolucionismo",
          whatWasDone: "Produção de um meme usando conceitos de seleção natural e adaptação.",
          learning: "\" C3 - Determinar impactos humanos. | H15 - Comparar intervenção ambiental. | H18 - identificar risco ambiental. \"",
          docLink: "https://docs.google.com/document/d/1ICYg3IjhJuKJiPqgwSqgPcA70DfJm5AD8CoxlO7ukKc/edit?usp=sharing",
          embedUrl: "https://docs.google.com/document/d/1ICYg3IjhJuKJiPqgwSqgPcA70DfJm5AD8CoxlO7ukKc/preview"
        },
        {
          title: "Apresentação – Combustíveis Fósseis",
          whatWasDone: "Estudo dos impactos e das razões econômicas do uso constante de combustíveis fósseis.",
          learning: "\" C1, H1, C2, H9, H11 \"",
          docLink: "https://www.canva.com/design/DAHH_HkoDGU/sr4motR45mmNERImtPOP2A/view",
          embedUrl: "https://www.canva.com/design/DAHH_HkoDGU/sr4motR45mmNERImtPOP2A/view?embed"
        },
        {
          title: "Relatório: Eletricidade por atrito",
          whatWasDone: "Atividade prática envolvendo a transferência de elétrons.",
          learning: "\" C1, H1, C2, H7, H9, H11, H12 \"",
          docLink: "https://docs.google.com/document/d/1hvU4PLJHbdDxMyleR_XdRKtMGapP4Qb-57PH-PyXZHk/edit?usp=sharing",
          embedUrl: "https://docs.google.com/document/d/1hvU4PLJHbdDxMyleR_XdRKtMGapP4Qb-57PH-PyXZHk/preview"
        }
      ],
      activitiesByTrimestre: {
        1: [
          {
            title: "Meme sobre Evolucionismo",
            whatWasDone: "Produção de um meme usando conceitos de seleção natural e adaptação.",
            learning: "\" C3 - Determinar impactos humanos. | H15 - Comparar intervenção ambiental. | H18 - identificar risco ambiental. \"",
            docLink: "https://docs.google.com/document/d/1ICYg3IjhJuKJiPqgwSqgPcA70DfJm5AD8CoxlO7ukKc/edit?usp=sharing",
            embedUrl: "https://docs.google.com/document/d/1ICYg3IjhJuKJiPqgwSqgPcA70DfJm5AD8CoxlO7ukKc/preview"
          },
          {
            title: "Apresentação – Combustíveis Fósseis",
            whatWasDone: "Estudo dos impactos e das razões econômicas do uso constante de combustíveis fósseis.",
            learning: "\" C1, H1, C2, H9, H11 \"",
            docLink: "https://www.canva.com/design/DAHH_HkoDGU/sr4motR45mmNERImtPOP2A/view",
            embedUrl: "https://www.canva.com/design/DAHH_HkoDGU/sr4motR45mmNERImtPOP2A/view?embed"
          },
          {
            title: "Relatório: Eletricidade por atrito",
            whatWasDone: "Atividade prática envolvendo a transferência de elétrons.",
            learning: "\" C1, H1, C2, H7, H9, H11, H12 \"",
            docLink: "https://docs.google.com/document/d/1hvU4PLJHbdDxMyleR_XdRKtMGapP4Qb-57PH-PyXZHk/edit?usp=sharing",
            embedUrl: "https://docs.google.com/document/d/1hvU4PLJHbdDxMyleR_XdRKtMGapP4Qb-57PH-PyXZHk/preview"
          }
        ],
        2: [
          {
            title: "Mural interativo",
            whatWasDone: "Nesta atividade em grupo, usamos nossos conhecimentos científicos para montar uma exposição interativa sobre como o meio ambiente pode afetar a saúde das pessoas. Fizemos pesquisas, analisamos informações e produzimos materiais visuais para criar um mural científico. O objetivo foi informar e conscientizar a comunidade escolar sobre os problemas ambientais e a importância de cuidar da saúde, tanto individual quanto coletiva. O registro fotográfico não foi realizado no dia da atividade porque não tivemos autorização do professor.",
            learning: "\" C2, C3, H18, C4, H11, H15, H23 \""
          },
          {
            title: "Seminário sobre Estequiometria na Indústria.",
            whatWasDone: "Durante o seminário e a prática em laboratório, realizamos experimentos variando alguns parâmetros para observar como eles influenciavam o fenômeno estudado e sua aplicação na indústria. Também utilizamos instrumentos, como o multímetro, para fazer medições e analisar os resultados. Todo o processo foi registrado por meio de relatórios técnicos e vídeos, mostrando na prática os conceitos aprendidos nas Ciências da Natureza.",
            learning: "\" C2, H6, H7, H9 \"",
            docLink: "https://docs.google.com/document/d/1x3mywswhE9oKOEebzDW4ZGyLI3va76gfgyk6tQQup-Y/edit?usp=sharing",
            embedUrl: "https://docs.google.com/document/d/1x3mywswhE9oKOEebzDW4ZGyLI3va76gfgyk6tQQup-Y/preview",
            links: [
              { label: "ABRIR DOCUMENTO", url: "https://docs.google.com/document/d/1x3mywswhE9oKOEebzDW4ZGyLI3va76gfgyk6tQQup-Y/edit?usp=sharing" },
              { label: "ASSISTIR VÍDEO", url: "https://drive.google.com/file/d/1zURyZQkU50IgIAwLtCdXNCOOcRXZSmgn/view?usp=sharing" }
            ]
          },
          {
            title: "CARTILHA ELETRICIDADE E O CORPO HUMANO",
            whatWasDone: "Nessa atividade, pesquisamos sobre a relação entre a corrente elétrica e o corpo humano, aprendendo sobre os riscos de choques elétricos e também sobre o uso da eletricidade na área da saúde, como em exames e tratamentos. Além disso, estudamos formas de evitar acidentes e os principais cuidados de segurança. Em grupo, produzimos uma cartilha ilustrada com informações simples e fáceis de entender, voltada para o público em geral.",
            learning: "\" C1, H3, H4, C2, H12, C4, H23. \"",
            docLink: "https://www.canva.com/design/DAHS8zkpYd8/vj_eBU5keHmncrTTcy5jSQ/view?utm_content=DAHS8zkpYd8&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
            embedUrl: "https://www.canva.com/design/DAHS8zkpYd8/vj_eBU5keHmncrTTcy5jSQ/view?embed"
          }
        ]
      }
    },
    { 
      id: "modelagem", 
      area: "MODELAGEM", 
      title: "Modelagem de Sistemas", 
      desc: "Técnicas de abstração e representação visual de fluxos de processos e arquitetura de software.",
      activities: [
        {
          title: "Grande Prêmio SENAI de Inovação 2026",
          whatWasDone: "O Grande Prêmio SENAI de Inovação 2026 é uma competição na qual os estudantes organizam equipes (escuderias) para desenvolver soluções criativas para desafios reais da indústria. O evento ocorre de forma online e inclui fases como inscrição, formação dos grupos, criação das ideias e apresentação dos projetos.",
          learning: "\"Trabalho em equipe, inovação, criatividade e uso de tecnologia na indústria.\"",
          docLink: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/edit?usp=sharing",
          embedUrl: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/preview"
        }
      ]
    },
    { 
      id: "banco-dados", 
      area: "BANCO DADOS", 
      title: "Banco de Dados", 
      desc: "Organização, armazenamento e manipulação de grandes volumes de informação de forma estruturada.",
      activities: [
        {
          title: "Grande Prêmio SENAI de Inovação 2026",
          whatWasDone: "O Grande Prêmio SENAI de Inovação 2026 é uma competição na qual os estudantes organizam equipes (escuderias) para desenvolver soluções criativas para desafios reais da indústria. O evento ocorre de forma online e inclui fases como inscrição, formação dos grupos, criação das ideias e apresentação dos projetos.",
          learning: "\"Trabalho em equipe, inovação, criatividade e uso de tecnologia na indústria.\"",
          docLink: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/edit?usp=sharing",
          embedUrl: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/preview"
        }
      ]
    },
    { 
      id: "iot", 
      area: "IOT", 
      title: "Internet das Coisas", 
      desc: "Conectividade de dispositivos físicos e automação através de sensores e microcontroladores.",
      activities: [
        {
          title: "Grande Prêmio SENAI de Inovação 2026",
          whatWasDone: "O Grande Prêmio SENAI de Inovação 2026 é uma competição na qual os estudantes organizam equipes (escuderias) para desenvolver soluções criativas para desafios reais da indústria. O evento ocorre de forma online e inclui fases como inscrição, formação dos grupos, criação das ideias e apresentação dos projetos.",
          learning: "\"Trabalho em equipe, inovação, criatividade e uso de tecnologia na indústria.\"",
          docLink: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/edit?usp=sharing",
          embedUrl: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/preview"
        }
      ],
      activitiesByTrimestre: {
        1: [
          {
            title: "Grande Prêmio SENAI de Inovação 2026",
            whatWasDone: "O Grande Prêmio SENAI de Inovação 2026 é uma competição na qual os estudantes organizam equipes (escuderias) para desenvolver soluções criativas para desafios reais da indústria. O evento ocorre de forma online e inclui fases como inscrição, formação dos grupos, criação das ideias e apresentação dos projetos.",
            learning: "\"Trabalho em equipe, inovação, criatividade e uso de tecnologia na indústria.\"",
            docLink: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/edit?usp=sharing",
            embedUrl: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/preview"
          }
        ],
        2: [
          {
            title: "Controle de LED com Botão no Arduino",
            whatWasDone: "Nesta atividade, fizemos um circuito usando Arduino, um botão e um LED. Quando o botão é pressionado, o LED acende. Com esse projeto, conseguimos colocar em prática conceitos de programação e eletrônica, aprendendo como o Arduino recebe informações pelo botão e usa esses dados para controlar o LED.",
            learning: "\" Habilidade: Programação de microcontroladores | Habilidade: Entradas e saídas digitais | Habilidade: Circuitos Eletrônicos \"",
            imageUrl: "https://lh3.googleusercontent.com/d/1hu-IUAc70_3bm21UtCwn-47ymEMkNOML",
            docLink: "https://drive.google.com/file/d/1hu-IUAc70_3bm21UtCwn-47ymEMkNOML/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1hu-IUAc70_3bm21UtCwn-47ymEMkNOML/preview",
            links: [
              { label: "VER FOTO NO DRIVE", url: "https://drive.google.com/file/d/1hu-IUAc70_3bm21UtCwn-47ymEMkNOML/view?usp=sharing" }
            ]
          }
        ]
      }
    },
    { 
      id: "desenvolvimento", 
      area: "DESENVOLVIMENTO", 
      title: "Desenvolvimento de Sistemas", 
      desc: "Criação de aplicações web e mobile utilizando tecnologias modernas como React, Node.js e integração...",
      activities: [
        {
          title: "Grande Prêmio SENAI de Inovação 2026",
          whatWasDone: "O Grande Prêmio SENAI de Inovação 2026 é uma competição na qual os estudantes organizam equipes (escuderias) para desenvolver soluções criativas para desafios reais da indústria. O evento ocorre de forma online e inclui fases como inscrição, formação dos grupos, criação das ideias e apresentação dos projetos.",
          learning: "\"Trabalho em equipe, inovação, criatividade e uso de tecnologia na indústria.\"",
          docLink: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/edit?usp=sharing",
          embedUrl: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/preview"
        }
      ],
      activitiesByTrimestre: {
        1: [
          {
            title: "Grande Prêmio SENAI de Inovação 2026",
            whatWasDone: "O Grande Prêmio SENAI de Inovação 2026 é uma competição na qual os estudantes organizam equipes (escuderias) para desenvolver soluções criativas para desafios reais da indústria. O evento ocorre de forma online e inclui fases como inscrição, formação dos grupos, criação das ideias e apresentação dos projetos.",
            learning: "\"Trabalho em equipe, inovação, criatividade e uso de tecnologia na indústria.\"",
            docLink: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/edit?usp=sharing",
            embedUrl: "https://docs.google.com/document/d/1E8mePkIMH_cdW266XRYMSOWGvr6yCQ_mpjWyMWpsaKc/preview"
          }
        ],
        2: [
          {
            title: "Desenvolvimento de um Sistema de Gateway de Pagamento – BP Promotora de...",
            whatWasDone: "A atividade teve como objetivo desenvolver um sistema de gateway de pagamento usando uma API. O projeto foi criado para receber e processar pagamentos de forma organizada e segura, utilizando programação e tecnologias de backend. Achei interessante porque pude entender melhor como funciona um sistema de pagamentos e como diferentes serviços podem se comunicar.",
            learning: "\"(BRANCH: LOGS-PAY) | H1 – Reconhecer requisitos de qualidade, integridade, usabilidade e segurança da informação. | H4 – Selecionar linguagem de programação de acordo com os requisitos. | H6 – Aplicar linguagem de programação por meio de APIs, bibliotecas e frameworks na construção de rotinas de software. | Proposta: Desenvolvimento de um sistema de gateway de pagamento para a BP – Promotora de Crédito, com o objetivo de criar uma solução capaz de intermediar e gerenciar operações de pagamento de forma organizada, segura e eficiente.\"",
            docLink: "https://github.com/fullzer4/RinhaSenai2026FullStack",
            links: [
              { label: "REPOSITÓRIO NO GITHUB", url: "https://github.com/fullzer4/RinhaSenai2026FullStack" }
            ]
          }
        ]
      }
    },
    { 
      id: "programacao-aplicativos", 
      area: "TÉCNICO", 
      title: "Programação de Aplicativos", 
      desc: "Desenvolvimento de aplicativos móveis e soluções interativas integrando lógica de software e design de interfaces.",
      activities: [],
      activitiesByTrimestre: {
        1: [],
        2: [
          {
            title: "Desenvolvimento de um Sistema de Gateway de Pagamento – BP Promotora de...",
            whatWasDone: "A atividade teve como objetivo desenvolver um sistema de gateway de pagamento usando uma API. O projeto foi criado para receber e processar pagamentos de forma organizada e segura, utilizando programação e tecnologias de backend. Achei interessante porque pude entender melhor como funciona um sistema de pagamentos e como diferentes serviços podem se comunicar.",
            learning: "\"(BRANCH: LOGS-PAY) | H1 – Reconhecer requisitos de qualidade, integridade, usabilidade e segurança da informação. | H4 – Selecionar linguagem de programação de acordo com os requisitos. | H6 – Aplicar linguagem de programação por meio de APIs, bibliotecas e frameworks na construção de rotinas de software. | Proposta: Desenvolvimento de um sistema de gateway de pagamento para a BP – Promotora de Crédito, com o objetivo de criar uma solução capaz de intermediar e gerenciar operações de pagamento de forma organizada, segura e eficiente.\"",
            docLink: "https://github.com/fullzer4/RinhaSenai2026FullStack",
            links: [
              { label: "REPOSITÓRIO NO GITHUB", url: "https://github.com/fullzer4/RinhaSenai2026FullStack" }
            ]
          }
        ]
      }
    },
  ];

  const handleMateriaClick = (m: Materia) => {
    setSelectedMateria(m);
    setActiveView("subjectDetail");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBackToMaterias = () => {
    setActiveView("materias");
    setSelectedMateria(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-brand-primary/30 overflow-x-hidden bg-brand-bg transition-colors duration-700">
      {/* Background Vertical Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 md:px-12 lg:px-24">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full bg-brand-line opacity-[0.15] last:hidden md:last:block"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-8 md:py-12 border-b border-brand-line/10">
          <div className="font-serif text-xl tracking-tight cursor-pointer" onClick={() => { setActiveView("home"); setSelectedMateria(null); }}>
            M.E <span className="text-xs font-sans tracking-extrawide ml-2 opacity-60 uppercase">· Portfólio</span>
          </div>
          <div className="hidden md:flex gap-12 text-[22px] tracking-extrawide font-bold uppercase items-center">
            <button 
              onClick={() => { setActiveView("home"); setSelectedMateria(null); }}
              className={`hover:text-brand-primary transition-all pb-1 border-b-2 cursor-pointer ${activeView === "home" ? "border-brand-text scale-110" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              Início
            </button>
            <a 
              href="#sobre" 
              onClick={() => { setActiveView("home"); setSelectedMateria(null); }} 
              className="hover:text-brand-primary transition-colors pb-1 border-b-2 border-transparent opacity-60 hover:opacity-100 cursor-pointer"
            >
              Sobre
            </a>
            <button 
              onClick={() => { setActiveView("materias"); setSelectedMateria(null); }}
              className={`hover:text-brand-primary transition-all pb-1 border-b-2 cursor-pointer ${(activeView === "materias" || activeView === "subjectDetail") ? "border-brand-text scale-110" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              Matérias
            </button>
            <a 
              href="#extras" 
              onClick={() => { setActiveView("home"); setSelectedMateria(null); }} 
              className="hover:text-brand-primary transition-colors pb-1 border-b-2 border-transparent opacity-60 hover:opacity-100 cursor-pointer"
            >
              Extras
            </a>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          {activeView === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <motion.section 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="min-h-[85vh] flex flex-col items-center justify-center py-24 text-center relative"
              >
                <motion.div variants={itemVariants} className="absolute top-0 left-0">
                  <span className="text-[10px] tracking-editorial uppercase font-bold border border-brand-primary px-4 py-2 bg-white text-brand-secondary shadow-sm">
                    PORTFÓLIO 3A 2026
                  </span>
                </motion.div>

                <div className="relative">
                  <motion.h1 variants={itemVariants} className="font-serif leading-[0.8] tracking-tighter">
                    <span className="text-[80px] md:text-[140px] lg:text-[180px] block">
                      Maria Eduarda
                    </span>
                    <span className="text-[28px] md:text-[44px] lg:text-[54px] italic font-normal block mt-2 opacity-90">
                      Ciquelero De Freitas
                    </span>
                  </motion.h1>
                  
                  <motion.div variants={itemVariants} className="mt-12 w-px h-16 bg-brand-line/40 mx-auto"></motion.div>
                  
                  <motion.div variants={itemVariants} className="mt-8 text-[10px] tracking-editorial font-medium uppercase opacity-50">
                    Desça para explorar
                  </motion.div>
                </div>
              </motion.section>

              {/* Section 01: Sobre Mim */}
              <motion.section 
                id="sobre"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="py-24 md:py-32 border-t border-brand-line/30"
              >
                <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center justify-center">
                  <div className="w-full lg:w-2/5 flex justify-center">
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      className="w-64 md:w-80 aspect-[3/4] border-2 border-brand-line shadow-2xl bg-white overflow-hidden z-20 transition-all hover:shadow-2xl cursor-pointer relative group"
                    >
                      <img 
                        src={profileMariaImg} 
                        alt="Maria Eduarda Ciquelero de Freitas" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="w-full lg:w-3/5 space-y-8 text-left lg:text-left px-4">
                    <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-7xl text-brand-secondary opacity-90">
                      Um pouco sobre mim
                    </motion.h2>
                    
                    <div className="space-y-8 text-2xl md:text-3xl leading-relaxed text-brand-text/90 font-light max-w-screen-xl">
                      <motion.p variants={itemVariants}>
                        Eu sou a Maria Eduarda, tenho 17 anos e faço aniversário no dia 24 de março de 2009. Estudo no SESI/SENAI e estou no terceirão. Atualmente, estou mais focada no meu trabalho com estética, nas minhas aulas de ballet e na academia. Meus hobbies favoritos são passar tempo com meu namorado Kauã, com minha família e passear com minha cachorrinha Zowy.
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Section 03: Adicionais */}
              <motion.section 
                id="extras"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="py-24 md:py-32 border-t border-brand-line/30"
              >
                <div className="flex flex-col items-center mb-24">
                  <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-px bg-brand-line"></div>
                    <span className="text-[10px] tracking-editorial uppercase font-bold">LINKS · 03</span>
                    <div className="w-12 h-px bg-brand-line"></div>
                  </motion.div>
                  <motion.h2 variants={itemVariants} className="font-serif italic text-6xl md:text-8xl text-center">
                    Adicionais
                  </motion.h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center px-4">
                  {[
                    { text: "CURRÍCULO VITAE", url: "https://www.canva.com/design/DAGlAxh5r_w/dR-bjAyXM-Al3TnoUFRA3g/edit?utm_content=DAGlAxh5r_w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
                    { text: "PORTFÓLIO 2024", url: "https://www.canva.com/design/DAF88xen1N0/lq5KBRc2nHTcR5G6fTt7bQ/edit?utm_content=DAF88xen1N0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
                    { text: "PORTFÓLIO 2025", url: "https://sites.google.com/estudante.sesisenai.org.br/2-a-maria-eduarda-/in%C3%ADcio" },
                    { text: "PPE", url: "#" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      className="border p-[2px] border-brand-secondary transition-transform hover:-translate-y-1 duration-300 w-full md:w-auto"
                    >
                      <a 
                        href={item.url}
                        target={item.url !== "#" ? "_blank" : undefined}
                        rel={item.url !== "#" ? "noopener noreferrer" : undefined}
                        className="group relative flex items-center justify-between md:justify-center px-8 py-3 border border-brand-secondary bg-white hover:bg-brand-primary/5 transition-colors duration-500"
                      >
                        <span className="text-[10px] tracking-editorial font-bold relative z-10">{item.text}</span>
                        <ArrowUpRight className="ml-4 w-3 h-3 text-brand-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          )}

          {activeView === "materias" && (
            <motion.div
              key="materias"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="py-12 md:py-24"
            >
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="text-left w-full md:w-auto">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-[80px] md:text-[120px] leading-tight tracking-tighter"
                  >
                    Matérias
                  </motion.h1>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="h-1 bg-brand-text w-full origin-left mt-4"
                  />
                </div>
                <div className="text-right md:max-w-xs">
                  <p className="text-[10px] tracking-[0.2em] font-bold uppercase mb-2 opacity-60">REGISTRO ACADÊMICO 2026</p>
                  <p className="text-sm opacity-70 leading-relaxed font-light">
                    Selecione uma área de conhecimento para explorar as atividades e projetos desenvolvidos em cada trimestre.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 border-t border-l border-brand-line/20">
                {materias.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => handleMateriaClick(m)}
                    transition={{ delay: idx * 0.05 }}
                    className="group relative border-r border-b border-brand-line/20 p-8 min-h-[320px] flex flex-col justify-between hover:bg-brand-dark-pink transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    <div className="relative z-10 transition-colors duration-500 group-hover:text-brand-bg bg-white p-2 inline-block self-start border border-brand-line/30 mb-8">
                       <span className="text-[9px] tracking-editorial font-bold uppercase">ÁREA · {m.area}</span>
                    </div>

                    <div className="relative z-10 transition-colors duration-500 group-hover:text-brand-bg text-left">
                      <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:italic transition-all group-hover:translate-x-2">
                        {m.title}
                      </h3>
                      <p className="text-sm opacity-70 group-hover:opacity-100 leading-relaxed font-light transition-opacity line-clamp-3 lg:line-clamp-none">
                        {m.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-8 flex items-center gap-2 text-[10px] tracking-editorial font-bold uppercase opacity-60 group-hover:opacity-100 group-hover:text-brand-bg transition-all group-hover:translate-x-2">
                      EXPLORAR <ArrowRight className="w-3 h-3" />
                    </div>

                    <div className="absolute inset-0 bg-brand-dark-pink scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 -z-0"></div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-24 text-center">
                <button 
                  onClick={() => setActiveView("home")}
                  className="px-12 py-4 border border-brand-line hover:bg-brand-primary/10 transition-colors tracking-editorial uppercase text-[14px] font-bold cursor-pointer"
                >
                  Voltar ao Início
                </button>
              </div>
            </motion.div>
          )}

          {activeView === "subjectDetail" && selectedMateria && (
            <motion.div
              key="subject-detail"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="py-6 md:py-12"
            >
              {/* Header Navigation from Image */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-brand-line/40 pb-8 gap-8">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={goBackToMaterias}
                      className="w-12 h-12 border border-brand-text flex flex-col items-center justify-center bg-white hover:bg-brand-primary/10 transition-colors cursor-pointer group"
                    >
                      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <h1 className="font-serif text-6xl md:text-8xl leading-none italic ml-4 font-light text-brand-text">
                    {selectedMateria.title}
                  </h1>
                </div>

                <div className="flex flex-col items-end gap-6 w-full md:w-auto">
                  <div className="flex border border-brand-line p-1 bg-white/40">
                    {[1, 2, 3].map((t) => (
                      <button
                        key={t}
                        onClick={() => setActiveTrimestre(t)}
                        className={`px-4 py-2 text-[9px] tracking-extrawide font-bold uppercase transition-all cursor-pointer ${activeTrimestre === t ? 'bg-brand-primary text-white shadow-sm' : 'text-brand-text opacity-40 hover:opacity-80'}`}
                      >
                        {t}º TRIMESTRE
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-10 text-[11px] tracking-[0.2em] font-bold uppercase text-brand-text">
                    <span onClick={() => setActiveView("home")} className="opacity-40 cursor-pointer hover:opacity-100 transition-opacity">INÍCIO</span>
                    <span className="border-b-2 border-brand-text">MATÉRIAS</span>
                    <span onClick={() => setActiveView("home")} className="opacity-40 cursor-pointer hover:opacity-100 transition-opacity">EXTRAS</span>
                  </div>
                </div>
              </div>

              {/* Activity Cards Grid */}
              {(() => {
                const currentActivities = selectedMateria.activitiesByTrimestre?.[activeTrimestre] || 
                  (activeTrimestre === 1 ? (selectedMateria.activities || []) : []);

                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {currentActivities.map((activity, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border-b-4 border-r-4 border-brand-line/40 flex flex-col h-full group transition-all duration-300"
                      >
                        {/* Activity Image or Embed */}
                        {!activity.hideEmbed && (
                          <div className="aspect-video bg-white border-b border-brand-line/20 relative overflow-hidden m-4">
                            {activity.imageUrl ? (
                              <img 
                                src={activity.imageUrl} 
                                className="w-full h-full object-contain" 
                                referrerPolicy="no-referrer"
                                alt={activity.title}
                              />
                            ) : activity.embedUrl ? (
                              <iframe 
                                src={activity.embedUrl} 
                                className="w-full h-full border-none"
                                allowFullScreen
                                loading="lazy"
                              />
                            ) : activity.docLink ? (
                              <a 
                                href={activity.docLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full border border-brand-line/30 flex flex-col items-center justify-center bg-brand-bg/30 p-6 text-center group/imglink hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
                              >
                                <div className="p-3.5 bg-white border border-brand-line/30 mb-2.5 rounded shadow-sm text-brand-text group-hover/imglink:border-white transition-all">
                                  {activity.docLink.includes("github.com") ? (
                                    <Github className="w-7 h-7" />
                                  ) : (
                                    <ExternalLink className="w-7 h-7" />
                                  )}
                                </div>
                                <span className="text-[11px] font-extrabold tracking-widest uppercase mb-1 flex items-center gap-1.5">
                                  {activity.docLink.includes("github.com") ? "Acessar Repositório GitHub" : "Abrir Link da Atividade"}
                                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/imglink:translate-x-1 group-hover/imglink:-translate-y-1" />
                                </span>
                                <span className="text-[9px] opacity-60 font-mono truncate max-w-[240px]">
                                  {activity.docLink.replace(/^https?:\/\//, '')}
                                </span>
                              </a>
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center p-4">
                                 <div className="w-full h-full border border-brand-line/40 flex flex-col items-center justify-center bg-brand-bg/10">
                                    <span className="text-[10px] italic font-serif opacity-30">[ Imagem da Atividade ]</span>
                                 </div>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="px-8 pb-10 pt-8 flex flex-col flex-grow text-left">
                          <h3 className="font-serif text-3xl md:text-4xl mb-10 leading-tight">
                            {activity.title}
                          </h3>

                          <div className="space-y-10 flex-grow">
                            <div>
                              <p className="text-[9px] tracking-[0.2em] font-bold uppercase text-brand-text/50 mb-4">O QUE FOI FEITO</p>
                              <p className="text-base font-light leading-relaxed opacity-90">
                                {activity.whatWasDone}
                              </p>
                            </div>

                            <div className="pt-6 border-t border-brand-line/10">
                              <p className="text-[9px] tracking-[0.2em] font-bold uppercase text-brand-text/50 mb-4">APRENDIZADO</p>
                              <p className="text-base italic font-serif leading-relaxed opacity-90">
                                {activity.learning}
                              </p>
                            </div>
                          </div>

                          {activity.links ? (
                            <div className="mt-12 flex flex-wrap gap-4 pb-2">
                              {activity.links.map((link, lIdx) => (
                                <a 
                                  key={lIdx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group/link flex items-center gap-2 text-[10px] tracking-extrawide font-extrabold uppercase text-brand-text border-b-2 border-brand-text pb-1 hover:gap-4 transition-all whitespace-nowrap"
                                >
                                  {link.label} <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                </a>
                              ))}
                            </div>
                          ) : (
                            activity.docLink && (
                              <a 
                                href={activity.docLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-12 flex items-center gap-3 text-[10px] tracking-[0.2em] font-extrabold uppercase text-brand-text hover:gap-5 transition-all group/link"
                              >
                                ABRIR DOCUMENTO <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                              </a>
                            )
                          )}
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Empty State message if current trimester is empty */}
                    {currentActivities.length === 0 && (
                      <div className="col-span-full py-32 text-center border-2 border-dashed border-brand-line/20 bg-white/10">
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="font-serif text-3xl italic text-brand-text/60"
                        >
                          Ainda não tem atividades
                        </motion.p>
                      </div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-12 border-t border-brand-line mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="text-left">
              <p className="font-serif italic text-2xl mb-1">Maria Eduarda Ciquelero De Freitas</p>
              <p className="text-[10px] tracking-editorial uppercase font-bold opacity-50">
                SESI / SENAI © 2026
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-[10px] tracking-editorial uppercase font-extrabold text-brand-secondary mb-2">Contact</p>
              <a 
                href="mailto:MARIAEDUARDA@ESTUDANTE.SESISENAI.ORG.BR" 
                className="text-[12px] tracking-widest font-medium hover:text-brand-primary transition-colors underline underline-offset-8 decoration-brand-line/40"
              >
                MARIAEDUARDA@ESTUDANTE.SESISENAI.ORG.BR
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
