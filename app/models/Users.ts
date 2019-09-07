import Base from './Base';
import { User } from './Usersmodel';

class _Users extends Base {

    createNewUser = async (username: string, password: string) => {
        await this.connection.then(async connection => {
            let user = new User();
            user.username = username;
            user.password = password;

            let userRepository = connection.getRepository(User);
            await userRepository.save(user);
            console.log('User has been created');
            return true;
        }).catch(error => {
            console.log(error);
            return false;
        });
    }

    filter = (username: string) => {
        return new Promise((resolve, reject) => {
            this.connection.then(async connection => {
                let userRepository = connection.getRepository(User);
                let user = await userRepository.findOne({ username: username });

                resolve(user);

            }).catch(error => {
                console.log(error);
                reject(error);
            });
        })
    }
}

const Users = new _Users();

export { Users };