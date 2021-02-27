import React from "react";

import Aside from "./Components/Aside/Aside";
import Experience from "./Components/Experience/Experience";
import Perfil from "./Components/Profile/Profile";

import "./App.css"

function App() {

  const fakeAPI =  
    {
      nome: 'Virginia Silva',
      ocupacao: 'React Developer',
      resumo: 'Engenheira apaixonada por tecnologia',
      perfilProfissional: 'Densenvolvedora React',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '19 99170-6547'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'virginia_hol@hotmail.com'
        },
        {
          id: 3,
          tipo: 'Linkedin',
          contato: 'virginia-silva-05514132/'
        },
        {
          id: 4,
          tipo: 'GitHub',
          contato: 'https://github.com/virginia-silva'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'Universidade Paulista - UNIP',
          curso: 'Análise e Desenvolvimento de Sistemas'
        },
        {
          id: 2,
          instituicao: 'Anhanguera Educacional Campinas',
          curso: 'Engenharia de Produção'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Estudante React Front End Developer',
          periodo: 'Janeiro de 2021 - Presente Momento',
          empresa: 'Progr-Ame',
          local: 'Jaguaríuna - SP',
          conteudo: 'Desenvolvimento de aplicações web com React (Typescript)'
        },
        {
          id: 2,
          cargo: 'Coordenadora de Produção',
          periodo: 'Abril 2011 - Presente Momento',
          empresa: 'Stabra Ind & Com LTDA',
          local: 'Holambra - SP',
          conteudo: 'Melhorar a qualidade e a produtividade industrial usando KPI (Indicadores-Chave de Desempenho)e elaboração de relatórios . Gestão de equipes de trabalho, auxiliar nos trabalhos desenvolvidos dando todo suporte necessário junto a equipe de projetos, leitura e interpretação de desenho técnico. Treinamentos de pintura industrial, conhecimentos de logística industrial, diagnosticar e otimizar fluxos de materiais e ainda compreender os impactos ambientais do uso de suas tecnologias, não só como forma de estar amparado pela lei ,mas pela conscientização da importância da preservação do meio ambiente no processo de produção industrial. Gestão de materiais em toda cadeia de suprimentos utilizando as ferramentas de Kanban'
        }
      ]
  }

  const [dados] = React.useState(fakeAPI)

  return (
    <main>
      
      <Perfil dados={dados}/>
      <Aside dados={dados} />
      <Experience dados={dados} />
      
    </main>
  );
}

export default App;