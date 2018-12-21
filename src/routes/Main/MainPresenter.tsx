import React from 'react';
import Head from '../../components/Head';
import styled from '../../typed-components';

const MainPresenter: React.SFC = () => {
  return (
    <Container>
      <Head title="React Typescript Boilerplate" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 1135px;
  height: 100vh;
  padding-left: 30px;
  padding-right: 30px;
  margin: auto;
`;

export default MainPresenter;
