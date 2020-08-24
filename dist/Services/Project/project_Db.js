"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_AllProjects = get_AllProjects;
exports.get_AllTechnos = get_AllTechnos;
exports.get_ProjectsByTag = get_ProjectsByTag;
exports.get_ProjectByname = get_ProjectByname;
exports.createProject = createProject;
exports.updatProject = updatProject;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../../Database/models"));

var _sequelize = require("sequelize");

function get_AllProjects() {
  return _get_AllProjects.apply(this, arguments);
}

function _get_AllProjects() {
  _get_AllProjects = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var projects;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            projects = _models.default.Project.findAll({
              order: [['id', 'DESC']]
            });

            if (!projects) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", projects);

          case 3:
            return _context.abrupt("return", null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get_AllProjects.apply(this, arguments);
}

function get_AllTechnos() {
  return _get_AllTechnos.apply(this, arguments);
}

function _get_AllTechnos() {
  _get_AllTechnos = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var technos;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            technos = _models.default.Project.findAll({
              attributes: ['techno']
            });

            if (!technos) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", technos);

          case 3:
            return _context2.abrupt("return", null);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _get_AllTechnos.apply(this, arguments);
}

function get_ProjectsByTag(_x) {
  return _get_ProjectsByTag.apply(this, arguments);
}

function _get_ProjectsByTag() {
  _get_ProjectsByTag = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(tag) {
    var projects;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            projects = _models.default.Project.findAll({
              order: [['id', 'DESC']],
              where: (0, _defineProperty2.default)({}, _sequelize.Op.or, [{
                techno: (0, _defineProperty2.default)({}, _sequelize.Op.like, "%".concat(tag, "%"))
              }])
            });

            if (!projects) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", projects);

          case 3:
            return _context3.abrupt("return", null);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _get_ProjectsByTag.apply(this, arguments);
}

function get_ProjectByname(_x2) {
  return _get_ProjectByname.apply(this, arguments);
}

function _get_ProjectByname() {
  _get_ProjectByname = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(name) {
    var projects;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            projects = _models.default.Project.findOne({
              where: {
                title: name
              }
            });

            if (!projects) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", projects);

          case 3:
            return _context4.abrupt("return", null);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _get_ProjectByname.apply(this, arguments);
}

function createProject(_x3) {
  return _createProject.apply(this, arguments);
}

function _createProject() {
  _createProject = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(arg) {
    var projects;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            projects = _models.default.Project.create({
              img: arg.img,
              linkWebsite: arg.linkWebsite,
              linkCode: arg.linkCode,
              title: arg.title,
              description: arg.description,
              techno: arg.techno
            });

            if (!projects) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", projects);

          case 3:
            return _context5.abrupt("return", null);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _createProject.apply(this, arguments);
}

function updatProject(_x4) {
  return _updatProject.apply(this, arguments);
}

function _updatProject() {
  _updatProject = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(arg) {
    var projects;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projects = _models.default.Project.update({
              img: arg.img,
              linkWebsite: arg.linkWebsite,
              linkCode: arg.linkCode,
              title: arg.title,
              description: arg.description,
              techno: arg.techno
            }, {
              returning: true,
              where: {
                id: arg.id
              }
            });

            if (!projects) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", projects);

          case 3:
            return _context6.abrupt("return", null);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updatProject.apply(this, arguments);
}