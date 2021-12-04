const profileDateArgs = process.argv.slice(2, process.argv.length);
console.log(profileDateArgs);

const printProfileData = (profileDataArr) => {
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem);
  });
};
printProfileData(profileDateArgs);
