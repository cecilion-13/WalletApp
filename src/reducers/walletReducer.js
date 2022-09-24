import {DELETE_WALLET, GET_WALLET, GET_WALLETS} from '../actions/types'

const initalState = {
    wallets:[],
    wallet:''
}

export default function(state=initalState,action){
     switch(action.type){
         case GET_WALLETS:
            return {...state, wallets:action.payload};
         case GET_WALLET:
            return {...state, wallet:action.payload};
         case DELETE_WALLET:
            return {...state, wallets:state.wallets.filter(x=>x.id!==action.payload)};      
         default:
            return state;   
     }
}