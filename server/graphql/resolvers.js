import Users from "../models/Users.js";
import Post from "../models/Post.js";

export const resolvers = {
  Query: {
    hello: () => "Esta es el servidor de la plataforma del Circuito 03",
    //----------------Inicio Querys de user------------
    users: async () => {
      return await Users.find();
    },
    user: async (_, {username, password}) => {
      const user = await Users.findOne({ username, password });
      if (!user) {
        throw new Error('Usuario o contraseña incorrectos');
      }
      return user;
    },
    
    
    //----------------final Querys de user------------

    //----------------inicio Querys de post------------
    posts: async () => {
      return await Post.find();
    },
    post: async (_, { _id }) => {
      return await Post.findById(_id);
    },
    //----------------final Querys de post------------
  },
  Mutation: {

    //----------------inicio Mutation de User' s------------

    // Crear Users
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

    // Eliminar Users
    deleteUser: async (_, { _id }) => {
      const deletedUser = await Users.findByIdAndDelete(_id);
      if (!deletedUser) throw new Error("Users not found");
      return deletedUser;
    },

    // Actualizar Users
    updateUser: async (_, args) => {
      const updatedUser = await Users.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedUser) throw new Error("User not found");
      return updatedUser;
    },

    //----------------final Mutation de User´s------------


    //----------------Inicio Mutation de Post´s------------


    // Crear Post´s
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

    // Eliminar Post´s
    deletePost: async (_, { _id }) => {
      const deletedPost = await Post.findByIdAndDelete(_id);
      if (!deletedPost) throw new Error("Post not found");
      return deletedPost;
    },

    // Atualizar Post´s
    updatePost: async (_, args) => {
      const updatedPost = await Post.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedPost) throw new Error("Post not found");
      return updatedPost;
    },

    //----------------final Mutation de Post´s------------
  },
  
  // Relacion User a Post´s
  User: {
	post: async (parent) => await Post.find({userId: parent._id})
  },

  // Relacion Post´s a User
  Post: {
	user: async (parent) => await Users.findById(parent.userId)
  }
};
