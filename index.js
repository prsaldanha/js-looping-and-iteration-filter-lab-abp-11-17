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

function fuzzyMatch(collection, likename)
{
  const newCollection = [];
  for (const user in collection)
  {
  if (user.startsWith(likeName))
    newCollection.push(user);
}
  return newCollection;
}

function matchName(collection, name)
{
  for (const user of collection)
  if (user.Name == name)
    newCollection.push(user)
    return newCollection;
}
