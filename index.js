function findMatching(collection, name)
{
  const newCollection = [];


  for (const user of collection)
  {
    if (user.toLowerCase() == name.toLowerCase())
      newCollection.push(user);

  }

return newCollection;
}
