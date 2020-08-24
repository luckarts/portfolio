"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListExperiences = getListExperiences;
exports.getExperiencesByName = getExperiencesByName;
exports.create_Experiences_Details = create_Experiences_Details;
exports.create_List_Experiences = create_List_Experiences;
exports.create_Experiences = create_Experiences;
exports.createAll_Experiences = createAll_Experiences;
exports.update_Experience = update_Experience;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _experiences_Db = require("../../Services/Experiences/experiences_Db");

function getListExperiences(_x, _x2) {
  return _getListExperiences.apply(this, arguments);
}

function _getListExperiences() {
  _getListExperiences = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var listExperiences;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _experiences_Db.get_AllExperiences)();

          case 2:
            listExperiences = _context.sent;

            if (!listExperiences) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              listExperiences: listExperiences
            }));

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getListExperiences.apply(this, arguments);
}

function getExperiencesByName(_x3, _x4) {
  return _getExperiencesByName.apply(this, arguments);
}

function _getExperiencesByName() {
  _getExperiencesByName = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var company, listExperiences;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            company = req.params.company;
            _context2.next = 3;
            return (0, _experiences_Db.get_ExperiencesByName)(company);

          case 3:
            listExperiences = _context2.sent;

            if (!listExperiences) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              listExperiences: listExperiences
            }));

          case 8:
            return _context2.abrupt("return", null);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getExperiencesByName.apply(this, arguments);
}

function create_Experiences_Details(_x5, _x6) {
  return _create_Experiences_Details.apply(this, arguments);
}

function _create_Experiences_Details() {
  _create_Experiences_Details = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body, date, fonction, company, link, new_ExperienceDetails;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, date = _req$body.date, fonction = _req$body.fonction, company = _req$body.company, link = _req$body.link;
            _context3.next = 3;
            return (0, _experiences_Db.createExperiencesDetails)({
              date: date,
              fonction: fonction,
              company: company,
              link: link
            });

          case 3:
            new_ExperienceDetails = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              new_ExperienceDetails: new_ExperienceDetails
            }));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _create_Experiences_Details.apply(this, arguments);
}

function create_List_Experiences(_x7, _x8) {
  return _create_List_Experiences.apply(this, arguments);
}

function _create_List_Experiences() {
  _create_List_Experiences = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var _req$body2, newListExp, id, i, description;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, newListExp = _req$body2.newListExp, id = _req$body2.id;
            i = 0;

          case 2:
            if (!(i < newListExp.length)) {
              _context4.next = 9;
              break;
            }

            description = newListExp[i].description;
            _context4.next = 6;
            return (0, _experiences_Db.createListExperiences)(description, id);

          case 6:
            i++;
            _context4.next = 2;
            break;

          case 9:
            return _context4.abrupt("return", res.status(200).json({
              message: 'you are post in db Experience'
            }));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _create_List_Experiences.apply(this, arguments);
}

function create_Experiences(_x9, _x10) {
  return _create_Experiences.apply(this, arguments);
}

function _create_Experiences() {
  _create_Experiences = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    var year, newExperience;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            year = req.body.year;
            _context5.next = 3;
            return (0, _experiences_Db.createExperiences)({
              year: year
            });

          case 3:
            newExperience = _context5.sent;
            return _context5.abrupt("return", res.status(200).json({
              message: 'you are post in db Experience',
              newExperience: newExperience
            }));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _create_Experiences.apply(this, arguments);
}

function createAll_Experiences(_x11, _x12) {
  return _createAll_Experiences.apply(this, arguments);
}
/* export async function createAll_Experiences(req, res) {
    const { year } = req.body
    if (req.body.card_left) {
        const { date, fonction, company, link, description, ExperiencesId } = req.body.card_left
        if (date || fonction || company || link) {
            await createExperiencesDetails({ date, fonction, company, link });
        }

        if (description && ExperiencesId) {
            await createListExperiences({ description, ExperiencesId });
        }
    }
    if (req.body.card_right) {
        const { date, fonction, company, link, description, ExperiencesId } = req.body.card_right
        if (date || fonction || company || link) {
            await createExperiencesDetails({ date, fonction, company, link });
        }
        if (description && ExperiencesId) {
            await createListExperiences({ description, ExperiencesId });
        }
    }
    if (year) {
        await createExperiences({ year });
    }

    return res.status(200).json({ "message": "Experience has been created !" });
} */


function _createAll_Experiences() {
  _createAll_Experiences = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res) {
    var _req$body3, date, fonction, company, link, list_experience, year, i, description, id;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, date = _req$body3.date, fonction = _req$body3.fonction, company = _req$body3.company, link = _req$body3.link, list_experience = _req$body3.list_experience, year = _req$body3.year;

            if (!(date || fonction || company || link)) {
              _context6.next = 4;
              break;
            }

            _context6.next = 4;
            return (0, _experiences_Db.createExperiencesDetails)(date, fonction, company, link);

          case 4:
            if (!list_experience) {
              _context6.next = 14;
              break;
            }

            i = 0;

          case 6:
            if (!(i < list_experience.length)) {
              _context6.next = 14;
              break;
            }

            description = list_experience[i].description;
            id = list_experience[i].id;
            _context6.next = 11;
            return (0, _experiences_Db.createListExperiences)(description, id);

          case 11:
            i++;
            _context6.next = 6;
            break;

          case 14:
            if (!year) {
              _context6.next = 17;
              break;
            }

            _context6.next = 17;
            return (0, _experiences_Db.createExperiences)({
              year: year
            });

          case 17:
            return _context6.abrupt("return", res.status(200).json({
              message: 'Experience has been created !'
            }));

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _createAll_Experiences.apply(this, arguments);
}

function update_Experience(_x13, _x14) {
  return _update_Experience.apply(this, arguments);
}

function _update_Experience() {
  _update_Experience = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(req, res) {
    var id, _req$body4, date, fonction, company, link, year, list_experience, i, description, _id;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _req$body4 = req.body, date = _req$body4.date, fonction = _req$body4.fonction, company = _req$body4.company, link = _req$body4.link, year = _req$body4.year, list_experience = _req$body4.list_experience;

            if (!year) {
              _context7.next = 5;
              break;
            }

            _context7.next = 5;
            return (0, _experiences_Db.updateExperiences)(year, id);

          case 5:
            if (!(date || fonction || company || link)) {
              _context7.next = 8;
              break;
            }

            _context7.next = 8;
            return (0, _experiences_Db.updateExperiencesDetails)(date, fonction, company, link, id);

          case 8:
            if (!list_experience) {
              _context7.next = 18;
              break;
            }

            i = 0;

          case 10:
            if (!(i < list_experience.length)) {
              _context7.next = 18;
              break;
            }

            description = list_experience[i].description;
            _id = list_experience[i].id;
            _context7.next = 15;
            return (0, _experiences_Db.updateListExperiences)(description, _id);

          case 15:
            i++;
            _context7.next = 10;
            break;

          case 18:
            return _context7.abrupt("return", res.status(200).json({
              message: 'you are update in db Experience'
            }));

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _update_Experience.apply(this, arguments);
}