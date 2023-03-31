import mongoose from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';
/* const AutoIncrement = require('mongoose-sequence')(mongoose); */

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

/* noteSchema.plugin(AutoIncrement, {
  inc_field: 'ticket',
  id: 'ticketNums',
  start_seq: 500,
}); */

noteSchema.plugin(autoIncrement, {
  model: 'Note',
  field: 'ticket',
  startAt: 500,
});

export default mongoose.model('Note', noteSchema);
