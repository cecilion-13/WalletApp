import axios from 'axios';
import { GET_ERRORS, GET_WALLETS, GET_WALLET, DELETE_WALLET } from './types';

export const createWallet = (newWallet, history) => async dispath => {
    await axios.post('http://localhost:8080/wallet', newWallet)
            .then((res) => {
                history.push('/dashboard')
            }).catch((err) => {
                dispath({type:GET_ERRORS,payload:err.response.data})
            })
}

export const getWallets = () => async dispath => {
    await axios.get('http://localhost:8080/wallet')
            .then((res) => {
                dispath({type:GET_WALLETS,payload:res.data})
            }) 
}

export const deleteWallet = (id) => async dispath => {
    await axios.delete(`http://localhost:8080/wallet/${id}`)
            .then((res) => {
                dispath({type:DELETE_WALLET,payload:id})
            }) 
}

export const getWallet = (id) => async dispath => {
    await axios.get(`http://localhost:8080/wallet/${id}`)
            .then((res) => {
                dispath({type:GET_WALLET,payload:res.data})
            }) 
}

export const updateWallet = (id, updatedWallet,history) => async dispath => {
    await axios.put(`http://localhost:8080/wallet/${id}`, updatedWallet)
            .then((res) => {
                history.push('/dashboard')
            }).catch((err) => {
                dispath({type:GET_ERRORS,payload:err.response.data})
            })
}


//Transactions

export const createTransaction = (newTransaction, history, wallet_id) => async dispath => {
    await axios.post(`http://localhost:8080/transaction/${wallet_id}`, newTransaction)
            .then((res) => {
                history.push('/dashboard')
            }).catch((err) => {
                dispath({type:GET_ERRORS,payload:err.response.data})
            })
}
