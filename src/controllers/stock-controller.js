import axios from "axios";
import {API_KEY, API_URL} from "../config.js";

export const getTickers = async (req, res) => {
    const { limit, offset } = req.query
    const response = await axios.get(`${API_URL}tickers?access_key=${API_KEY}&limit=${limit}&offset=${offset}`)
    res.send(response.data)
}

export const getTickerDetails = async (req, res) => {
    const { symbol } = req.params
    const response = await axios.get(`${API_URL}tickers/${symbol}?access_key=${API_KEY}`)
    res.send(response.data)
}

export const getTickerEODHistory = async (req, res) => {
    const { symbol } = req.params
    const { date_from, date_to } = req.query
    const response = await axios.get(`${API_URL}eod?access_key=${API_KEY}&symbols=${symbol}&date_from=${date_from}&date_to=${date_to}`)
    res.send(response.data)
}

export const searchTickers = async (req, res) => {
    const { limit, offset } = req.query
    const { search } = req.params
    const response = await axios.get(`${API_URL}tickers?access_key=${API_KEY}&search=${search}&limit=${limit}&offset=${offset}`)
    res.send(response.data)
}