import Users from "../models/Users.js";
import Post from "../models/Post.js";

export const resolvers = {
  Query: {
    hello: () => "Esta es el servidor de la plataforma del Circuito 03",
    users: async () => {
      return await Users.find();
    },
    user: async (_, { _id }) => {
      return await Users.findById(_id);
    },
    posts: async () => {
      return await Post.find();
    },
    post: async (_, { _id }) => {
      return await Post.findById(_id);
    },
  },
  Mutation: {
    createUser: async (
      _,
      { fullname, username, password, rol, direccion, telefono }
    ) => {
      const user = new Users({
        fullname,
        username,
        password,
        rol,
        direccion,
        telefono,
      });
      const savedUser = user.save();
      return savedUser;
    },
    deleteUser: async (_, { _id }) => {
      const deletedUser = await Users.findByIdAndDelete(_id);
      if (!deletedUser) throw new Error("Users not found");
      return deletedUser;
    },
    updateUser: async (_, args) => {
      const updatedUser = await Users.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedUser) throw new Error("User not found");
      return updatedUser;
    },
    createPost: async (_, { title, descripcion, Imagen, userId }) => {
      const userFound = await Users.findById(userId);
      if (!userFound) {
        throw new Error("User not found");
      }

      const post = new Post({
        title,
        descripcion,
        Imagen,
        userId,
      });
      const savedPost = post.save();
      return savedPost;
    },
    deletePost: async (_, { _id }) => {
      const deletedPost = await Post.findByIdAndDelete(_id);
      if (!deletedPost) throw new Error("Post not found");
      return deletedPost;
    },
    updatePost: async (_, args) => {
      const updatedPost = await Post.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedPost) throw new Error("Post not found");
      return updatedPost;
    },
  },
  User: {
	post: async (parent) => await Post.find({userId: parent._id})
  },
  Post: {
	user: async (parent) => await Users.findById(parent.userId)
  }
};
