import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { IUserDetails } from './create-form/userdetails';

export class UserData implements InMemoryDbService {

    createDb() {
 
        let userdetails: IUserDetails[] = [
            {
                'id': 1,
                 'name':'snig',
                 'email':'snig@gmail.com',
                 'phone':'9489384934'
            }
            
        ];
        return { userdetails };
    }
}
