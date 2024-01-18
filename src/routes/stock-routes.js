import { Router } from "express";
import {getTickerDetails, getTickerEODHistory, getTickers, searchTickers} from "../controllers/stock-controller.js";

const router = Router()

router.get('/tickers', getTickers)
router.get('/tickers/:symbol', getTickerDetails)
router.get('/tickers/:symbol/eod', getTickerEODHistory)
router.get('/tickers/search/:search', searchTickers)

export default router