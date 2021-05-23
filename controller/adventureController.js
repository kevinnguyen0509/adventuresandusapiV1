const Adventure = require("./../model/adventuresModel");
//const Test = require("./../model/test");

exports.getAllAdventures = async (req, res) => {
  try {
    const allAdventures = await Adventure.find();
    res.status(200).json({
      status: "Success",
      adventures: allAdventures,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

exports.createAdventure = async (req, res) => {
  try {
    const newAdventurePost = await Adventure.create(req.body);
    res.status(200).json({
      status: "Success",
      data: { data: newAdventurePost },
    });
  } catch (err) {
    res.json({
      status: "Failed",
      message: err,
    });
  }
};
