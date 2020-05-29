import * as Mongoose from 'mongoose';
const  Float = require('mongoose-float').loadType(Mongoose);
import { Document, Model, model, Schema } from 'mongoose';
import { IbuyRequest } from './IbuyRequest';
export interface IRequestModel extends IbuyRequest, Document {}
const buyRequestSchema = new Mongoose.Schema(
  {
    condition: {
     type:String,
     enum: ['locked', 'unlocked']
    },

   storageSize: {
    type:String,
    required:true
   },
   image: {
  type:String
   },
    productsName: {
      type: String,
      required:true,
      trim:true

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
buyRequestSchema.index({'$**':'text'})
export const buyRequest: Model<IRequestModel> = model<IRequestModel>(
  'buyrequest',
  buyRequestSchema
);
