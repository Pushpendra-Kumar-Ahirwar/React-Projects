import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [Amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const CurrencyInfo = useCurrencyInfo(from)
  const options = Object.keys(CurrencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(Amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(Amount * CurrencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/financial-diagrams_53876-123790.jpg?w=900&t=st=1719477328~exp=1719477928~hmac=aa056c8492317be237d833102072368ce40ae3b70be2baaf11d78ef71150aea3')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 '>

          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>
            <div className=' w-full mb-1'>
              <InputBox label="From"
                amount={Amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                setectCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2
              -translate-x-1/2
              -translate-y-1/2
              border-2 border-white rounded-md bg-blue-600 text-white py-0.5 px-2
              '
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                amount={convertedAmount}
                label='To'
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                setectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type='submit '
              className='w-full bg-blue-700 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}

            </button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default App
