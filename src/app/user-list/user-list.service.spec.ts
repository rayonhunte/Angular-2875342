// import { TestBed } from '@angular/core/testing';

// import { UserListService } from './user-list.service';

// describe('UserListService', () => {
//   let service: UserListService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UserListService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { UserListService } from './user-list.service';

describe('User List Service ', () => {
  let service: UserListService;
  beforeEach(() => {
    service = new UserListService();
  });

  it('should return the list of users', (done: DoneFn) => {
    //expect(service.getAll()).toBeTruthy();
    service.getAll().then(
      ((response) => {
        expect(response.length).toBe(16);
        done();
      })
    )
  });
})
