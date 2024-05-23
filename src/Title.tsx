function Title() {
  const name = 'Alan';
  const lastName = 'Hernández';
  if(name && lastName) {
    return <h1>Hello World, {name} {lastName}!</h1>;
  }
  return <h1>Hello World!</h1>;  
}

export default Title;