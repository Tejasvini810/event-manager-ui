import React, { useState } from 'react';
import CardComponent from '../components/CardComponent';
import ModalComponent from '../components/ModalComponent';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Welcome to the Social Events Platform</h1>
      <CardComponent
        image="https://via.placeholder.com/150"
        title="Photography Society"
        description="Join us for amazing photography sessions."
        onButtonClick={() => setModalOpen(true)}
      />
      <ModalComponent
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Photography Society Details"
        content="We organize photography events every weekend."
      />
    </div>
  );
};

export default Home;
