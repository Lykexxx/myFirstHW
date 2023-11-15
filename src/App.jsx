import React, { useState } from 'react';
import Header from './components/pages/header/Header';
import Footer from './components/pages/footer/Footer';
import Main from './components/pages/main/Main';
import Modal from './components/UI/modal/Modal';
import Button from './components/UI/button/Button';
import Input from './components/UI/input/Input';

function App() {
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  let name = undefined;
  let hello = name ? `Hello ${name}!` : 'Hello User!';

  const admin = {
    login: 'admin@mail.ru',
    password: 'admin',
  };

  function Authoriz() {
    if (login === admin.login && password === admin.password) {
      name = admin.login;
    }
  }

  return (
    <React.Fragment>
      <Header user={hello}>
        <Button onClick={() => setModal(true)}>Sing In</Button>
        <Button>Sing Up</Button>
        <Button>About</Button>
      </Header>
      <Main />
      <Modal visible={modal} setVisible={setModal}>
        <Input
          onChange={(e) => setLogin(e.target.value)}
          text={'Enter your email'}
          type={'email'}
          value={login}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          text={'Enter your password'}
          type={'password'}
          value={password}
        />
        <Button onClick={Authoriz()}>Sing In</Button>
      </Modal>
      <Footer />
    </React.Fragment>
  );
}

export default App;
