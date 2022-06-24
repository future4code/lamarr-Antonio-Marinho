import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './img/106.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil} 
          nome="Jarbas" 
          descricao="Olá me chamo Jarbas e chamam de Jarbas Marinho, quase contador
          falta poucos meses pra esse sonho se realizar e o próximo passo me tornar um Dev fullstack"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagem="data:image/png;base64,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"
         email="Email: jarbasmarinho33@gmail.com"        
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAZlBMVEX///8AAAD8/PyUlJT09PTp6env7+/c3NzU1NSKiorJycn5+fnl5eXs7Ox2dnbX19dqamp/f3+zs7MrKys8PDxQUFAUFBRGRkaamppeXl65ublXV1enp6c2NjYiIiJBQUELCwsbGxs1LzExAAAFGUlEQVR4nO2b2XqrIBCAFfctcYkmsZro+7/kYTCLIBh6ypgb/4t+XwwtwzDMhrWsnZ2dnZ2dnZ2dVQj8SNzMC4LU8xPyfrgxQVfUN3ui+ik67wsyhNFTgjf9Jd1UBhJfX3MPzdi8PtwOwXZSHOvHrLVTxuExCOK4K+6PZ1G2hQjE8g+PhccJ941b5pMg3RZyhBUzSdEgCRyStBjhy4OPLkXJFnxxFV+nTFV3bFONYJYfd1q8lPgEQ0JEGYjlMFWsO6ksn+RQS/pXOpggXh9DJ4eNGbH2hTC7GI4aQ0FpI5adpsNnXTwAE8qRxACn1WpGrx86tkSR4gIuUnew29t2EyAYaUrd1j1ZPnc9L5N4kRhlW4hVyAzjGOXn6tbXh863hBNaoHiPFJy08Kx8hjMg5+YklouiDjiDvCsIzkK6Ufic/YItmQ77pBHX1rIsY7h2cdw6k1pqTk6v+YVJ6wnBLI6zDOZQ+/K5fI+5edub64M607thH0YNrp9/BrFs53Vw6OQpJGQnTxij5+10cakdFLPP2W3pnkguGKVPt8oxKkbALYyw4NWJDpXJ0c4e0FFno2K0NOmb2V8oOb2QHlIPN86e0FA4qvKj/4IaYD37g3SZg6wqKXlrOGoGZG1y2PX3HrDoIgsYDaclV9ikP1ODhb7mjZWOiWqtf2uNDIbT9J6zefAZ8nEx52tJb1gManuX96dIeQKCkYtnZ+7XTItBLfQqH+dVnI2aFoPflBUxes6/nAxvSs0djUJzU4ybaM65aZWJEsFEjR9Y3n2BE5W7JWq8p/e4wHQCJjhzZXI8cO6rNF2t8KGN5Zmyqkxw5sZDGwT62frDQZpnejT8V8pfMsGBmwBMdhnoLSHQh6bTnkUSmFXLrg65CuGfin4ynAQmI0zxXn7I2lzzSQKoLc+zJ/7IZ2xGgJR3nsKwlPhUPrPRLII6e5inxCVCgcDKJS4+TAWCnV/KtoymkqWeNQEJxKEf01IQqNHPXEbnPduSTxx3brSxaRc60S7snrTq4pEdm5t5KSz3LlHy8ZLfb01VF6V4JEJxE01Ba9JBYnJJ4iaStBQcDUr7K9NvsxArbRBO6wREEt3+jcMKWhTCpedUQWT1lBkIpJa1XhXWGa+iZyzPrAI4VWZDPPfXz5qOscRUxnRmNbI6ArsnaRqagZbsg5bltWi92QdwDj+nENQyTmjKAFIdF/aLg/2/0Azr9ulO76qstI2hEbFirKA258oVRDJohK/QL6hjdgpWQgvoy2z/TwahOVezJgbN0hr8C9BPHjLdRBkWK2AV3Q3gIGTwaEzqUGxLoJ8b/RG/X1EHVcZto5cWHFXXlbBuD1K6syAblfdGuaLjgABht6ypzDoga0ZKhCVi+KpmdbSdMp73GN5SDM/my35sjvJrNFpBNEZvDD4B4WsR79Mb3sW8nKMsmEcYDY01CNxnDYIR+BtbBiDpXmBc/36kF18ccJvVkIfEIt47pjvTOpBECHBZDxXd9m9ICtUyavG8Aly6vtUBfdP8G2+L8q9SIBfPK/izRItAvfgVKaYA98jBW5wmqBavWpUktCrov2IZAC1ZzsyFxfjF8wovj16bv7L4BS6dvrYU8XZDuukKstiqRFKQsNj+i/YxEpDpJI68mb4hYBXO+RsRfg6xHlc7m0d4Afb+l31F7ftp4LP3qHVfZsUD4mz1bSGmSu2brutJbg/b/juIDEJj/FYNjVWS5tundaL8ZjjZ2dnZ2dnZ2dHkH54QLmsJnjueAAAAAElFTkSuQmCC"
         email="Endereço: Brazil"        
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Futuro Contador e desenvolvedor: O mundo nunca mais será o mesmo" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Sou muito analítico e racional " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAern////x8vIAeLgAdbf19PMAd7gAc7Y4isDD2eYAcrbm7O/6+PUAb7WTvdjv8/PJ2eUliMCcxN/4/P7u9vq+2eqoy+JzrNJXn8s9k8YvjcMchb8JfrvZ6/Tm8vhSmsnQ5PFsqNCOuNhnocx8sNS/0+Le6O2kxtzS4epFlsa00OWEtdR3qM2Yu9adPj6fAAAMNklEQVR4nOWde3eiPhPHoQmkRrEVVFRAbLXWxX3e/9t7Ar2sFxIyITHh/L7nbP9Zavk4k8lMrp5vWklSLJbxe7pab2ZZlnt5ls0261X6Hi8XRZIY//uewc+eF9V5v84jSgjGYYg8D7F/zQ8UhhgTQqN8vT9XxdzgW5giLKq355yR1VxCoZCR5s9vVWHoTUwQFvEqx6ST7ZqT4HwVm6DUTTiv0jwiELgLTBLlaaXbY7USbpcloliJ7keYonK51flS+giTqvQIUrPelSUR8cpKX4zVRbh7IzrwfiHJ207Tm2khnMcbCgosEpAh3cRamqQGwuLgKYaWDkjiHTQE196EuxXGJvgaRoxXvZ21J+FuHWl2zxvGMFr3ZOxFuCuj0CDel8Ko7MXYg7AosXm+hhGXPdqjMuE8pY/haxhpqhxXVQlj1C93gQqj+KGEoxk1GV/ahOhs9DDCJCWPc9B/CkmqksspEC4e7KD/hNHiAYTzPbXEV4vuwREHSrjIbBnwSziDmhFIeDaSgUKEyNkg4XZDLPPVIhtQhQwhXGgrAPsJgQIOgPDdBQN+ibwbIExKdwAZYindNcoSbi3H0FvhTLYxShLuchtZjEhhLllTyREujJa5akKhXLyRIlxGtnFaFS11EcZuAjJEmYpKgnDqUhC9FpnqIDzYzLS7RA/9CQ+uuuiXok7ELsKpyxasRbsctYMwdrcN/oh0hBsxoaPdxLU6Og0h4WIIgAxR2PWLCHeuZWo8haIETkC4zd1L1dqFckEazidMsqGYkBkx4xdTfMLSrXJJLFzCCR3O1drEz994hIthATJEXkDlEG6H0wZ/FHKiDYdwNkDCGYTwDMxGnehWaPtQcSshoBEihAlGXvPTNmd7U2wjnEt39Qh76/PH6HQ8jT7OazOLTuSF8rZpmzbCvWxPiPPpMZgEQfDE/k2C49mzPG2zlyNcSDZCRM8vk6dLTcbpw+eGr0Rb/PSeMJF8R5SPrvmYgsnSbhBG99nbPWEq52nIOwa3gLUZR1aHVnHaTTiSi6MIj9oAGeKn1bZI7pYz3BFK9vVkeueiP4h7m4563+/fEsZyYQbNXjiAT8HRqhHp7bDNDeFcstsmn+0+2hjxzaYREZoLCWXDTHjkAj4Fst2NGd0Gm2vCQvLdwj+8VtjIbv5GCwFhKelf+H98J2VGlP0YMwpLPuFOOl0TNEPWEP/a7fbxjkso/d2TSkh4tpueXhvxknAnPQBMhYTBu+VBrGjHIVxLO5eos2A2PFgeIQjX7YTyJvSIONJYzWpqXRrxgnAl/17i3iLIDL683Put2ggLwLYJhMYCwFfrEzoIFy2EB0h4EAVT26G0Fj7cE85BA2Zow7fh2IHFN8ib3xECZ3vpJ7d6ksxtzerfzPAv4Qb2xSPv1O6nQeUCIHOyW8IdtB5A+UvrKMbJvos2orsbQnhNF2ane0edfDjQCBuFb9eEicJgbhh+Pl2bcTI+2B1NvBAiyRVhpTKZhuimepkENWVQDwkfp7kTbfBLpLoiLFX3l2eranR8Ccan0fSPS3zs3cpLwq367FFIfuRKC/wW8rYXhMuhzfjKiCwvCBWd1G19u2lDKDuGOCx9jys2hJXrCxDVRKtfQicySf36GjltCHPb72JI+Q9hYb1iNaSo+CZ0Z5ksqs9WohRjSln/2ruDbUqomnDlRiStD+ApD9PPj9fT6fRaTdMyp/3WPqDVN6FKM0QRVzeBOeQ/eeE7KIxm09dxs+7hWxOWC043UZ9TN/IvwkIhkqLnF56C0dXnhX8D7pP/VgeG3tvoK4e/LqeDyenQI92tB6Q8tbqCEfKGaW4J37gDj5MfQkT2xwlnaCuYjKe5aqCo6wtPpfitCXmvDSD8sSF5vl/VccV4TBVTkroMZoTPCo4OINx3EdJ963jIpSYjpDSMjp5rwrlSoJH2UtxBiPhrHi4fHf9R8tR8zggLpfJe2oYdhIhwhyWvn31aqbwnKRih2gCGvJeuhIQ0lgKsw+pe4UVZqPF8pTF4XYRUxkW/NVFYW4/PjFBpKkwTYcT/zxaNn+FDnntGuFbJGQD9YSkgzMddUfTq+RO4Ukdr30uUSieADQWE5w8IYJ0igPvFPPESpdIJQMifTA04Ux8CxA3UT6PEk10kdEso7aWC6WIo4FPwCn1bWnhqW0e02FBBAWAqvhFZeGpDpfKEaK2V8BXYY5ClFyvVJvJeqpeQdYowI+LYU1vdY8uG4AlY/O6likm7JRs+vcD2fYapB226P4T8b1mNkJXzzc6NLk1gJglXnlJKo5sweDoup4fD9HM05tX6v4/C1ueitbdRAdTrpcE4fg4paQ5pz95eO55/gXWJG2+mSMh/XyjhZJlf7ArD5CDOBCZ/QG468zLrXrq6yRtJJszHgykkmqJMmVCXl47vq75ww/3w+vNBM2WMUG1WRpsNg7bBCcHIB9MR1BBVZ510EU7ad6sSzpajRmPg4k6rNgxO7bVb+EfUEv9AGlZuN9IEvLhIBaUjaGOV5UgTcDfKkXcBISSrYYQ2+0O+NdCGTxiAjnuYWc1pXvgTChG/TwxAOxw3VvNSwT4+yo+mwSfAhiwvtVhbBB/8nk2w7yiAjNKz2sJifSh6VXxQ+mLuCVObNb7I3URD5ZABN1bjq47T6CAU5NCiYVYQYWxzrE0U9kW/BiEkS+PjpaqEG02EC+Nj3qqEMz2EtDA+b2GZMEqMzz1ZJswT4/OHdgnr+UPTc8B2CZs5YMPz+HYJm3l8xbUYw/DSZi2G4fU0ouTkAYSF+TVRdgmbNVGm17XZJPxa12Z6baJNwu+1iYbXl9ok/F5fqrZGmPf3nSL8XiOsss57IIS5+lr9YXjp71p9hf0WelZ9mSb83W+hsGdmGIS/e2YUGuIwCPMee9cGQXixdw2+/1DT+lKzhBf7D+F7SIdgw8s9pPB9wNpWspskvNgHDN/LPQQvvdrLDd6PPwAbXu/HB7spwIbWCK/OVADXFwOw4c25GNCzTdwnvD3bBFoGu094ez4N9IwhbTu7jBHenTEEPCdK3+48Q4T350QBSyjnbdhy1hfwvDaNe0hNELad1wY7cw/QH1ohbDtzD3Ruous2bD83EXL2pd693PoJ28++hJxfqmc/vjlCzvmlgDNoHbch7wxaSK/vtg3pjkMofxa02zbknwUtf56324SC87zljQjw0r+PJhSdyS59rj7EhnzCiRlC4bn60iOn6HnM1eLGS194D74IVu6hGffXxh/CFFp8N4L8uCLCXIWyTwrPgZL/Aze/13G/hewdJe6q646SQd4pd6nue2Zk7wpyVRJ3BQ37iEGZ+56k7+xyUlJ3dknfu+ag5O5dA9yd55pk787z52q7vawLZbL3Hw7vItkvyd9h6fvnISISwD2k4HsEXNC/MWApwu0ACWH3AQ+vKULvdPb992EhknceyH/4bnU/yYZTZYTZfbbWTehvYWfdWBTKOVGmg9DfDcWIaCegEBH6i2Ec9B3xwmg3ob8cAmK0FDKICR06zJwrcjswAyP04WcxPlh02kHQReif3XbUqD3dhhD67SfIOCLaCShB6IMO2nisSJeLyhH6sauOGnUEGWlCVzuNjm4CQugvHLvLqRYKhR09kNDf5a5lcGEuStXghP42c6uYwpkg2VYi9JPSpZBKSn65pEroVK8h00soEPoL9fvntAp5cjEGTuhvNy6YkWxkmyCcsB4qtm1GxBn41UXoLyzHVJxBPFSF0J/vbWbidN82+aKXkJkR2TIjRlADqhH6SUpsZDghSaU7wZ6Evj+aPfxWXERnd4sQDBKyiurBroqRTKWkk9Cfp/RxrhrSFBxhehP6flGK11/p48Nl0f06BghZTVVG5hnDqJSskwwQMsZ1ZLQ4RmG07sXXm5AxrnCfGwrFfBivevJpIGTt8eAZyVYR8Q492p9GQhZX4w3V7KwopJtYOX5eSgsh0+6NEG03QyNEyFtv9/yWLkKWy1WlpwOS4XllpZKftUsfIdN2WSLaL9fBFJVLUIXbJa2ETPMqzSPFwFNfl5tWWhrfhXQT1iriVY4pqA9B7Pl8FWsInXcyQVirqNJ1Toh4PX7DFmJC8nVamaCrZYqw1rxYnPfrvL6BGuPmDuomENU/UBg218rQfL0/Lwrdnnkpk4RfSpJisYzf09V6M8uy3MuzbLZZr9L3eLkoEn0xk6f/A+61B3t5dkVrAAAAAElFTkSuQmCC" 
          texto="linkedin" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
