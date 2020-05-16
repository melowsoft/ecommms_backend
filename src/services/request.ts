import {buyRequest} from '../model/buyrequest/buyRequestSchema'
import {sellerRequest} from '../model/sellrequest/sellRequestSchema'
class BuyRequestServices {
    addBuyer (data){
     return buyRequest.insertMany(data)
    }
    addSeller (data){
        return sellerRequest.insertMany(data)
       }
       getBuyRequest(search, limit,skip){
           return buyRequest.find(search)
           .limit(limit)
           .skip(skip)
       }
}
export const  buyRequestServices = new BuyRequestServices() 