import { Global } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import { RecoilRoot } from 'recoil';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <RecoilRoot>
      <Global styles={GlobalStyle} />
      <div>시작</div>
      <Button variant="primary">primary</Button>
    </RecoilRoot>
  );
}

export default App;