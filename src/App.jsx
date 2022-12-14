import { useEffect, useState } from 'react';
import './App.scss';
import card_logo from './assets/card-logo.svg';
import Form from './components/Form';
import Done from './components/Done';

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardholderName: '',
    number: '',
    cvc: '',
    mm: '',
    yy: '',
  });

  const [validCard, setValidCard] = useState(false);

  useEffect(() => {
    if (!validCard) {
      setCardInfo({
        cardholderName: '',
        number: '',
        cvc: '',
        mm: '',
        yy: '',
      });
    }
  }, [validCard]);

  return (
    <div className="wrapper">
      <div className="left-panel">
        <div className="card card-front">
          <img src={card_logo} alt="Card logo" />
          <div className="card-details">
            <div className="number">
              {cardInfo.number || '0000 0000 0000 0000 0000'}
            </div>
            <div className="name-date">
              <div className="name">
                {cardInfo.cardholderName || 'Jane Appleseed'}
              </div>
              <div className="date">
                {cardInfo.mm || '00'} / {cardInfo.yy || '00'}
              </div>
            </div>
          </div>
        </div>
        <div className="card card-back">
          <div className="cvc">{cardInfo.cvc || '000'}</div>
        </div>
      </div>
      <div className="right-panel">
        {(!validCard && (
          <Form
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
            setValidCard={setValidCard}
          />
        )) ||
          (validCard && <Done setValidCard={setValidCard} />)}
      </div>
    </div>
  );
}

export default App;
