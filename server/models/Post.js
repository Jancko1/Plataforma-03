import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	descripcion: {
		type: String,

	},
	Imagen: {
		type: String,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Users',
		required: true,
	},
	
},{
    timestamps: true,
  }
);

export default mongoose.model('Post', PostSchema );
