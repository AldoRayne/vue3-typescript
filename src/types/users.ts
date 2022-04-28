interface Users {
  id: string | number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string | number;
      lng: string | number;
    };
  };
}

export default Users;
