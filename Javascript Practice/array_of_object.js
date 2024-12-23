const users = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    isActive: true,
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    email: "bob@example.com",
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    email: "charlie@example.com",
    isActive: true,
  },
  {
    id: 4,
    name: "Diana",
    age: 28,
    email: "diana@example.com",
    isActive: false,
  },
  {
    id: 5,
    name: "Eve",
    age: 22,
    email: "eve@example.com",
    isActive: true,
  },
  {
    id: 6,
    name: "Frank",
    age: 40,
    email: "frank@example.com",
    isActive: true,
  },
  {
    id: 7,
    name: "Grace",
    age: 29,
    email: "grace@example.com",
    isActive: false,
  },
  {
    id: 8,
    name: "Hank",
    age: 33,
    email: "hank@example.com",
    isActive: true,
  },
  {
    id: 9,
    name: "Ivy",
    age: 26,
    email: "ivy@example.com",
    isActive: false,
  },
  {
    id: 10,
    name: "Jack",
    age: 31,
    email: "jack@example.com",
    isActive: true,
  },
];

console.log(users);

// --------------------------------------------------------------------------------
// 1. Find the user with the highest age.
const userWithHighestAge = users.reduce(
  (oldest, user) => (user.age > oldest.age ? user : oldest),
  users[0]
);
console.log(userWithHighestAge);

// --------------------------------------------------------------------------------
// 2. Find the number of active users.
const activeUserCount = users.filter((user) => user.isActive).length;
console.log(activeUserCount);

// --------------------------------------------------------------------------------
// 3. Get the list of user names.
const userNames = users.map((user) => user.name);
console.log(userNames);

// --------------------------------------------------------------------------------
// 4. Sort the users by age in ascending order.
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log(sortedByAge);

// --------------------------------------------------------------------------------
// 5. Find the user with the given email address.
const findUserByEmail = (email) => users.find((user) => user.email === email);
console.log(findUserByEmail("bob@example.com"));

// --------------------------------------------------------------------------------
// 6. Get the average age of all users.
const averageAge =
  users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(averageAge);

// --------------------------------------------------------------------------------
// 7. Find all users who are younger than a given age (e.g., 30).
const usersYoungerThan30 = users.filter((user) => user.age < 30);
console.log(usersYoungerThan30);

// --------------------------------------------------------------------------------
// 8. Get a list of inactive users' names.
const inactiveUserNames = users
  .filter((user) => !user.isActive)
  .map((user) => user.name);
console.log(inactiveUserNames);

// --------------------------------------------------------------------------------
// 9. Find the user with the minimum age.
const userWithMinAge = users.reduce(
  (youngest, user) => (user.age < youngest.age ? user : youngest),
  users[0]
);
console.log(userWithMinAge);

// --------------------------------------------------------------------------------
// 10. Check if there are any users above a certain age (e.g., 35).
const hasUsersAbove35 = users.some((user) => user.age > 35);
console.log(hasUsersAbove35);

// --------------------------------------------------------------------------------
// 11. Find users who have an even age.
const usersWithEvenAge = users.filter((user) => user.age % 2 === 0);
console.log(usersWithEvenAge);

// --------------------------------------------------------------------------------
// 12. Group users by their active status (active/inactive).
const groupByStatus = users.reduce(
  (group, user) => {
    group[user.isActive ? "active" : "inactive"].push(user);
    return group;
  },
  { active: [], inactive: [] }
);
console.log(groupByStatus);

// --------------------------------------------------------------------------------
// 13. Update the email of a specific user by their ID (e.g., ID 3).
const updateUserEmailById = (id, newEmail) => {
  const user = users.find((user) => user.id === id);
  if (user) user.email = newEmail;
  return user;
};
console.log(updateUserEmailById(3, "newemail@example.com"));

// --------------------------------------------------------------------------------
// 14. Remove a user by their ID (e.g., ID 5).
const removeUserById = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) users.splice(index, 1);
};
removeUserById(5);
console.log(users);

// --------------------------------------------------------------------------------
// 15. Check if a user with a specific name exists (e.g., "Charlie").
const doesUserExist = (name) => users.some((user) => user.name === name);
console.log(doesUserExist("Charlie"));

// --------------------------------------------------------------------------------
// 16. Find the sum of all users' ages.
const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

// --------------------------------------------------------------------------------
// 17. Find the average age of active users.
const averageAgeOfActiveUsers =
  users
    .filter((user) => user.isActive)
    .reduce((sum, user) => sum + user.age, 0) /
  users.filter((user) => user.isActive).length;
console.log(averageAgeOfActiveUsers);

// --------------------------------------------------------------------------------
// 18. Create a new array with user details in a specific format (e.g., `name` and `isActive` only).
const userDetails = users.map((user) => ({
  name: user.name,
  isActive: user.isActive,
}));
console.log(userDetails);

// --------------------------------------------------------------------------------
// 19. Find the first user whose name starts with a given letter (e.g., "A").
const findUserByFirstLetter = (letter) =>
  users.find((user) => user.name[0].toLowerCase() === letter.toLowerCase());
console.log(findUserByFirstLetter("A"));

// --------------------------------------------------------------------------------
// 20. Sort the users by their name alphabetically.
const sortedByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

// --------------------------------------------------------------------------------
// 21. Find the users who have both `age` greater than a certain value and `isActive` as `true` (e.g., age > 30).
const activeUsersAbove30 = users.filter(
  (user) => user.age > 30 && user.isActive
);
console.log(activeUsersAbove30);

// --------------------------------------------------------------------------------
// 22. Check if all users are active.
const allUsersActive = users.every((user) => user.isActive);
console.log(allUsersActive);

// --------------------------------------------------------------------------------
// 23. Create an array of users who have an email from a specific domain (e.g., `example.com`).
const usersFromExampleDomain = users.filter((user) =>
  user.email.endsWith("@example.com")
);
console.log(usersFromExampleDomain);

// --------------------------------------------------------------------------------
// 24. Find the user with the longest name.
const userWithLongestName = users.reduce(
  (longest, user) => (user.name.length > longest.name.length ? user : longest),
  users[0]
);
console.log(userWithLongestName);

// --------------------------------------------------------------------------------
// 25. Get a list of users who are older than a given age and are inactive (e.g., older than 30).
const olderInactiveUsers = users.filter(
  (user) => user.age > 30 && !user.isActive
);
console.log(olderInactiveUsers);

// --------------------------------------------------------------------------------
// 26. Find the most common age among the users.
const ageFrequency = users.reduce((freq, user) => {
  freq[user.age] = (freq[user.age] || 0) + 1;
  return freq;
}, {});
const mostCommonAge = Object.keys(ageFrequency).reduce((a, b) =>
  ageFrequency[a] > ageFrequency[b] ? a : b
);
console.log(mostCommonAge);

// --------------------------------------------------------------------------------
// 27. Create a new array with each user's age incremented by 1.
const incrementedAges = users.map((user) => ({ ...user, age: user.age + 1 }));
console.log(incrementedAges);

// --------------------------------------------------------------------------------
// 28. Find the user who has the most recent email (based on alphabetical sorting of emails).
const mostRecentEmailUser = users.reduce(
  (latest, user) => (user.email > latest.email ? user : latest),
  users[0]
);
console.log(mostRecentEmailUser);

// --------------------------------------------------------------------------------
// 29. Determine the percentage of active users.
const activeUserPercentage = (activeUserCount / users.length) * 100;
console.log(activeUserPercentage);

// --------------------------------------------------------------------------------
// 30. Get the users whose `id` is within a specific range (e.g., between 3 and 7).
const usersInRange = users.filter((user) => user.id >= 3 && user.id <= 7);
console.log(usersInRange);

// --------------------------------------------------------------------------------
