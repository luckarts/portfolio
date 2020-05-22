"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_AllExperiences = get_AllExperiences;
exports.get_ExperiencesByName = get_ExperiencesByName;
exports.createExperiencesDetails = createExperiencesDetails;
exports.updateExperiencesDetails = updateExperiencesDetails;
exports.createListExperiences = createListExperiences;
exports.updateListExperiences = updateListExperiences;
exports.createExperiences = createExperiences;
exports.updateExperiences = updateExperiences;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../../Database/models"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var Op = _sequelize["default"].Op;

function get_AllExperiences() {
  return _get_AllExperiences.apply(this, arguments);
}

function _get_AllExperiences() {
  _get_AllExperiences = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var experiences;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            experiences = _models["default"].Experience_detail.findAll({
              attributes: ['id', 'date', 'fonction', 'company', 'link'],
              include: [{
                model: _models["default"].Experience,
                as: 'experience',
                attributes: ['year']
              }, {
                model: _models["default"].List_experience,
                as: 'list_experience',
                attributes: ['description']
              }]
            });

            if (!experiences) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", experiences);

          case 3:
            return _context.abrupt("return", null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get_AllExperiences.apply(this, arguments);
}

function get_ExperiencesByName(_x) {
  return _get_ExperiencesByName.apply(this, arguments);
}

function _get_ExperiencesByName() {
  _get_ExperiencesByName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(company) {
    var experiences;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            experiences = _models["default"].Experience_detail.findOne({
              attributes: ['date', 'fonction', 'company', 'link', 'id'],
              where: {
                company: company
              },
              include: [{
                model: _models["default"].List_experience,
                as: 'list_experience',
                attributes: ['description', 'id']
              }, {
                model: _models["default"].Experience,
                as: 'experience',
                attributes: ['year']
              }]
            });

            if (!experiences) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", experiences);

          case 3:
            return _context2.abrupt("return", null);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _get_ExperiencesByName.apply(this, arguments);
}

function createExperiencesDetails(_x2, _x3, _x4, _x5) {
  return _createExperiencesDetails.apply(this, arguments);
}

function _createExperiencesDetails() {
  _createExperiencesDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(date, fonction, company, link) {
    var experienceDetails;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (date) {
              _context3.next = 2;
              break;
            }

            throw new Error('invalid argument date');

          case 2:
            _context3.next = 4;
            return _models["default"].Experience_detail.create({
              date: date,
              fonction: fonction,
              company: company,
              link: link
            });

          case 4:
            experienceDetails = _context3.sent;
            return _context3.abrupt("return", experienceDetails);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createExperiencesDetails.apply(this, arguments);
}

function updateExperiencesDetails(_x6, _x7, _x8, _x9, _x10) {
  return _updateExperiencesDetails.apply(this, arguments);
}

function _updateExperiencesDetails() {
  _updateExperiencesDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(date, fonction, company, link, id) {
    var experienceDetail;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models["default"].Experience_detail.update({
              date: date,
              fonction: fonction,
              company: company,
              link: link
            }, {
              where: {
                id: id
              }
            });

          case 2:
            experienceDetail = _context4.sent;

            if (!experienceDetail) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", experienceDetail);

          case 5:
            return _context4.abrupt("return", null);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateExperiencesDetails.apply(this, arguments);
}

function createListExperiences(_x11, _x12) {
  return _createListExperiences.apply(this, arguments);
}

function _createListExperiences() {
  _createListExperiences = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(description, id) {
    var listExperience;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (description) {
              _context5.next = 2;
              break;
            }

            throw new Error('invalid argument listExperiences');

          case 2:
            if (id) {
              _context5.next = 4;
              break;
            }

            throw new Error('invalid argument id');

          case 4:
            _context5.next = 6;
            return _models["default"].List_experience.create({
              description: description,
              experienceDetailId: id
            });

          case 6:
            listExperience = _context5.sent;

            if (!listExperience) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", listExperience);

          case 9:
            return _context5.abrupt("return", null);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _createListExperiences.apply(this, arguments);
}

function updateListExperiences(_x13, _x14) {
  return _updateListExperiences.apply(this, arguments);
}

function _updateListExperiences() {
  _updateListExperiences = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(description, id) {
    var listExperience;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _models["default"].List_experience.update({
              description: description
            }, {
              where: {
                id: id
              }
            });

          case 2:
            listExperience = _context6.sent;

            if (!listExperience) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", listExperience);

          case 5:
            return _context6.abrupt("return", null);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateListExperiences.apply(this, arguments);
}

function createExperiences(_x15) {
  return _createExperiences.apply(this, arguments);
}

function _createExperiences() {
  _createExperiences = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(year) {
    var experience;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _models["default"].Experience.create({
              year: year
            });

          case 2:
            experience = _context7.sent;

            if (!experience) {
              _context7.next = 5;
              break;
            }

            return _context7.abrupt("return", experience);

          case 5:
            return _context7.abrupt("return", null);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _createExperiences.apply(this, arguments);
}

function updateExperiences(_x16, _x17) {
  return _updateExperiences.apply(this, arguments);
}

function _updateExperiences() {
  _updateExperiences = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(year, id) {
    var card, experience;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (id % 2 === 0) {
              card === {
                experience_detailsId_right: id
              };
            } else {
              card === {
                experience_detailsId_left: id
              };
            }

            _context8.next = 3;
            return _models["default"].Experience.update({
              year: year
            }, {
              returning: true,
              where: (0, _defineProperty2["default"])({}, Op.or, [card])
            });

          case 3:
            experience = _context8.sent;

            if (!experience) {
              _context8.next = 6;
              break;
            }

            return _context8.abrupt("return", experience);

          case 6:
            return _context8.abrupt("return", null);

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _updateExperiences.apply(this, arguments);
}