import React from 'react';

import Button from './Button';
import Cv from './Cv';

class Builder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cvData: {
        contacts: {
          mail: 'my@email.com',
          phone: '',
          linkedin: '',
          github: '',
          isEditable: false,
        },
      },
    };
  }

  render() {
    const { cvData } = this.state;

    return (
      <main className="flex grow flex-col py-8 px-4">
        <Button />
        <Cv cvData={cvData} />
      </main>
    );
  }
}

export default Builder;
