interface Person {
    name: string;
    age: number;
    address: string;
}

type Person1 = string | number;

type Hellp = Partial<Person1>;

type MappedTypePerson = {
    [P in keyof Person]?: Person[P]
}

type NameType = Person['name'];
type ageType = Person['age'];
type addressType = Person['address'];

type Key = 'name' | 'age';

type PersonKeyType = Person[Key];

type first = "Hello";

type second = "world";

type message = `${first} ${second}`;