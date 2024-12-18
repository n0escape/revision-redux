const ADD_CUSTOMER = 'ADD_CUSTOMER',
  REMOVE_CUSTOMER = 'REMOVE_CUSTOMER',
  ADD_SERVER_CUSTOMERS = 'ADD_SERVER_CUSTOMERS'

const defaultState = {
  customers: [],
}

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SERVER_CUSTOMERS: 
      return { ...state, customers: [...state.customers, ...action.payload] }

    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }

    case REMOVE_CUSTOMER:
      return { ...state, customers: state.customers.filter(c => c.id !== action.payload) }

    default:
      return state
  }
}

export default customerReducer
export const addCustomerAC = (name) => ({ type: ADD_CUSTOMER, payload: { id: Date.now(), name: name } })
export const addServerCustomersAC = (payload) => ({ type: ADD_SERVER_CUSTOMERS, payload })
export const removeCustomerAC = (id) => ({ type: REMOVE_CUSTOMER, payload: id })