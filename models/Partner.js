import mongoose from 'mongoose';

const PartnerSchema = new mongoose.Schema(
  {
    partnerName: {
      type: String,
      required: [true, 'Please provide an partner name'],
      trim: true,
    },
    partnerDescription: {
      type: String,
      required: [true, 'Please provide a partner description'],
    },
    partnerImage: {
      type: String, 
      required: [true, 'Please provide an partner image'],
    },
    partnerWebsite: {
      type: String, 
      required: false,
    },
  },
  { timestamps: true }
);

PartnerSchema.methods.toJSON = function () {
  const partner = this;
  const partnerObject = partner.toObject();

  delete partnerObject.__v;  
  delete partnerObject.createdBy; 


  return partnerObject;
};

export default mongoose.model('Partner', PartnerSchema);