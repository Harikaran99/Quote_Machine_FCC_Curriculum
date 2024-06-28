import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
const FETCHING = "FETCHING";
const GET_QUOTE = "GET_QUOTE";


const defaultState = {
    quote: "LOADING...",
    author: "LOADING...",
  }

// Two action cretors 
function actionFetchQuotes(){
    return {
        type: FETCHING
    }
}

function actionGetQuote() {
    return {
        type: GET_QUOTE,
        randomInt : Math.ceil(Math.random() * 102)
    }
}


function quotesReducer(state= defaultState, action = actionFetchQuotes()) {
    switch(action.type) {
        case GET_QUOTE:
            return {
                ...state,
                quote: quotes[action.randomInt].quote,
                author: quotes[action.randomInt].author
            }
        case FETCHING:
            return {
              ...state,
              quotes: fetchQuotes()
            }

    }
}

function fetchQuotes(){
    
   const receivedQuotes = fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => {
      if(!response.ok){
        throw new Error("Network response was not ok"); 
      }
      return response.json();
    })
    .then(data => ({
      quotes: data.quote
    }))
    .catch(error => console.error(error))
    
    return receivedQuotes
}

// Store create

// console.log(hi)
// console.log(store.getState())

export const store = createStore(quotesReducer,applyMiddleware(ReduxThunk.default))