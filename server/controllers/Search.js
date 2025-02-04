const {
  QueryList,
  QueryListDetails,
  QueryListYeses,
  QueryListNos,
  QueryListByName,
  RespondYesByName,
  RespondNoByName,
  QueryListPendings,
} = require("../service/Search");

const SearchList = async (req, res) => {
  const { firstName, lastName } = req.query;
  console.log(req.query);

  QueryListByName({ firstName: firstName.trim(), lastName: lastName.trim() })
    .then((data) => {
      console.log(data);
      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).json(null);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(null);
    });
};

const GetAll = async (req, res) => {
  QueryList()
    .then((data) => {
      // console.log(data)
      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).json(null);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(null);
    });
};

const GetDetails = async (req, res) => {
  QueryListDetails()
    .then((data) => {
      console.log(data);
      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).json(null);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(null);
    });
};

const GetPendings = async (req, res) => {
  QueryListPendings()
    .then((data) => {
      console.log(data);
      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).json(null);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(null);
    });
};

const GetYeses = async (req, res) => {
  QueryListYeses()
    .then((data) => {
      console.log(data);
      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).json(null);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(null);
    });
};

const GetNos = async (req, res) => {
  QueryListNos()
    .then((data) => {
      console.log(data);
      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).json(null);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(null);
    });
};

const RespondYes = async (req, res) => {
  const { firstName, lastName, plusOneResponse } = req.query;
  if (plusOneResponse) {
    RespondYesByName({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      plusOneResponse,
    })
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(404).json(null);
      });
  }

  RespondYesByName({
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    plusOneResponse,
  })
    .then((data) => {
      console.log;
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(null);
    });
};
const RespondNo = async (req, res) => {
  const { firstName, lastName, plusOneResponse } = req.query;
  if (plusOneResponse) {
    RespondNoByName({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      plusOneResponse,
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(404).json(null);
      });
  }

  RespondNoByName({
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    plusOneResponse,
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(null);
    });
};

module.exports = {
  SearchList,
  GetAll,
  GetDetails,
  GetPendings,
  GetYeses,
  GetNos,
  RespondYes,
  RespondNo,
};
