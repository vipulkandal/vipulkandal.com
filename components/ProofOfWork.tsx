"use client";

import ProofOfWorkCard from "./ProofOfWorkCard";
import Heading from "./Heading";

const ProofOfWork = () => {
  return (
    <div id='proofOfWork'>
      <Heading text='Proof of Work' highlightedText={["Work"]} />
      <div className='grid grid-cols-3 gap-4 mt-20'>
        <ProofOfWorkCard
          imagePath='/images/card_test.jpg'
          githubLink='https://github.com/yourproject'
          liveSiteLink='https://livesite.com'
          techStack={["React", "Node.js", "Express", "MongoDB"]}
        />
        <ProofOfWorkCard
          imagePath='/images/card_test.jpg'
          githubLink='https://github.com/yourproject'
          liveSiteLink='https://livesite.com'
          techStack={["React", "Node.js", "Express", "MongoDB"]}
        />
      </div>
    </div>
  );
};

export default ProofOfWork;
