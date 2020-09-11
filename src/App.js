import React from 'react'
import CurrencyExhange from "./components/CurrencyExchange";
import Title from "./components/Title";

const App = () => {

        return (
            <div     style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Title/>
                <div>
                    Currency Exchanger
                </div>
                <CurrencyExhange/>
            </div>
        )
}

export default App;
