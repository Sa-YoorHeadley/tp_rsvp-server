const List = require("../models/List");

const QueryListByName = (name) => {
  return new Promise(async (resolve, reject) => {
    const { firstName, lastName } = name;
    List.find({ firstName, lastName })
      .then((data) => {
        return resolve(data[0]);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
};

const QueryList = () => {
  return new Promise(async (resolve, reject) => {
    List.find()
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
};

const QueryListPendings = () => {
  return new Promise(async (resolve, reject) => {
    List.find({ response: "Pending" }, "-_id firstName lastName")
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
};

const QueryListYeses = () => {
  return new Promise(async (resolve, reject) => {
    List.find({ response: "Yes" }, "-_id firstName lastName")
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
};

const QueryListNos = () => {
  return new Promise(async (resolve, reject) => {
    List.find({ response: "Nos" }, "-_id firstName lastName")
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
};

const QueryListDetails = () => {
  return new Promise(async (resolve, reject) => {
    const details = {};
    const plusOneCount = await List.countDocuments({ plusOne: true });
    const pendingCount = await List.countDocuments({ response: "Pending" });
    const yesCount = await List.countDocuments({ response: "Yes" });
    const noCount = await List.countDocuments({ response: "No" });
    details.plusOnes = plusOneCount;
    details.pendings = pendingCount;
    details.yeses = yesCount;
    details.nos = noCount;
    console.log(details);
    return resolve(details);
    // List.find()
    // .then(data => { return resolve(data) })
    // .catch(error => {
    //     console.log(error)
    //     return reject(error)
    // })
  });
};

const RespondYesByName = (name) => {
  return new Promise(async (resolve, reject) => {
    const { firstName, lastName } = name;
    List.findOneAndUpdate(
      { firstName, lastName },
      { response: "Yes" },
      { new: true }
    )
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

const RespondNoByName = (name) => {
  return new Promise(async (resolve, reject) => {
    const { firstName, lastName } = name;
    List.findOneAndUpdate(
      { firstName, lastName },
      { response: "No" },
      { new: true }
    )
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

module.exports = {
  QueryList,
  QueryListDetails,
  QueryListPendings,
  QueryListYeses,
  QueryListNos,
  QueryListByName,
  RespondYesByName,
  RespondNoByName,
};
