const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (context) => {
           if(context.user) {
               const userData = await User.findOne({_id: context.user._id})
               .select('-__v -password')
               .populate('posts')
         
               return userData
    }
             throw new AuthenticationError('Not logged in')
        },
        
        //Do we need username at all? If we want to show all messages or high rated messages
        posts: async (parent, {username})=>{
            const params = username ? {username} : {};
            return Post.find(params).sort({createdAt: -1}).limit(5);
        },
        post: async (parent, {_id})=> {
            return Post.findOne({_id});
        }
    },

    Mutation : {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user);

            return {token, user}
        },
        login: async (parent, {email, password}) => {
            const user = await user.findOne(email);

            if(!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPW = await user.isCorrectPassword(password)
            if(!correctPW){
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user)
            return {token, user}
        },
        addPost: async (parent, args)=>{

            console.log(args);
            const context = {
                user: {
                    username: "testUser",
                    _id: '612ae009469041001643d83f'
                }
            }
            if(context.user){
                const post = await Post.create({...args, username: context.user.username})

                await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$push: {posts: post._id}},
                    {new: true}
                )
                return post
            }
            throw new AuthenticationError('You need to be logged in!')
        },

        addComment: async (parent, {postId, commentText}, context)=> {
            if(context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    {_id: postId},
                    {$push: {comments: {commentText, username: context.user.username}}},
                    {new: true, runValidators: true}
                )
                return updatedPost;
            }
            throw new AuthenticationError('You need to be logged in!')
        }
    }

}
module.exports = resolvers;
