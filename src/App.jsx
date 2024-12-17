import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAC, removeCustomerAC } from './store/customerReducer'
import { addCashAC, getCashAC } from './store/cashReducer'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => dispatch(addCashAC(cash))
  const getCash = (cash) => dispatch(getCashAC(cash))

  const addCustomer = (name) => dispatch(addCustomerAC(name))
  const removeCustomer = (id) => dispatch(removeCustomerAC(id))
  
  return (
    <>
      <div className={'app'}>
        <span style={{fontSize: '30px'}}>Cash: {cash}</span>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={() => addCash(Number(prompt('Enter cash')))}>
            Add cash
          </button>
          <button onClick={() => getCash(Number(prompt('Enter cash')))}>
            Get cash
          </button>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={() => addCustomer(prompt('Enter name'))}>
            Add customers
          </button>
        </div>
        <div>
          { customers.length > 0
            ? customers.map(customer => (
              <h3 key={customer.id} onClick={() => removeCustomer(customer.id)}>
                {customer.name}
              </h3>
            ))
            : <h2>No customers</h2>
          }
        </div>
      </div>
    </>
  )
}

export default App
