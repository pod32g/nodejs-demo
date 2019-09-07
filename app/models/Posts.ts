import Base from './Base';
import { Post } from './Postsmodel';
import { User } from './Usersmodel';
class _Posts extends Base {


    createNewPost = async (title: string, content: string, image: string, user: string) => {
        await this.connection.then(async connection => {
            let post = new Post();
            let postRepo = connection.getRepository(Post);
            let userRepo = connection.getRepository(User);

            post.title = title;
            post.content = content;
            post.image = image;
            post.user = await userRepo.findOne({ username: user });
            post.timestamp = new Date();
            post.likes = 0;

            await postRepo.save(post);
            console.log('Post has been created');

            return true;

        }).catch(error => {
            console.log(error);
            return false;
        });
    }

    plusLike = async (id: number) => {
        await this.connection.then(async connection => {
            let postRepo = connection.getRepository(Post);

            let post = await postRepo.findOne({ id: id });
            let newLikes = -1;

            if (post != null) {
                newLikes = post.likes + 1;
            }

            await postRepo.update(id, { likes: newLikes });

        }).catch(error => {
            console.log(error);
            return false;
        })
    }

    getAll = () => {
        return new Promise((resolve, reject) => {
            this.connection.then(async connection => {
                let postRepo = connection.getRepository(Post);
                let posts = await postRepo.find();

                resolve(posts);
            }).catch(error => {
                console.log(error);
                reject(error);
            });
        });
    }

    getOne = (id: number) => {
        return new Promise((resolve, reject) => {
            this.connection.then(async connection => {
                let postRepo = connection.getRepository(Post);
                let post = await postRepo.findOne({ id: id });

                resolve(post);
            }).catch(error => {
                console.log(error);
                reject(error);
            });
        });
    }
}

const Posts = new _Posts();

export { Posts };