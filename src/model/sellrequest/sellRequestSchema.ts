import * as Mongoose from 'mongoose';
const  Float = require('mongoose-float').loadType(Mongoose);
import { Document, Model, model, Schema } from 'mongoose';
import { IsellRequest } from './IsellRequest';
export interface IRequestModel extends IsellRequest , Document {}
const sellRequestSchema = new Mongoose.Schema(
  {
    condition: {
     type:String,
     enum: ['locked', 'unlocked']
    },
   storageSize: {
    type:String,
    required:true
   },
    productsName: {
      type: String,
      required:true
    },
    variant: [{
      grade: {
        type: String,
        enum: ['NEW','A1', 'A2', 'B1','B2','C','C/B', 'C/D']
       },
       price:{
        type:Float
       }
      }
    ],
    
    
  },
  {
    timestamps: true
  }
);
export const sellerRequest: Model<IRequestModel> = model<IRequestModel>(
  'sellrequest ',
  sellRequestSchema
);
