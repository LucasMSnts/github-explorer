import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// React.FunctionComponent e React.FC são a mesma coisa, deixa menos verboso
const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44436395?s=460&u=cf61466684b83bbcf5ff219c1accd52a14c5ee41&v=4"
            alt="Lucas Mauro"
          />
          <div>
            <strong>LucasMSnts/estudos</strong>
            <p>Projetos que estou estudando</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44436395?s=460&u=cf61466684b83bbcf5ff219c1accd52a14c5ee41&v=4"
            alt="Lucas Mauro"
          />
          <div>
            <strong>LucasMSnts/estudos</strong>
            <p>Projetos que estou estudando</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44436395?s=460&u=cf61466684b83bbcf5ff219c1accd52a14c5ee41&v=4"
            alt="Lucas Mauro"
          />
          <div>
            <strong>LucasMSnts/estudos</strong>
            <p>Projetos que estou estudando</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
