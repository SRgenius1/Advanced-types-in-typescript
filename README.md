# Advanced-types-in-typescript
This is a documentation with the most important characteristics of TypeScript in its typing

## BY JUAN DAVID REYES 💛🤗

# Ts-Node

It allows us to run TypeScript from the Node side, that is, in the backend.

The installation is like this

```jsx
npm install -D ts-node
```

# enums

The enum allows us to configure a set of options, it is similar to literal types, they are declared like this.

```jsx
enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  COSTUMER = 'COSTUMER',
};
```

It is advisable that we enums go is capitalized.

This is important for making multiple choices when we have different options.

For example we are going to create a user and with the role enum declared before we are going to assign a role property within the user using a type union like this

```jsx
type User = {
  username:string;
  role: ROLES;
};
```

But then how do we use this? what we will do is use the properties of the enum and the union type declared before to give the type to a variable or constant.

```jsx
const johnUser:User
```

Then we are going to create an object and start assigning the properties

```jsx
const johnUser:User = {
  username: 'Juan david el MALE',
}
```

But how do we assign the enum? we do it as follows

```jsx
const johnUser:User = {
  username: 'Juan david el MALE',
  role: ROLES.ADMIN
}
```

This way we can use the enumerated ones together with the union types.

## Tuples

They allow us to define a strongly typed array, both at each element position and also limit the number of elements it has.

But... How do we type a Tuple? we do it so

```jsx
const user:[string, number] = ['juandaElpro', 12];
```

Here we have a clear example of how we only have 2 data types but we also only have 2 elements and we cannot add more, if we try to put a number in the first position it throws us an error and so on...

# Unknown type

This data type is an improvement on `any`, as it gives us the flexibility we sometimes want but without completely turning off static code analysis. Unknown forces us to do a type check.

Unknown does not allow us to use methods that are not specific to the data type.

```jsx
let owo: unknown;
owo = 12;
owo = 'Wolas';

// MISTAKE!
// owo.toUpperCase();
```

#never

Functions that never have an end

```jsx
const withoutEnd = () => {
  while (true) {
    console.log('Never stop learning');
  };
};
```

# Optional parameters and nullis-coalescing

When we have a function in TS we have to send it the parameters it requires but we also have ways to make those parameters optional let's look at this example

```jsx
export const createProduct = (
  id: string | number,
  stock: number,
  isNew: boolean,
) => {
  return {
    go,
    stock,
    isNew,
  };
};

createProduct();
```

In this case we have 3 parameters and if we want to make them optional we have to do the following

```jsx
  id?: string | number,
  stock?: number,
  isNew?: boolean,
```

In this case we put all the parameters in optional but in the event that we only have one, that optional parameter has to go at the end because that is what TS requires.

```jsx
  id: string | number,
  stock: number,
  isNew?: boolean,
```

If we don't send an optional parameter, its default type will be undefined, and the way to set our own default values ​​is like this

```jsx
 return {
    go,
    stock: stock ?? 12,
    isNew,
  };
```

Now stock has a default value.

The double question mark is called nullis-coalescing.

# Default parameters

```jsx
function sum(
  to: number = 12,
  b:number = 22,
  ) {
  return a + b;
};
```

Directly from the parameters we can assign default values ​​to those parameters.

When we send arguments we can omit the ones we want as long as we have default parameters

```jsx
sum(11);
// return: 23
```

# rest parameters (flexibility in parameters)

Here we try to simulate a bit the flexibility of JavaScript with TypeScript.

```jsx
function funExample (...arr:string []) { //... code};
```

# interfaces

A better way to define objects, before we declared and typed things like this

```jsx
typeSizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  id: string | number;
  title:string;
  createAt: string;
  stock: number;
  size: Sizes;
};

const products: Product[] = [];

products.push({
  id: 1,
  title: 'wolas',
  createAt: '12,23',
  stock: 12,
  size: 'L',
});
```

Now we can also do it like this

```jsx
interface Product {
  id: string | number;
  title:string;
  createAt: string;
  stock: number;
  size: Sizes;
};
```

It is very similar to types but has changes in its syntax, but...

## What are their differences?

With type you can only define primitive or direct types with types we can do something like this

```jsx
type userId = string | number;
```

On the other hand, with interfaces, not interfaces, it is mandatory to send the body or block of code

```jsx
interface userId {..//Code};
```

With the interfaces

we can only make use of primitive typing if not the one that pleases us basically in this way

```jsx
interface Product {
  id: string | number;
  title:string;
  createAt: string;
  stock: number;
  size: 'S' | 'M' | 'L' | 'XL';
};
```

As you can see we not only use primitive types but also default options with strings or numbers.

One of the features of interfaces is that they can be extended, whereas types cannot be extended.

## What is extending interfaces?

It's basically inheritance as it works in object oriented programming.

## Difference with type

By using interfaces we can apply inheritance, but this is not the case with type.

## Syntax

```jsx
interface InterfaceFather { statements }
interface InterfaceChildextends InterfaceFather { statements }
```

# readonly in TS

As its name indicates, this TS feature helps us to have certain read-only attributes. Which means they cannot be modified. A good use case is the `id` and the `createdAt`.

```jsx
interface BaseModel {
readonly id: string | number;
readonly createdAt: Date;
  updatedAt: Date;
}
```

# ReadOnlyArray

We have many array methods that allow us to mutate an array, but in programming, in general, mutating an array is avoided, so creating new states is preferred to avoid side effects.

To avoid these mutations, we use `ReadonlyArray` as another data type.

## Syntax

```
const variableName: ReadonlyArray<dataType> = [value];

```

## read-only array

If we only add `ReadonlyArray` we will not be able to mutate the array with its methods, but if we are going to be able to perform a reassignment, to avoid this we must use the `readonly` property.

```
readonly MyProperty: ReadonlyArray<dataType>;
```

# In the /App folder there is a mini project for you to see ;) the project is an example of CRUD.

# Thank you for viewing this Repo, a hug!

Follow me on [Instagram](https://www.instagram.com/dev_juan22/)
Follow me on [Facebook](https://www.facebook.com/juandavid.reyesbedoya.7)
Follow me on [Youtube](https://www.youtube.com/channel/UCacHqx898rhli-vmmjSmkWw)
