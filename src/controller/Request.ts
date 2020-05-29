import { Request, Response } from 'express';
import {buyRequestServices} from '../services/request'
import {responsesHelper} from '../utils/responseHelper'
import * as xlsx from 'xlsx'
class BuyRequest {
    async  addCsv(req:Request, res:Response){
        const {reqType}= req.body
        if (!reqType) {
           return res.status(400).send(responsesHelper.error(400, 'please insert request type'))
        }
        if (!['buy', 'sell'].includes(reqType)) {
         return res.status(400).send(responsesHelper.error(400, 'reqType must be buy or sell'))
        }
        const workbook = xlsx.readFile(req.file.path)  
        const sheet_name_list = workbook.SheetNames
        const ws = workbook.Sheets[sheet_name_list[1]]
        const data = xlsx.utils.sheet_to_json(ws)
        const arrTosave = []
        //console.log('this is data', data);
        for (const value of data) {
            const condition = value['Condition'].toLowerCase()
            const productsName = value['Product Name'].toLowerCase()
            const param = {
                condition,
                storageSize:value['Storage Size'],
                productsName:productsName,
                variant: [
                    {
                       grade:'A1',
                       price:value['A1']
                    },
                    {
                        grade:'A2',
                        price:value['A2']
                     },
                     {
                        grade:'B1',
                        price:value['B1']
                     },
                     {
                        grade:'A2',
                        price:value['B2']
                     },
                     {
                        grade:'C/B',
                        price:value['C/B']
                     },
                     {
                        grade:'C/D',
                        price:value['C/D']
                     },
                ]
            }
   arrTosave.push(param)
            
        }
        if (reqType === 'buy') {
         const addrequest = await buyRequestServices.addBuyer(arrTosave)
         return res.status(200).send(responsesHelper.success(200, addrequest,'added succesfully',{}))
        }
        const addrequest = await buyRequestServices.addSeller(arrTosave)
         return res.status(200).send(responsesHelper.success(200, addrequest,'added succesfully',{}))  
        
     } 

      async search(req:Request, res:Response){
         
         let { limit, skip, q } = req.query;
         if (!q) {
            return res.status(400).send(responsesHelper.error(400, 'please enter value to search'))
         }
         limit = parseInt(limit);
         skip = parseInt(skip);
         if (!limit) {
           limit = 10;
         }
         if (!skip) {
           skip = 0;
         }
         // const value = q.split(',')
         // for (const val of value) {
            
         // }
         
         const search = q == "undefined" ? {} : { $text: { $search: `\"${q}\"` }}; 
            const addrequest = await buyRequestServices.getBuyRequest(search,limit,skip)
            return res.status(200).send(responsesHelper.success(200, addrequest,'added succesfully',{}))
          
         // const count = await buyRequestServices.counntDocument({});
        

      }
}
export const buyRequest = new BuyRequest()