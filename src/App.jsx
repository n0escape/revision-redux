import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
    <>
      <div className={'app'}>
        <span style={{fontSize: '30px'}}>Cash: {cash}</span>
        <div style={{display: 'flex'}}>
          <button onClick={() => addCash(Number(prompt('Enter cash')))}>
            Add cash
          </button>
          <button onClick={() => getCash(Number(prompt('Enter cash')))}>
            Get cash
          </button>
        </div>
      </div>
    </>
  )
}

export default App
