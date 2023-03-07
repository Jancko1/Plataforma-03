import Project from "../models/Project.js";
import Post from "../models/Posts.js";


export const resolvers = {
  Query: {
    hello: () => "Hola amor",
    projects: async () => await Project.find(),
    project: async (_, { _id }) => await Project.findById(_id),

    //---------------------------Query post-------------------------------

    posts: async () => await Post.find(),
  },
  Mutation: {
    createProjet: async (_, { titulo, description }) => {
      const project = new Project({ titulo, description });
      const savedProject = await project.save();
      return savedProject;
    },
    deleteProject: async (_, { _id }) => {
      const deleteProject = await Project.findByIdAndDelete(_id);
      if (!deleteProject) throw new Error("Error not found");
      return deleteProject;
    },
    updateProject: async (_, args) => {
      const updatedProject = await Project.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedProject) throw new Error("Projec not found");
      return updatedProject;
    },

    createPost: async (_, { titulo, descripcion, Imagenes }) => {
      const post = new Post({ titulo, descripcion, Imagenes });
      const savedPost = await post.save();
      return savedPost;
    },
  },
};
